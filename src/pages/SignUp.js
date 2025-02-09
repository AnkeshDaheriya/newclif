import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderFour from "../common/header/HeaderFour";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABWVHcf0TTRvkcDpmhw9pAgFFRlgUteY",
  authDomain: "clif-864a1.firebaseapp.com",
  projectId: "clif-864a1",
  storageBucket: "clif-864a1.firebasestorage.app",
  messagingSenderId: "275052466574",
  appId: "1:275052466574:web:aa2752b7634990818b54df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// API endpoint
const API_BASE_URL = "http://localhost:5000/";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    otp: "",
    education: "",
    yearOfCompletion: "",
    professionalDomain: "",
    currentRole: "",
    currentSalary: "",
    desiredRole: "",
    desiredSalary: "",
    linkedinUrl: "",
    fileUpload: "",
    age: "",
    phone_no: "",
    gender: "",
    current_employer: "",
    desired_employer: "",
    current_location: "",
    specialization: "",
    desiredLocationCountry: "",
    desiredLocationCity: "",
    headshot: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files[0],
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  // Handle file upload
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.fileUrl;
    } catch (error) {
      console.error("File upload failed:", error);
      throw error;
    }
  };

  // Handle Google Sign Up
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Add scope for additional profile information
      provider.addScope("profile");
      provider.addScope("email");

      // Configure custom parameters
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Extract user details with null checks
      const email = user.email;
      const displayName = user.displayName || "";
      const photoURL = user.photoURL;
      const nameParts = displayName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

      // Create user data object
      const userData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        photoUrl: photoURL,
        authProvider: "google",
        verified: true,
        createdAt: new Date().toISOString(),
      };

      // Save user data to MongoDB
      const response = await axios.post(`${API_BASE_URL}/users`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        // Store token and user data
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("userData", JSON.stringify(userData));

        // Update form state
        setFormValues((prev) => ({
          ...prev,
          ...userData,
        }));
        setOtpVerified(true);

        // Optionally redirect to next step
        // navigate('/complete-profile');
      } else {
        throw new Error(response.data.message || "Failed to save user data");
      }
    } catch (error) {
      console.error("Google sign up error:", error);

      // Handle specific error cases
      let errorMessage = "Google sign up failed. Please try again.";
      if (error.code === "auth/popup-blocked") {
        errorMessage =
          "Please enable popups for this website to use Google sign-in.";
      } else if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Sign-in was cancelled. Please try again.";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "Only one sign-in window can be open at a time.";
      }

      setFormErrors((prev) => ({
        ...prev,
        google: errorMessage,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (!otpSent && !otpVerified) {
        await sendOtp(formValues.email);
      } else if (otpSent && !otpVerified) {
        await verifyOtp(formValues.email, formValues.otp);
      } else if (otpVerified) {
        try {
          // Handle file uploads
          let fileUrl = null;
          let headshotUrl = null;

          if (formValues.fileUpload) {
            fileUrl = await handleFileUpload(formValues.fileUpload);
          }

          if (formValues.headshot) {
            headshotUrl = await handleFileUpload(formValues.headshot);
          }

          // Prepare user data
          const userData = {
            ...formValues,
            fileUrl,
            headshotUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          // Save to MongoDB
          const response = await axios.post(
            `${API_BASE_URL}/users/complete-profile`,
            userData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              },
            }
          );

          if (response.data.success) {
            navigate("/dashboard");
          } else {
            throw new Error("Failed to save profile data");
          }
        } catch (error) {
          console.error("Profile submission error:", error);
          setFormErrors((prev) => ({
            ...prev,
            submit: "Failed to save profile. Please try again.",
          }));
        }
      }
    }
  };

  // Send OTP
  const sendOtp = async (email) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/send-otp`, {
        email,
      });
      if (response.data.success) {
        setOtpSent(true);
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (error) {
      console.error("OTP send error:", error);
      setFormErrors((prev) => ({
        ...prev,
        email: "Failed to send OTP. Please try again.",
      }));
    }
  };

  // Verify OTP
  const verifyOtp = async (email, otp) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, {
        email,
        otp,
      });
      if (response.data.success) {
        setOtpVerified(true);
        localStorage.setItem("userToken", response.data.token);
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      setFormErrors((prev) => ({
        ...prev,
        otp: "Invalid OTP. Please try again.",
      }));
    }
  };

  // Form validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.firstname) {
      errors.firstname = "First name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!otpVerified) {
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.cpassword) {
        errors.cpassword = "Confirm password is required";
      } else if (values.password !== values.cpassword) {
        errors.cpassword = "Passwords do not match";
      }
    }
    if (otpSent && !values.otp) {
      errors.otp = "OTP is required";
    }

    // Additional validations for verified users
    if (otpVerified) {
      if (!values.education) {
        errors.education = "Education is required";
      }
      if (!values.professionalDomain) {
        errors.professionalDomain = "Professional domain is required";
      }
      if (!values.currentRole) {
        errors.currentRole = "Current role is required";
      }
      if (!values.currentSalary) {
        errors.currentSalary = "Current salary is required";
      }
      if (!values.desiredRole) {
        errors.desiredRole = "Desired role is required";
      }
      if (!values.desiredSalary) {
        errors.desiredSalary = "Desired salary is required";
      }
      if (!values.linkedinUrl) {
        errors.linkedinUrl = "LinkedIn URL is required";
      }
    }

    return errors;
  };

  return (
    <main className="main-wrapper">
      <HeaderFour />
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-6">
              <div className="contact-form-box shadow-box">
                {!otpVerified ? (
                  <>
                    {!otpSent ? (
                      <>
                        <h3 className="title text-center">Sign Up</h3>
                        <h5 className="text-center">
                          Already a member? <Link to="/login">Sign In</Link>
                        </h5>
                        <form
                          onSubmit={handleSubmit}
                          className="axil-contact-form">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>First name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First name"
                                  name="firstname"
                                  value={formValues.firstname}
                                  onChange={handleChange}
                                />
                              </div>
                              <p className="text-red">{formErrors.firstname}</p>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Last name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last name"
                                  name="lastname"
                                  value={formValues.lastname}
                                  onChange={handleChange}
                                />
                              </div>
                              <p className="text-red">{formErrors.lastname}</p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Email address*</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="name@gmail.com"
                              name="email"
                              value={formValues.email}
                              onChange={handleChange}
                              disabled={otpSent}
                            />
                          </div>
                          <p className="text-red">{formErrors.email}</p>

                          <div className="form-group">
                            <label>Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="******"
                              name="password"
                              value={formValues.password}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.password}</p>

                          <div className="form-group">
                            <label>Confirm Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="******"
                              name="cpassword"
                              value={formValues.cpassword}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.cpassword}</p>

                          <div className="form-group gap-2 flex">
                            <button
                              type="submit"
                              className="axil-btn btn-fill-primary btn-fluid btn-primary"
                              name="submit-btn">
                              Sign Up
                            </button>
                            <button
                              type="button"
                              onClick={handleGoogleSignUp}
                              className="axil-btn btn-fill-light btn-fluid btn-light"
                              style={{
                                height: "46px",
                                marginTop: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}>
                              <img
                                src="https://www.svgrepo.com/show/452216/google.svg"
                                alt="Google Icon"
                                style={{ height: "24px", width: "24px" }}
                              />
                            </button>
                          </div>
                          {formErrors.google && (
                            <p className="text-red text-center mt-2">
                              {formErrors.google}
                            </p>
                          )}
                        </form>
                      </>
                    ) : (
                      <div className="title text-center">
                        OTP has been sent! Please verify.
                      </div>
                    )}

                    {otpSent && (
                      <form
                        onSubmit={handleSubmit}
                        className="axil-contact-form">
                        <div className="form-group">
                          <label>Email address*</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="name@gmail.com"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            disabled={otpSent}
                          />
                        </div>
                        <p className="text-red">{formErrors.email}</p>
                        <div className="form-group">
                          <label>OTP*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter OTP"
                            name="otp"
                            value={formValues.otp}
                            onChange={handleChange}
                          />
                        </div>
                        <p className="text-red">{formErrors.otp}</p>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="axil-btn btn-fill-primary btn-fluid btn-primary"
                            name="submit-btn">
                            Verify OTP
                          </button>
                        </div>
                      </form>
                    )}
                  </>
                ) : (
                  <div>
                    <h5 className="text-center">Welcome to CLIF.AI</h5>
                    <form onSubmit={handleSubmit} className="axil-contact-form">
                      <div className="row">
                        {/* First Name */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              name="firstname"
                              value={formValues.firstname}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.firstname}</p>
                        </div>

                        {/* Last Name */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              name="lastname"
                              value={formValues.lastname}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.lastname}</p>
                        </div>
                        {/* Upload Professional Headshot */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Upload Professional Headshot</label>
                            <input
                              type="file"
                              className="form-control"
                              name="headshot"
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.headshot}</p>
                        </div>
                      </div>

                      <div className="row">
                        {/* Age Range */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Age Range</label>
                            {[
                              "Below 18",
                              "18 – 25",
                              "26 – 34",
                              "35 – 45",
                              "45 – 55",
                              "56 and above",
                            ].map((age, index) => (
                              <div className="form-check" key={index}>
                                <input
                                  type="radio"
                                  id={`age${index}`}
                                  name="age"
                                  value={age}
                                  onChange={handleChange}
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor={`age${index}`}
                                  className="form-check-label">
                                  {age}
                                </label>
                              </div>
                            ))}
                          </div>
                          <p className="text-red">{formErrors.age}</p>
                        </div>

                        {/* Mobile Number */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Mobile No.</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone No."
                              name="phone_no"
                              value={formValues.phone_no}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.phone_no}</p>
                        </div>

                        {/* Gender */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Gender</label>
                            {["Male", "Female", "Rather not specify"].map(
                              (gender, index) => (
                                <div className="form-check" key={index}>
                                  <input
                                    type="radio"
                                    id={`gender${index}`}
                                    name="gender"
                                    value={gender}
                                    onChange={handleChange}
                                    className="form-check-input"
                                  />
                                  <label
                                    htmlFor={`gender${index}`}
                                    className="form-check-label">
                                    {gender}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                          <p className="text-red">{formErrors.gender}</p>
                        </div>
                      </div>

                      <div className="row">
                        {/* Current Employer */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Current Employer *</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Current Employer"
                              name="current_employer"
                              value={formValues.current_employer}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">
                            {formErrors.current_employer}
                          </p>
                        </div>

                        {/* Desired Employer */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Desired Employer *</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Desired Employer"
                              name="desired_employer"
                              value={formValues.desired_employer}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">
                            {formErrors.desired_employer}
                          </p>
                        </div>

                        {/* Current Location */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Current Location</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Current Location"
                              name="current_location"
                              value={formValues.current_location}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">
                            {formErrors.current_location}
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        {/* Highest Level of Education */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Highest Level of Education *</label>
                            <select
                              name="education"
                              className="form-control"
                              value={formValues.education}
                              onChange={handleChange}>
                              <option value="" disabled>
                                Select Your Education
                              </option>
                              <option>Undergrad</option>
                              <option>Bachelors</option>
                              <option>Masters</option>
                              <option>Doctorate</option>
                            </select>
                          </div>
                          <p className="text-red">{formErrors.education}</p>
                        </div>

                        {/* Year of Completion */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Year of Completion</label>
                            <select
                              id="yearOfCompletion"
                              name="yearOfCompletion"
                              value={formValues.yearOfCompletion}
                              onChange={handleChange}
                              className="form-control">
                              <option value="" disabled>
                                Select Year of Completion
                              </option>
                              {Array.from(
                                { length: 2024 - 1950 + 1 },
                                (_, i) => 2024 - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <p className="text-red">
                            {formErrors.yearOfCompletion}
                          </p>
                        </div>

                        {/* Specialization */}
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Specialization</label>
                            <input
                              type="text"
                              id="specialization"
                              name="specialization"
                              value={formValues.specialization}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter your specialization"
                            />
                          </div>
                          <p className="text-red">
                            {formErrors.specialization}
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Desired Location Country *</label>
                            <select
                              name="desiredLocationCountry"
                              className="form-control"
                              value={formValues.desiredLocationCountry}
                              onChange={handleChange}>
                              <option value="" disabled>
                                Select country
                              </option>
                              <option value="Undergrad">Undergrad</option>
                              <option value="Bachelors">Bachelors</option>
                              <option value="Masters">Masters</option>
                              <option value="Doctorate">Doctorate</option>
                            </select>
                            {formErrors.desiredLocationCountry && (
                              <p className="text-red">
                                {formErrors.desiredLocationCountry}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Desired Location City *</label>
                            <select
                              name="desiredLocationCity"
                              className="form-control"
                              value={formValues.desiredLocationCity}
                              onChange={handleChange}>
                              <option value="" disabled>
                                Select city
                              </option>
                              {Array.from(
                                { length: 2024 - 1950 + 1 },
                                (_, i) => 2024 - i
                              ).map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                            {formErrors.desiredLocationCity && (
                              <p className="text-red">
                                {formErrors.desiredLocationCity}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group">
                            <label>Professional Domain *</label>
                            <select
                              name="professionalDomain"
                              className="form-control"
                              value={formValues.professionalDomain}
                              onChange={handleChange}>
                              <option value="" disabled>
                                Select Your Professional Domain
                              </option>
                              <option value="Technology">Technology</option>
                              <option value="Management">Management</option>
                              <option value="Finance">Finance</option>
                              <option value="Content Creator">
                                Content Creator
                              </option>
                              <option value="Entrepreneurship">
                                Entrepreneurship
                              </option>
                              <option value="Business Intelligence">
                                Business Intelligence
                              </option>
                              <option value="Venture Capital">
                                Venture Capital
                              </option>
                            </select>
                            {formErrors.professionalDomain && (
                              <p className="text-red">
                                {formErrors.professionalDomain}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Current Role *</label>
                            <select
                              name="currentRole"
                              className="form-control"
                              value={formValues.currentRole}
                              onChange={handleChange}>
                              <option value="" disabled>
                                Select Your Current Role
                              </option>
                              <option value="Undergrad / Not Employed">
                                Undergrad / Not Employed
                              </option>
                              <option value="Entry Level / Intern">
                                Entry Level / Intern
                              </option>
                              <option value="Individual Contributor (Jr. Level)">
                                Individual Contributor (Jr. Level)
                              </option>
                              <option value="Individual Contributor (Sr. Level)">
                                Individual Contributor (Sr. Level)
                              </option>
                              <option value="Manager">Manager</option>
                              <option value="Sr. Manager">Sr. Manager</option>
                              <option value="Director / Assistant Vice President">
                                Director / Assistant Vice President
                              </option>
                              <option value="Vice President">
                                Vice President
                              </option>
                              <option value="C-Suite (CEO/CFO/CMO & Similar)">
                                C-Suite (CEO/CFO/CMO & Similar)
                              </option>
                              <option value="Chairperson / Board of Directors">
                                Chairperson / Board of Directors
                              </option>
                            </select>
                            {formErrors.currentRole && (
                              <p className="text-red">
                                {formErrors.currentRole}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Current Salary *</label>
                            <input
                              type="number"
                              name="currentSalary"
                              className="form-control"
                              value={formValues.currentSalary}
                              onChange={handleChange}
                            />
                            {formErrors.currentSalary && (
                              <p className="text-red">
                                {formErrors.currentSalary}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Desired Role *</label>
                            <select
                              name="desiredRole"
                              className="form-control"
                              value={formValues.desiredRole}
                              onChange={handleChange}>
                              <option value="" disabled>
                                Select Your Desired Role
                              </option>
                              <option value="Undergrad / Not Employed">
                                Undergrad / Not Employed
                              </option>
                              <option value="Entry Level / Intern">
                                Entry Level / Intern
                              </option>
                              <option value="Individual Contributor (Jr. Level)">
                                Individual Contributor (Jr. Level)
                              </option>
                              <option value="Individual Contributor (Sr. Level)">
                                Individual Contributor (Sr. Level)
                              </option>
                              <option value="Manager">Manager</option>
                              <option value="Sr. Manager">Sr. Manager</option>
                              <option value="Director / Assistant Vice President">
                                Director / Assistant Vice President
                              </option>
                              <option value="Vice President">
                                Vice President
                              </option>
                              <option value="C-Suite (CEO/CFO/CMO & Similar)">
                                C-Suite (CEO/CFO/CMO & Similar)
                              </option>
                              <option value="Chairperson / Board of Directors">
                                Chairperson / Board of Directors
                              </option>
                            </select>
                            {formErrors.desiredRole && (
                              <p className="text-red">
                                {formErrors.desiredRole}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Desired Salary *</label>
                            <input
                              type="number"
                              name="desiredSalary"
                              className="form-control"
                              value={formValues.desiredSalary}
                              onChange={handleChange}
                            />
                            {formErrors.desiredSalary && (
                              <p className="text-red">
                                {formErrors.desiredSalary}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>LinkedIn URL *</label>
                            <input
                              type="url"
                              name="linkedinUrl"
                              className="form-control"
                              placeholder="https://www.linkedin.com/in/your-profile"
                              value={formValues.linkedinUrl}
                              onChange={handleChange}
                            />
                            {formErrors.linkedinUrl && (
                              <p className="text-red">
                                {formErrors.linkedinUrl}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Upload File *</label>
                            <input
                              type="file"
                              name="fileUpload"
                              className="form-control"
                              onChange={handleChange}
                            />
                            {formErrors.fileUpload && (
                              <p className="text-red">
                                {formErrors.fileUpload}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <Link
                          to={process.env.PUBLIC_URL + "/dashboard"}
                          className="axil-btn btn-fill-primary btn-fluid btn-primary"
                          name="submit-btn">
                          Continue
                        </Link>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </main>
  );
};

export default SignUp;
