import { useState } from "react";
import {
  Target,
  Activity,
  DollarSign,
  BookOpen,
  ChevronRight,
} from "lucide-react"; // Assuming you're using react-icons for icons
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  BarChart,
  Bar,
} from "recharts";

const CareerProgress = () => {
  const [selectedMilestone, setSelectedMilestone] = useState("1");
  const [selectedKey, setSelectedKey] = useState("goal");
  const [data, setData] = useState({
    milestones: {
      1: {
          timeline: {
              "startDate": "01-01-2025",
              "endDate": "01-02-2025",
              "durationMonths": 1
          },
          focusArea: "Skill Development - Frontend and Backend",
          goal: "Master React.js, Laravel, and Full-stack Development",
          keyActivities: [
              "Complete advanced React.js and Laravel courses",
              "Build a personal project integrating React and Laravel",
              "Learn state management with Redux"
          ],
          measurableOutcomes: [
              "Complete 3 React projects",
              "Build a full-stack web application with authentication"
          ],
          learningResources: {
              "courses": [
                  "React - Advanced Concepts",
                  "Master Laravel"
              ],
              books: [
                  "Learning React",
                  "Laravel Up & Running"
              ],
              tools: [
                  "VS Code",
                  "GitHub",
                  "Docker"
              ]
          },
          kpis: [
              "Complete 2 major React applications",
              "Learn and apply Redux in a project"
          ],
          jobRoleDevelopment: {
              role: "Full Stack Developer",
              responsibilities: [
                  "Develop advanced user interfaces",
                  "Work with backend and frontend integration"
              ]
          }
      },
      2: {
          "timeline": {
              "startDate": "01-02-2025",
              "endDate": "01-03-2025",
              "durationMonths": 1
          },
          "focusArea": "Backend Development and API Integration",
          "goal": "Strengthen skills in API development and backend technologies",
          "keyActivities": [
              "Learn advanced API development with Laravel",
              "Work on integrating third-party APIs",
              "Start a personal project that involves complex backend systems"
          ],
          "measurableOutcomes": [
              "Create a RESTful API in Laravel",
              "Integrate a payment gateway API (Stripe)"
          ],
          "learningResources": {
              "courses": [
                  "Advanced Laravel API Development",
                  "Building APIs with Laravel"
              ],
              "books": [
                  "API Design Patterns",
                  "Modern PHP"
              ],
              "tools": [
                  "Postman",
                  "XAMPP",
                  "Stripe API"
              ]
          },
          "kpis": [
              "Complete 2 API integrations",
              "Develop a robust authentication system for APIs"
          ],
          "jobRoleDevelopment": {
              "role": "Backend Developer",
              "responsibilities": [
                  "Develop and maintain server-side logic",
                  "Integrate third-party APIs"
              ]
          }
      },
      3: {
          "timeline": {
              "startDate": "01-03-2025",
              "endDate": "01-04-2025",
              "durationMonths": 1
          },
          "focusArea": "Cloud Deployment and DevOps",
          "goal": "Enhance skills in cloud deployment and DevOps tools like Docker and AWS",
          "keyActivities": [
              "Deploy applications on AWS EC2 and S3",
              "Learn Docker and containerize existing projects",
              "Explore AWS Lambda and serverless architecture"
          ],
          "measurableOutcomes": [
              "Successfully deploy an app on AWS",
              "Containerize 2 existing applications"
          ],
          "learningResources": {
              "courses": [
                  "AWS Certified Solutions Architect",
                  "Docker for Developers"
              ],
              "books": [
                  "AWS Up & Running",
                  "Docker in Action"
              ],
              "tools": [
                  "AWS CLI",
                  "Docker Desktop"
              ]
          },
          "kpis": [
              "Deploy 3 apps to AWS",
              "Successfully containerize 3 applications using Docker"
          ],
          "jobRoleDevelopment": {
              "role": "Cloud Engineer",
              "responsibilities": [
                  "Ensure smooth cloud deployment",
                  "Monitor and maintain cloud infrastructure"
              ]
          }
      },
      4: {
          "timeline": {
              "startDate": "01-04-2025",
              "endDate": "01-05-2025",
              "durationMonths": 1
          },
          "focusArea": "Leadership and Mentorship",
          "goal": "Start taking on leadership responsibilities and mentoring junior developers",
          "keyActivities": [
              "Lead small team projects",
              "Mentor junior developers in your team",
              "Organize knowledge-sharing sessions"
          ],
          "measurableOutcomes": [
              "Successfully lead 2 small projects",
              "Mentor at least 2 junior developers"
          ],
          "learningResources": {
              "courses": [
                  "Leadership for Developers",
                  "Agile Project Management"
              ],
              "books": [
                  "Radical Candor",
                  "The Lean Startup"
              ],
              "tools": [
                  "Trello",
                  "Slack",
                  "Jira"
              ]
          },
          "kpis": [
              "Lead 2 successful projects",
              "Mentor at least 3 junior developers"
          ],
          "jobRoleDevelopment": {
              "role": "Team Lead",
              "responsibilities": [
                  "Guide junior team members",
                  "Manage project timelines and deliverables"
              ]
          }
      },
      5: {
          "timeline": {
              "startDate": "01-05-2025",
              "endDate": "01-06-2025",
              "durationMonths": 1
          },
          "focusArea": "Advanced Database Management",
          "goal": "Master advanced database design and optimization techniques",
          "keyActivities": [
              "Optimize database queries for better performance",
              "Learn about indexing, joins, and advanced SQL features",
              "Work on a project with MongoDB or Firebase"
          ],
          "measurableOutcomes": [
              "Optimize 5 SQL queries for performance",
              "Create an efficient MongoDB database schema"
          ],
          "learningResources": {
              "courses": [
                  "Advanced SQL for Developers",
                  "MongoDB for Developers"
              ],
              "books": [
                  "SQL Performance Explained",
                  "MongoDB in Action"
              ],
              "tools": [
                  "MySQL Workbench",
                  "MongoDB Atlas"
              ]
          },
          "kpis": [
              "Optimize 10 database queries",
              "Create and deploy a MongoDB database project"
          ],
          "jobRoleDevelopment": {
              "role": "Database Developer",
              "responsibilities": [
                  "Design efficient database schemas",
                  "Ensure database optimization and scaling"
              ]
          }
      },
      6: {
          "timeline": {
              "startDate": "01-06-2025",
              "endDate": "01-07-2025",
              "durationMonths": 1
          },
          "focusArea": "Project Management",
          "goal": "Gain expertise in project management methodologies",
          "keyActivities": [
              "Get certified in Agile or Scrum",
              "Lead cross-functional project teams",
              "Learn to create and manage project schedules"
          ],
          "measurableOutcomes": [
              "Obtain Agile or Scrum certification",
              "Successfully lead a complex project"
          ],
          "learningResources": {
              "courses": [
                  "Agile Certified Practitioner",
                  "Scrum Master Certification"
              ],
              "books": [
                  "Scrum: The Art of Doing Twice the Work in Half the Time",
                  "Agile Project Management with Scrum"
              ],
              "tools": [
                  "Jira",
                  "Trello",
                  "Microsoft Project"
              ]
          },
          "kpis": [
              "Get certified in Agile or Scrum",
              "Lead 2 successful projects using Agile methodology"
          ],
          "jobRoleDevelopment": {
              "role": "Project Manager",
              "responsibilities": [
                  "Coordinate and lead project teams",
                  "Ensure project delivery on time and within budget"
              ]
          }
      },
      7: {
          "timeline": {
              "startDate": "01-07-2025",
              "endDate": "01-08-2025",
              "durationMonths": 1
          },
          "focusArea": "Data Analysis and Machine Learning",
          "goal": "Acquire skills in data analysis and machine learning",
          "keyActivities": [
              "Learn Python for data analysis",
              "Master data visualization tools like Tableau",
              "Complete a machine learning course"
          ],
          "measurableOutcomes": [
              "Analyze data sets using Python libraries",
              "Create insightful data visualizations with Tableau"
          ],
          "learningResources": {
              "courses": [
                  "Python for Data Science and Machine Learning Bootcamp",
                  "Data Analysis and Visualization with Tableau"
              ],
              "books": [
                  "Data Science for Business",
                  "Python Data Science Handbook"
              ],
              "tools": [
                  "Python",
                  "Tableau",
                  "Jupyter Notebook"
              ]
          },
          "kpis": [
              "Complete a machine learning project",
              "Create 3 impactful data visualizations"
          ],
          "jobRoleDevelopment": {
              "role": "Data Scientist",
              "responsibilities": [
                  "Perform data analysis and interpretation",
                  "Develop and deploy machine learning models"
              ]
          }
      },
      8: {
          "timeline": {
              "startDate": "01-08-2025",
              "endDate": "01-09-2025",
              "durationMonths": 1
          },
          "focusArea": "Cybersecurity",
          "goal": "Enhance knowledge in cybersecurity measures and practices",
          "keyActivities": [
              "Get certified in cybersecurity",
              "Learn about ethical hacking and penetration testing",
              "Implement security protocols in projects"
          ],
          "measurableOutcomes": [
              "Obtain a cybersecurity certification",
              "Identify and mitigate vulnerabilities in projects"
          ],
          "learningResources": {
              "courses": [
                  "Certified Ethical Hacker (CEH)",
                  "Cybersecurity Essentials"
              ],
              "books": [
                  "Hacking: The Art of Exploitation",
                  "Cybersecurity for Dummies"
              ],
              "tools": [
                  "Wireshark",
                  "Kali Linux",
                  "Nmap"
              ]
          },
          "kpis": [
              "Get certified in cybersecurity",
              "Implement security measures in 3 projects"
          ],
          "jobRoleDevelopment": {
              "role": "Cybersecurity Specialist",
              "responsibilities": [
                  "Protect systems and data from cyber threats",
                  "Conduct security assessments and audits"
              ]
          }
      },
      9: {
          "timeline": {
              "startDate": "01-09-2025",
              "endDate": "01-10-2025",
              "durationMonths": 1
          },
          "focusArea": "Artificial Intelligence",
          "goal": "Develop AI skills and knowledge",
          "keyActivities": [
              "Complete AI and machine learning courses",
              "Build AI models for real-world applications",
              "Stay updated on AI trends and technologies"
          ],
          "measurableOutcomes": [
              "Create AI models for predictive analytics",
              "Implement AI solutions in projects"
          ],
          "learningResources": {
              "courses": [
                  "AI Programming with Python",
                  "Deep Learning Specialization"
              ],
              "books": [
                  "Artificial Intelligence: A Modern Approach",
                  "Deep Learning"
              ],
              "tools": [
                  "TensorFlow",
                  "Keras",
                  "OpenAI Gym"
              ]
          },
          "kpis": [
              "Build 2 AI models for real-world applications",
              "Implement AI solutions in 3 projects"
          ],
          "jobRoleDevelopment": {
              "role": "AI Engineer",
              "responsibilities": [
                  "Develop AI algorithms and models",
                  "Implement AI solutions in various domains"
              ]
          }
      },
      10: {
          "timeline": {
              "startDate": "01-10-2025",
              "endDate": "01-11-2025",
              "durationMonths": 1
          },
          "focusArea": "Product Management",
          "goal": "Transition into a product management role",
          "keyActivities": [
              "Understand market trends and user needs",
              "Develop product roadmaps and strategies",
              "Collaborate with cross-functional teams"
          ],
          "measurableOutcomes": [
              "Launch a successful product feature",
              "Create a product roadmap for a new initiative"
          ],
          "learningResources": {
              "courses": [
                  "Product Management Fundamentals",
                  "Product Strategy"
              ],
              "books": [
                  "Inspired: How To Create Products Customers Love",
                  "Lean Product and Lean Analytics"
              ],
              "tools": [
                  "Productboard",
                  "Asana",
                  "Miro"
              ]
          },
          "kpis": [
              "Successfully launch a new product feature",
              "Create a product roadmap for a new product line"
          ],
          "jobRoleDevelopment": {
              "role": "Product Manager",
              "responsibilities": [
                  "Define product vision and strategy",
                  "Drive product development and launch"
              ]
          }
      },
      11: {
          "timeline": {
              "startDate": "01-11-2025",
              "endDate": "01-12-2025",
              "durationMonths": 1
          },
          "focusArea": "Data Privacy and Compliance",
          "goal": "Gain expertise in data privacy laws and compliance regulations",
          "keyActivities": [
              "Learn about GDPR, CCPA, and other privacy laws",
              "Implement data privacy measures in projects",
              "Ensure compliance with industry regulations"
          ],
          "measurableOutcomes": [
              "Apply GDPR principles in project data handling",
              "Conduct privacy impact assessments"
          ],
          "learningResources": {
              "courses": [
                  "Data Privacy and Security",
                  "GDPR Essentials"
              ],
              "books": [
                  "Privacy Law Fundamentals",
                  "GDPR Handbook"
              ],
              "tools": [
                  "OneTrust",
                  "TrustArc",
                  "DataGrail"
              ]
          },
          "kpis": [
              "Implement GDPR principles in projects",
              "Conduct a privacy impact assessment"
          ],
          "jobRoleDevelopment": {
              "role": "Data Privacy Officer",
              "responsibilities": [
                  "Ensure data protection and privacy compliance",
                  "Educate teams on data privacy best practices"
              ]
          }
      },
      12: {
          "timeline": {
              "startDate": "01-12-2025",
              "endDate": "01-01-2027",
              "durationMonths": 12
          },
          "focusArea": "Strategic Planning and Business Development",
          "goal": "Elevate skills in strategic planning and business growth",
          "keyActivities": [
              "Create and execute strategic business plans",
              "Identify market opportunities and risks",
              "Lead business development initiatives"
          ],
          "measurableOutcomes": [
              "Develop a 5-year strategic business plan",
              "Secure new business partnerships"
          ],
          "learningResources": {
              "courses": [
                  "Strategic Management",
                  "Business Development Strategies"
              ],
              "books": [
                  "Blue Ocean Strategy",
                  "The Innovator's Dilemma"
              ],
              "tools": [
                  "SWOT Analysis",
                  "Business Model Canvas",
                  "CRM software"
              ]
          },
          "kpis": [
              "Develop and execute a strategic business plan",
              "Secure 3 new business partnerships"
          ],
          "jobRoleDevelopment": {
              "role": "Director of Business Development",
              "responsibilities": [
                  "Set strategic goals and objectives",
                  "Drive business growth and expansion"
              ]
          }
      }
  },
  });

  const financialData = Object.keys(data.milestones).map((milestone) => ({
    name: `M${milestone}`,
    revenue:
      data.milestones[milestone]?.financialProjections?.usd?.revenue || 0,
    investment:
      data.milestones[milestone]?.financialProjections?.usd?.investment || 0,
    valuation:
      data.milestones[milestone]?.financialProjections?.usd?.valuation || 0,
  }));

  const getIcon = (key) => {
    const icons = {
      goal: <Target className="h-5 w-5 text-primary" />,
      keyActivities: <Activity className="h-5 w-5 text-info" />,
      financialProjections: <DollarSign className="h-5 w-5 text-success" />,
      resources: <BookOpen className="h-5 w-5 text-warning" />,
    };
    return icons[key] || <ChevronRight className="h-5 w-5 text-muted" />;
  };

  const renderFinancialCharts = () => (
    <div className="space-y-4">
      <div className="bg-light p-4 rounded shadow-sm">
        <h3 className="h5 mb-4">Revenue Growth</h3>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={financialData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-light p-4 rounded shadow-sm">
        <h3 className="h5 mb-4">Investment vs Valuation</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="investment" fill="#82ca9d" />
            <Bar dataKey="valuation" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderContent = (content, key) => {
    if (key === "financialProjections") {
      return renderFinancialCharts();
    }

    if (Array.isArray(content)) {
      return (
        <ul className="list-unstyled pl-4">
          {content.map((item, index) => (
            <li key={index} className="d-flex align-items-center mb-2">
              <div
                className="rounded-circle bg-primary"
                style={{ width: "10px", height: "10px" }}
              ></div>
              <span className="ms-2">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object") {
      return (
        <div className="space-y-4">
          {Object.entries(content).map(([key, value]) => (
            <div key={key}>
              <h5>{key}</h5>
              {renderContent(value, key)}
            </div>
          ))}
        </div>
      );
    }

    return <p>{content}</p>;
  };

  const milestoneKeys = Object.keys(
    data.milestones[selectedMilestone] || {}
  ).filter((key) => key !== "timeline");

  return (
    <>
      <div className="main-wrapper">
        <div className="body-wrapper">
          {/* <div className="page-wrapper"> */}
            <div className="container my-4">
              <div className="mb-4">
                <div className="d-flex overflow-auto bg-gray p-3 rounded shadow-sm ">
                  {Object.keys(data.milestones).map((milestone) => (
                    <button
                      key={milestone}
                      onClick={() => setSelectedMilestone(milestone)}
                      className={`btn btn-link text-start fs-3 ml-1 ${
                        selectedMilestone === milestone
                          ? "text-primary border"
                          : "text-secondary"
                      }`}
                    >
                      Milestone{milestone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="h5 mb-3">Milestone Details</h3>
                    <div className="list-group">
                      {milestoneKeys.map((key) => (
                        <button
                          key={key}
                          onClick={() => setSelectedKey(key)}
                          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                            selectedKey === key
                              ? "bg-light text-primary"
                              : "text-secondary"
                          }`}
                        >
                          <div className="d-flex align-items-center">
                            {getIcon(key)}
                            <span className="ms-2">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                          </div>
                          <ChevronRight
                            className={`h-4 w-4 ${
                              selectedKey === key ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="d-flex align-items-center h5 mb-4">
                      {getIcon(selectedKey)}
                      <span className="ms-2">
                        {selectedKey.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </h3>
                    {renderContent(
                      data.milestones[selectedMilestone][selectedKey],
                      selectedKey
                    )}
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CareerProgress;
