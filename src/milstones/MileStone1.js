import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
// import API_BASE_URL from "./../componant/config";
import axios from "axios";
import SideBar from "../dashboard/common/SideBar";
import Header from "../dashboard/common/Header";
// import BecomeUnicorn from "./BecomeUnicorn";
import RoadMapSvg from "../assets/svgs/roadMap";
const MileStone1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  // States
  const [progress, setProgress] = useState(50);
  const location = useLocation();
  const activeMilestoneFromProps = location.state?.activeMilestone || "All"; // Default to "M1" if not provided
  const [activeTab, setActiveTab] = useState(activeMilestoneFromProps);
  const startup_id = localStorage.getItem("token");
  useEffect(() => {
    setActiveTab(activeMilestoneFromProps); // Update state when props change
  }, [activeMilestoneFromProps]);
  const [topics] = useState(["All", "Topics", "Build Brand"]);
  const [cards] = useState([
    {
      title: "How to build your brand value?",
      description: "Access full video assessment to learn more",
    },
    {
      title: "Learn to market your brand",
      description: "Detailed insights and assessments available",
    },
    {
      title: "Master digital branding",
      description: "Interactive lessons to master branding",
    },
    {
      title: "Understanding brand perception",
      description: "Learn how consumers perceive your brand",
    },
    {
      title: "Elevating brand awareness",
      description: "Explore strategies for brand awareness",
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
  };

  const handleCardClick = (card) => {
    window.location.href = "/path-unicorn4"; // Navigate to the new page
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //   const response = await axios.get(
      //    ` https://app.incubationmasters.com:5000/api/unicorn/${startup_id}`
      //   );
      // setError("Hola this is mileStone 1 page");
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <SideBar onButtonClick={ToggleEvent} />
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Header onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="min-h-screen bg-gray-50 py-8">
                <RoadMapSvg />
              </div>
            </div>
          </div>
        </div>
        {/* <SerchBar /> */}
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

export default MileStone1;
