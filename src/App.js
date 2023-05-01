//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Login from "./components/Login";
import Topbar from "./components/Topbar";
import ImageSlider from "./components/imageSlider/ImageSlider";
import Home from "./pages/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Main /> */}
    </div>
  );
}

export default App;
