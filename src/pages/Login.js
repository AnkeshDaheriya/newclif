import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import HeaderFour from "../common/header/HeaderFour";
import FooterOne from "../common/footer/FooterOne";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Login Successfuly
    </Alert>
  );
};

const Login = () => {
  const form = useRef();

  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj5dgzp",
        "template_hfduayo",
        form.current,
        "WLENsTkBytC0yvItS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <>
      <main className="main-wrapper">
        <HeaderFour />
        <div className="section section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-form-box shadow-box ">
                  <h3 className="title text-center">Login In</h3>
                  <h5 className="text-center">
                    New here? <Link to="">Sign Up</Link>
                  </h5>
                  <div className="form-group">{result ? <Result /> : null}</div>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="axil-contact-form">
                    <div className="form-group">
                      <label>Email address*</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@gmail.com"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Password*</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="******"
                        name="password"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="axil-btn btn-fill-primary btn-fluid btn-primary"
                        name="submit-btn">
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  );
};

export default Login;
