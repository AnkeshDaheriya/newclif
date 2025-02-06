import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderFour from "../common/header/HeaderFour";

const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastname: "", // Last name
    email: "", // Email
    password: "", // Password
    cpassword: "", // Confirm password
    otp: "", // One-time password
    education: "", // Desired Location country (dropdown)
    yearOfCompletion: "", // Desired Location city (dropdown)
    professionalDomain: "", // Professional Domain (dropdown)
    currentRole: "", // Current Role (dropdown)
    currentSalary: "", // Current Salary (input field)
    desiredRole: "", // Desired Role (dropdown)
    desiredSalary: "", // Desired Salary (input field)
    linkedinUrl: "", // LinkedIn URL (input field)
    fileUpload: "", // File Upload (input field)
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(formValues);
    if (files && files[0]) {
      // Handle file input
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files[0], // store the file object in the state
      }));
    } else {
      // Handle text input
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value, // store the text value in the state
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (!otpSent) {
        // Call API to send OTP
        sendOtp(formValues.email);
      } else if (otpSent && !otpVerified) {
        // Call API to verify OTP
        verifyOtp(formValues.email, formValues.otp);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const sendOtp = (email) => {
    // Replace with actual API call
    console.log("Sending OTP to", email);
    setOtpSent(true);
  };

  const verifyOtp = (email, otp) => {
    // Replace with actual API call for OTP verification
    console.log(`Verifying OTP ${otp} for ${email}`);
    if (otp === "123456") {
      // Mock verification
      setOtpVerified(true);
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!otpSent && !values.password) {
      errors.password = "Password is required";
    }
    if (!otpSent && !values.cpassword) {
      errors.cpassword = "Confirm password is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Passwords do not match";
    }
    if (otpSent && !values.otp) {
      errors.otp = "OTP is required";
    }
    return errors;
  };

  return (
    <main className="main-wrapper">
      <HeaderFour />
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div>{/* <pre>{JSON.stringify(formValues)}</pre> */}</div>
            <div className="col-xl-8 col-lg-6">
              <div className="contact-form-box shadow-box">
                {!otpVerified ? (
                  <>
                    {!otpSent ? (
                      <>
                        <h3 className="title text-center">Sign Up</h3>
                        <h5 className="text-center">
                          Already a member? <Link to="">Sign In</Link>
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

                          <div className="form-group">
                            <button
                              type="submit"
                              className="axil-btn btn-fill-primary btn-fluid btn-primary"
                              name="submit-btn">
                              Sign Up
                            </button>
                          </div>
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
