import React from "react";
import Header from "../header/header.jsx";
import VideoItem from "../elementMainPage/ElementVideo.jsx";
import MainItem from "../elementMainPage/ElementOne.jsx";
// import TopicElement from "../elementMainPage/ElementTopic.jsx";
import ReacomandadtionElement from "../elementMainPage/ElementRecomendatetion.jsx";
function MainPage() {
  return (
    <>
      <Header />
      <VideoItem />
      {/* <TopicElement /> */}
      <MainItem />
      <ReacomandadtionElement />
    </>
  );
}
export default MainPage;
