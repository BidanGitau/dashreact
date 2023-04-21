import React from "react";
import "./featured.css";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtitle">Revenue</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2.345</span>
          <span className="featuredmoneyrate">
            -23.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredsub">compared to last month</div>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2.345</span>
          <span className="featuredmoneyrate">
            +23.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredsub">compared to last month</div>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">cost</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2.345</span>
          <span className="featuredmoneyrate">
            -23.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredsub">compared to last month</div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
