import React from "react";
import "./feed.css";
const Feed = () => {
  return (
    <div className="feed_wrapper">
      <div className="feed_wrapper_section1">
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>
          A broad selection of courses
        </p>
        <p style={{ fontSize: "20px" }}>
          Choose from 213,000 online video courses with new additions published
          every month
        </p>
        <div className="feed_wrapper_section1_btn">
          <div className="feed_btn">
            <button
              style={{ height: "30px", cursor: "pointer", color: "blue" }}
            >
              Python
            </button>
          </div>
          <div className="feed_btn">
            <button
              style={{ height: "30px", cursor: "pointer", color: "blue" }}
            >
              Excel
            </button>
          </div>
          <div className="feed_btn">
            <button
              style={{ height: "30px", cursor: "pointer", color: "blue" }}
            >
              Web Development
            </button>
          </div>
          <div>
            <button
              style={{ height: "30px", cursor: "pointer", color: "blue" }}
            >
              Data Science
            </button>
          </div>
          <div className="feed_btn">
            <button
              style={{ height: "30px", cursor: "pointer", color: "blue" }}
            >
              Amazon AWS
            </button>
          </div>
          <div className="feed_btn">
            <button
              style={{ height: "30px", cursor: "pointer", color: "blue" }}
            >
              Drawing
            </button>
          </div>
        </div>
      </div>
      <div className="feed_wrapper_section2">{/* <h5>feed1</h5> */}</div>
      <div>{/* <h5>feed1</h5> */}</div>
    </div>
  );
};

export default Feed;
