import React from "react";
import { userData } from "../../Data";
import "./home.css";
import FeaturedInfo from "../../components/featured/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import Widgets from "../../components/widgets/Widgets";
import Widgetlg from "../../components/widgetlg/Widgetlg";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="user Analytics" grid dataKey="amt" />
      <div className="homewidgets">
        <Widgets/>
        <Widgetlg/>
      </div>
    </div>
  );
};

export default Home;
