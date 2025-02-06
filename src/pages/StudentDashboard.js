import React from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Mobile from "../component/Mobile";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <main classname="main_wrapper overflow-hidden">
      {/* <Header /> */}
      {/* <Mobile /> */}
      <div className="breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper" data-aos="fade-up">
                <div className="breadcrumb__title">
                  <h2 className="heading">Student Dashboard</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Student Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape__icon__2">
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__1"
            src="../../assetes/img/herobanner/herobanner__1.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__2"
            src="../../assetes/img/herobanner/herobanner__2.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__3"
            src="../../assetes/img/herobanner/herobanner__3.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__4"
            src="../../assetes/img/herobanner/herobanner__5.png"
            alt="photo"
          />
        </div>
      </div>

      <div className="dashboardarea sp_bottom_100">
        <div className="container-fluid full__width__padding">
          <div className="row">
            <div className="col-xl-12">
              <div className="dashboardarea__wraper">
                <div className="dashboardarea__img">
                  <div className="dashboardarea__inner student__dashboard__inner">
                    <div className="dashboardarea__left">
                      <div className="dashboardarea__left__img">
                        <img
                          loading="lazy"
                          src="../../assetes/img/teacher/teacher__2.png"
                          alt
                        />
                      </div>
                      <div className="dashboardarea__left__content">
                        <h4>Dond Tond</h4>
                        <ul>
                          <li>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-book-open">
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            9 Courses Enroled
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-award">
                              <circle cx={12} cy={8} r={7} />
                              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                            8 Certificate
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dashboardarea__right">
                      <div className="dashboardarea__right__button">
                        <a
                          className="default__button"
                          href="create-course.html">
                          Enroll A New Course
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-right">
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="container-fluid full__width__padding">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12">
                <div className="dashboard__inner sticky-top">
                  <div className="dashboard__nav__title">
                    <h6>Welcome, Dond Tond </h6>
                  </div>
                  <div className="dashboard__nav">
                    <ul>
                      <li>
                        <a className="active" href="student-dashboard.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="student-profile.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                          </svg>
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a href="student-message.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-book-open">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                          Message
                        </a>
                        <span className="dashboard__label">12</span>
                      </li>
                      <li>
                        <a href="student-enrolled-courses.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-bookmark">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="student-wishlist.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-bookmark">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="student-reviews.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          Reviews
                        </a>
                      </li>
                      <li>
                        <a href="student-my-quiz-attempts.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-help-circle">
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1={12} y1={17} x2="12.01" y2={17} />
                          </svg>
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="student-assignments.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-volume-1">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                          Assignments
                        </a>
                      </li>
                      <li>
                        <a href="student-settings.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-settings">
                            <circle cx={12} cy={12} r={3} />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-volume-1">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12">
                <div className="dashboard__content__wraper">
                  <div className="dashboard__section__title">
                    <h4>Summery</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../../assetes/img/counter/counter__1.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">27</span>+
                            </div>
                            <p>Enrolled Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../../assetes/img/counter/counter__2.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">08</span>+
                            </div>
                            <p>Active Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../../assetes/img/counter/counter__3.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">12</span>
                            </div>
                            <p>Complete Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard__content__wraper">
                  <div className="dashboard__section__title">
                    <h4>Feedbacks</h4>
                    <a href="../course.html">See More...</a>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="dashboard__table table-responsive">
                        <table>
                          <thead>
                            <tr>
                              <th>Course Name</th>
                              <th>Enrolled</th>
                              <th>Rating</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>
                                <a href="#">Javascript</a>
                              </th>
                              <td>1100</td>
                              <td>
                                <div className="dashboard__table__star">
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                              </td>
                            </tr>
                            <tr className="dashboard__table__row">
                              <th>
                                <a href="#">PHP</a>
                              </th>
                              <td>700</td>
                              <td>
                                <div className="dashboard__table__star">
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <a href="#">HTML</a>
                              </th>
                              <td>1350</td>
                              <td>
                                <div className="dashboard__table__star">
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                              </td>
                            </tr>
                            <tr className="dashboard__table__row">
                              <th>
                                <a href="#">Graphic</a>
                              </th>
                              <td>1266</td>
                              <td>
                                <div className="dashboard__table__star">
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <i className="icofont-star" />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}
