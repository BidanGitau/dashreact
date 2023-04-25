import React from "react";
import "./widgetlg.css";
const Widgetlg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetlgbutton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Latest Transaction</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://gravatar.com/avatar/327587ef344b646699adb876fd7ca466?s=400&d=robohash&r=x" alt="" className="widgetlgimg" />
            <span className="widgetlgname">Bidan was</span>
          </td>
          <td className="widgetlgdate">2 jun 2022</td>
          <td className="widgetlgamount">$200</td>
          <td className="widgetlgstatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://gravatar.com/avatar/327587ef344b646699adb876fd7ca466?s=400&d=robohash&r=x" alt="" className="widgetlgimg" />
            <span className="widgetlgname">Bidan was</span>
          </td>
          <td className="widgetlgdate">2 jun 2022</td>
          <td className="widgetlgamount">$200</td>
          <td className="widgetlgstatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://gravatar.com/avatar/327587ef344b646699adb876fd7ca466?s=400&d=robohash&r=x" alt="" className="widgetlgimg" />
            <span className="widgetlgname">Bidan was</span>
          </td>
          <td className="widgetlgdate">2 jun 2022</td>
          <td className="widgetlgamount">$200</td>
          <td className="widgetlgstatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://gravatar.com/avatar/327587ef344b646699adb876fd7ca466?s=400&d=robohash&r=x" alt="" className="widgetlgimg" />
            <span className="widgetlgname">Bidan was</span>
          </td>
          <td className="widgetlgdate">2 jun 2022</td>
          <td className="widgetlgamount">$200</td>
          <td className="widgetlgstatus"><Button type="Declined"/></td>
        </tr>
      </table>
    </div>
  );
};

export default Widgetlg;
