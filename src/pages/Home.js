import React, { useState } from "react";
import Topbar from "../components/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "../components/SignupPage";
import Login from "../components/Login";
import Profile from "../components/myProfile/Profile";
import Categories from "../components/Categories";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Modal from "../components/modal/Modal";
import Edit from "../components/Edit";
import Food from "../components/food/Food";
import Feed from "../components/feed/Feed";
import Courses from "../components/courses/Courses";

const Home = () => {
  const [items, setItems] = useState();
  const getData = (txt) => {
    console.log(txt);
    setItems(txt);
  };
  console.log(items);

  return (
    <div>
      <Topbar />
      {/* <Main /> */}
      <Feed />
      <Routes>
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/myprofile"
          element={<Profile getData={getData} />}
        />
        {/* <Route exact path="/categories" element={<Categories />} /> */}
        <Route exact path="/modal" element={<Modal />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/food" element={<Food />} />
        <Route exact path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
