import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { SiPython } from "react-icons/si";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./modal.css";

const Modal = (props) => {
  console.log(props);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ClipLoader
            color={"gray"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="modal_wrapper">
          <div className="modal_section1">
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              Expand your career opportunities with Python
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
                Explore Python
              </button>
            </div>
          </div>
          <div className="modal_section2">
            <div className="modal_section2_box1">
              <div>
                <SiPython style={{ fontSize: "50px", color: "dodgerblue" }} />
              </div>
              <p sx={{ marginLeft: "5px" }}>
                The Complete Python Bootcamp From Zero to Hero Awesome Course
                for beginners
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
                <SiPython style={{ fontSize: "50px", color: "dodgerblue" }} />
              </div>
              <p sx={{ marginLeft: "5px" }}>
                The Complete Python Bootcamp From Zero to Hero Awesome Course
                for beginners
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
                <SiPython style={{ fontSize: "50px", color: "dodgerblue" }} />
              </div>
              <p sx={{ marginLeft: "5px" }}>
                The Complete Python Bootcamp From Zero to Hero Awesome Course
                for beginners
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
                <SiPython style={{ fontSize: "50px", color: "dodgerblue" }} />
              </div>
              <p sx={{ marginLeft: "5px" }}>
                The Complete Python Bootcamp From Zero to Hero Awesome Course
                for beginners
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
      )}
    </div>
  );
};

export default Modal;
