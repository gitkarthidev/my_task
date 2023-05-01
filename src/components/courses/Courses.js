import React from "react";
import "./courses.css";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";

import StarHalfIcon from "@mui/icons-material/StarHalf";

const Courses = () => {
  return (
    <div>
      <div className="modal_wrapper">
        <div className="modal_section1">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Expand your career opportunities with new courses
          </p>
          <p
            style={{
              fontSize: "18px",

              marginLeft: "20px",
            }}
          >
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to
          </p>
          <div>
            <button
              style={{
                marginLeft: "20px",
                height: "40px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explore Courses
            </button>
          </div>
        </div>
        <div className="modal_section2">
          <div className="modal_section2_box1">
            <div>
              <SiPython style={{ fontSize: "50px", color: "gold" }} />
            </div>
            <p sx={{ marginLeft: "5px" }}>
              The Complete Python Bootcamp From Zero to Hero Awesome Course for
              beginners
            </p>
            <div style={{ fontSize: "12px" }}>Jose Poritla</div>
            <div>
              <StarHalfIcon />
              <StarHalfIcon />
              <StarHalfIcon />
            </div>
            <div>$49.99</div>
          </div>
          <div className="modal_section2_box1">
            <div>
              <FaNodeJs style={{ fontSize: "50px", color: "green" }} />
            </div>
            <p sx={{ marginLeft: "5px" }}>
              The Complete Node js Bootcamp From Zero to Hero Awesome Course for
              beginners
            </p>
            <div style={{ fontSize: "12px" }}>Jose Poritla</div>
            <div>
              <StarHalfIcon />
              <StarHalfIcon />
              <StarHalfIcon />
              <StarHalfIcon />
            </div>
            <div>$49.99</div>
          </div>
          <div className="modal_section2_box1">
            <div>
              <FaReact style={{ fontSize: "50px", color: "dodgerblue" }} />
            </div>
            <p sx={{ marginLeft: "5px" }}>
              The Complete React Bootcamp From Zero to Hero Awesome Course for
              beginners
            </p>
            <div style={{ fontSize: "12px" }}>Jose Poritla</div>
            <div>
              <StarHalfIcon />
              <StarHalfIcon />
              <StarHalfIcon />
            </div>
            <div>$49.99</div>
          </div>
          <div className="modal_section2_box1">
            <div>
              <FaVuejs style={{ fontSize: "50px", color: "aquamarine" }} />
            </div>
            <p sx={{ marginLeft: "5px" }}>
              The Complete Vue Js Bootcamp From Zero to Hero Awesome Course for
              beginners
            </p>
            <div style={{ fontSize: "12px" }}>Jose Poritla</div>
            <div>
              <StarHalfIcon />
              <StarHalfIcon />
              <StarHalfIcon />
            </div>
            <div>$49.99</div>
          </div>
          <div className="modal_section2_box1">
            <div>
              <FaAngular style={{ fontSize: "50px", color: "red" }} />
            </div>
            <p sx={{ marginLeft: "5px" }}>
              The Complete Angular Bootcamp From Zero to Hero Awesome Course for
              beginners
            </p>
            <div style={{ fontSize: "12px" }}>Jose Poritla</div>
            <div>
              <StarHalfIcon />
              <StarHalfIcon />
              <StarHalfIcon />
            </div>
            <div>$49.99</div>
          </div>
        </div>
      </div>
      <div className="icon_container">
        <p style={{ marginLeft: "10px", fontSize: "25px" }}>
          This Course includes:
        </p>
        <div className="course_icons">
          <div>
            <FaVideo style={{ fontSize: "24px" }} />
          </div>
          <p style={{ marginLeft: "10px" }}>13 hours on-demand video</p>
        </div>
        <div className="course_icons">
          <div>
            <FiDownload style={{ fontSize: "24px" }} />
          </div>
          <p style={{ marginLeft: "10px" }}>120 downloadable resources</p>
        </div>
        <div className="course_icons">
          <div>
            <GiTrophyCup style={{ fontSize: "24px" }} />
          </div>
          <p style={{ marginLeft: "10px" }}>Certificate of completion</p>
        </div>
        <div className="course_icons">
          <div>
            <AiOutlineMobile style={{ fontSize: "24px" }} />
          </div>
          <p style={{ marginLeft: "10px" }}>Accessible on Mobile and Tv</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
