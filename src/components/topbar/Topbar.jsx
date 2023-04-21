import React from "react";
//css
import "./topbar.css";
//icons
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">TumyAdmin</span>
        </div>
        <div className="topright">
          <div className="topbarIcons">
            <NotificationsNone />
            <span className="topiconbag">2</span>
          </div>
          <div className="topbarIcons">
          <span className="topiconbag">2</span>
            <Language />
          </div>
          <div className="topbarIcons">
            <Settings />
          </div>

          <img
            src="https://gravatar.com/avatar/927665565133aecf07f5bb2ec3e74fe4?s=300&d=robohash&r=x"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
