import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

import { Link } from "react-router-dom";
//css
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <div className="sidebartitle">Dashboard</div>
          <u l className="sidebarlist">
            <li className="sidebarlistitem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </u>
        </div>
        <div className="sidebarmenu">
          <div className="sidebartitle">QuickMenu</div>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarlistitem">
                <PermIdentity className="sidebaricon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarlistitem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarlistitem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarlistitem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <div className="sidebartitle">Notification</div>
          <ul className="sidebarList">
            <li className="sidebarlistitem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarlistitem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <div className="sidebartitle">Staff</div>
          <ul className="sidebarList">
            <li className="sidebarlistitem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
