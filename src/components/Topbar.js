import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { SiUdemy } from "react-icons/si";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Modal from "./modal/Modal";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import Categories from "./Categories";

const Topbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [goToLogin, setGoToLogin] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  // if (goToLogin) {
  //   return <Navigate to="/login" />;
  // }
  const handleModal = () => {
    setOpenModal(true);
    {
      openModal && <Categories />;
    }
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseEnter = () => {
    console.log("juer");
    setIsHovering(true);
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {" "}
        <div className="topbarLeftAlign">
          <div>
            <SiUdemy
              style={{
                fontSize: "24px",
                marginLeft: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />
          </div>
          <div>
            <Button
              variant="text"
              onMouseOut={handleMouseOut}
              onMouseEnter={handleMouseEnter}
            >
              Categories
            </Button>
          </div>
          {isHovering && <Categories />}
        </div>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for anything" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="span1">
          {/* <Button variant="text">Udemy Buisnes</Button> */}
          <button className="topbar_btn" onClick={() => navigate("/food")}>
            Food
          </button>
        </div>
        <div>
          {/* <Button variant="text">Udemy Teach</Button> */}
          <button
            style={{ height: "30px", width: "100%" }}
            className="topbar_btn"
            onClick={() => navigate("/courses")}
          >
            Courses
          </button>
        </div>
        <div>
          <AddShoppingCartIcon />
        </div>
        <div>
          <button className="topbar_btn" onClick={() => navigate("/edit")}>
            Edit
          </button>
        </div>
        <div>
          {/* <Button
            onClick={() => navigate("/login")}
            variant="contained"
            color="success"
          >
            Login
          </Button> */}
          <button className="topbar_btn" onClick={() => navigate("/login")}>
            SignIn
          </button>
        </div>
        <div className="span1">
          <button className="topbar_btn" onClick={() => navigate("/myprofile")}>
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
