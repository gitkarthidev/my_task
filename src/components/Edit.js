import React, { useState } from "react";
import "./edit.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DescriptionIcon from "@mui/icons-material/Description";
const Edit = () => {
  const [value, setValue] = useState("");
  const options = [
    { label: "India", value: 1 },
    { label: "Germany", value: 2 },
    { label: "USA", value: 3 },
  ];
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Public Profile</h1>
      <div className="sidebarContainer">
        <div className="sidebar_left">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="sidebar_left_section"
          >
            <HomeIcon style={{ marginRight: "10px" }} />
            <p>Home</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="sidebar_left_section"
          >
            <AccountBalanceIcon style={{ marginRight: "10px" }} />
            <p>Account</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="sidebar_left_section"
          >
            <ModeEditIcon style={{ marginRight: "10px" }} />
            <p>Edit</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="sidebar_left_section"
          >
            <NotificationsActiveIcon style={{ marginRight: "10px" }} />
            <p>Notification</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="sidebar_left_section"
          >
            <DescriptionIcon style={{ marginRight: "10px" }} />
            <p>Description</p>
          </div>
        </div>
        <div className="sidebar_center">
          <div className="sidebar_center_section">
            <input
              value="text1"
              style={{ marginTop: "10px", height: "40px" }}
            />
          </div>
          <div className="sidebar_center_section">
            <input
              value="text1"
              style={{ marginTop: "30px", height: "40px" }}
            />
          </div>
          <div className="sidebar_center_section">
            {/* <input
              value="text1"
              style={{ marginTop: "30px", height: "40px" }}
            /> */}
            <select
              onChange={handleSelect}
              style={{ marginTop: "30px", height: "40px" }}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="sidebar_right"></div>
      </div>
    </div>
  );
};

export default Edit;
