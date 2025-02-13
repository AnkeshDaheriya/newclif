import { useEffect, useState } from "react";
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
import SideBar from "../dashboard/common/SideBar";
import Header from "../dashboard/common/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
const CareerProgress = () => {
  const { id } = useParams();
  const location = useLocation();
  const [selectedMilestone, setSelectedMilestone] = useState("1");
  const [selectedKey, setSelectedKey] = useState("goal");
  const [isActive, setActive] = useState(false);
  const [data, setData] = useState({milestones : {1 :{
    goal : "hello"
  }}});
  useEffect(() => {
    // Define the async function inside useEffect
    const fetchMilestones = async () => {
      try {
        const response = await axios.post('http://localhost:5000/mileStone/getMileStones', {
          userId: "67ade112befae750b2473a5f"
        });
        if(response.data.data){
          // console.log("$milestone",response.data.data);
          setData(response.data.data)
        }else{
          console.log("something went wrong")
        }
      } catch (error) {
        console.log(`Error fetching milestones: ${error}`);
      }
    };

    fetchMilestones(); 

  }, []);

  useEffect(() => {
    if (id && data.milestones[id]) {
      setSelectedMilestone(id);
      setSelectedKey("goal");
    }
  }, [id, data.milestones]);



  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

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
        {/* Sidebar and Header */}
        <SideBar onButtonClick={ToggleEvent} />
        <div className="body-wrapper">
          <div className="page-wrapper">
            <Header onButtonClick={ToggleEvent} />
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
                      Milestone {milestone}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerProgress;
