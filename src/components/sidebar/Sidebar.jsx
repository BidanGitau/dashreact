import React from "react";
import { LineStyle, Timeline, TrendingUp, Report,WorkOffOutlined,VerifiedUser} from "@material-ui/icons";
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
          <u l className="sidebarlist">
            <li className="sidebarlistitem">
              <VerifiedUser className="sidebarIcon" />
              User
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarlistitem">
              <WorkOffOutlined className="sidebarIcon" />
              Reports
            </li>
          </u>
        </div>
        <div className="sidebarmenu">
          <div className="sidebartitle">Notification</div>
          <u l className="sidebarlist">
            <li className="sidebarlistitem">
              <LineStyle className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebarIcon" />
              Message
            </li>
          </u>
        </div>
        <div className="sidebarmenu">
          <div className="sidebartitle">Staff</div>
          <u l className="sidebarlist">
            <li className="sidebarlistitem">
              <LineStyle className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </u>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
