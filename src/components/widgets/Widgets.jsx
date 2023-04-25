import React from "react";
import { Visibility } from "@material-ui/icons";
import "./widget.css";
const Widgets = () => {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">New Join Members</span>
      <ul className="widgetsmlist">
        <li className="widgetsmitem">
          <img
            src="https://gravatar.com/avatar/327587ef344b646699adb876fd7ca466?s=400&d=robohash&r=x"
            alt=""
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">RoboHash</span>
            <span className="widgetsmusertitle">RoboMaps</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgetsmicon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Widgets;
