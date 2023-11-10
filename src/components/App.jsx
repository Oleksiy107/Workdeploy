import React from "react";
import MainPage from "./pages/MainPage.jsx";
import OnePage from "./pages/OnePage.jsx";
// import AboutUsPage from "../pages/AboutUs.jsx";
// import BasketPage from "../pages/Basket.jsx";
// import FQA from "./FQAElement/FQA.jsx";

// import SmoothieMaker from "./Smothie/SmoothieReady.jsx";
// import SmoothieCreate from "./Smothie/SmoothieCreate.jsx";
import { Route, Routes } from "react-router-dom";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/one" element={<OnePage />} />
      {/* <Route path="/two" element={<MainPage />} />
      <Route path="/three" element={<MainPage />} />
      <Route path="/four" element={<MainPage />} /> */}
    </Routes>
  );
};
