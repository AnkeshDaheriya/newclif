import React from "react";
import Header from "../common/Header";

const CareerPath = () => {
  const employees = [
    {
      name: "Strategic Thinking",
      role: "Web Designer",
      project: "<video link>",
      priority: "6 Hours",
      priorityClass: "bg-primary-subtle text-primary",
      budget: "5%",
      img: "./assets/images/profile/user-3.jpg",
    },
  ];

  return (
    <>
      <Header />
      <div className="body-wrapper">
        <div className="container-fluid">
          <div className="d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                  <div className="mb-3 mb-sm-0">
                    <h4 className="card-title fw-semibold">Top Performers</h4>
                    <p className="card-subtitle">Best Employees</p>
                  </div>
                  <div>
                    <select className="form-select">
                      <option value={1}>March 2024</option>
                      <option value={2}>April 2024</option>
                      <option value={3}>May 2024</option>
                      <option value={4}>June 2024</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle text-nowrap mb-0">
                    <thead>
                      <tr className="text-muted fw-semibold">
                        <th scope="col" className="ps-0">
                          Tab 1
                        </th>
                        <th scope="col"> Tab 2</th>
                        <th scope="col"> Tab 3</th>
                        <th scope="col"> Tab 4</th>
                      </tr>
                      <tr className="text-muted fw-semibold">
                        <th scope="col" className="ps-0">
                          3 Months Training Plan
                        </th>
                        <th scope="col"> 6 Months Training Plan</th>
                        <th scope="col"> 1 Year Training Plan</th>
                        <th scope="col"> 1 Year Training Plan</th>
                      </tr>
                      <tr className="text-muted fw-semibold">
                        <th scope="col" className="ps-0">
                          Training Name
                        </th>
                        <th scope="col"> Training Link </th>
                        <th scope="col"> Training Duration </th>
                        <th scope="col">Completion % </th>
                      </tr>
                    </thead>
                    <tbody className="border-top">
                      {employees.map((employee, index) => (
                        <tr key={index}>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <div className="me-2 pe-1">
                                <img
                                  src={employee.img}
                                  className="rounded-circle"
                                  width={40}
                                  height={40}
                                  alt={`${employee.name}-img`}
                                />
                              </div>
                              <div>
                                <h6 className="fw-semibold mb-1">
                                  {employee.name}
                                </h6>
                                <p className="fs-2 mb-0 text-muted">
                                  {employee.role}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#">{employee.project}</a>
                          </td>
                          <td>
                            <span
                              className={`badge fw-semibold py-1 w-85 ${employee.priorityClass}`}>
                              {employee.priority}
                            </span>
                          </td>
                          <td>
                            <p className="fs-3 text-dark mb-0">
                              {employee.budget}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPath;
