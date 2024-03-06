/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext,useState } from "react";
import Accordiance from "../accordiance/index";
import RandomColor from "../random-color/index";
import ImageSlider from "../slides/PhotoSlide";
import StarRating from "../StarRating/StarRating";
import LoadMoreData from "../LoadMoreData/LoadMoreData";
import TestHook from "../LoadMoreData/TestUseFetchHook";
import MainTabs from "../Tabs/MainTabs";
import TestModal from "../Modal/TestModal";
import GitHubProfile from "../SearchGitHubProfile/GitHubProfile";
import SuggestUser from "../SearchAutoCompletion/SuggestionUser";
import TicTacsToe from "../tic-tac";
import { fetureFlagContext } from "./context/index";
import ScrollToSection from "../scrollToSection/ScrollToSection";
import "./style.css";

const Featureflage = () => {
  const { loading, enableflage,togleFeatureHandler } = useContext(fetureFlagContext);

  const ComponentsToRender = [
    { key: "RandomColor", component: <RandomColor /> },
    { key: "showTicTacsToe", component: <TicTacsToe /> },
    { key: "showGitHubProfile", component: <GitHubProfile /> },
    { key: "showTestModal", component: <TestModal /> },
    { key: "showMainTabs", component: <MainTabs /> },
    { key: "showSuggestUser", component: <SuggestUser /> },
    { key: "showAccordiance", component: <Accordiance /> },
    { key: "showStarRating", component: <StarRating /> },
    {
      key: "showImageSlider",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        />
      ),
    },
    { key: "showLoadMoreData", component: <TestHook /> },
    {key:"ScrollToSection",component:<ScrollToSection/>}
  ];
  const checkFlagehandler = (getCurrkey) => {
    console.log(enableflage[getCurrkey]);
    return enableflage[getCurrkey];
  };
  const toggleFunction = (getKey) => {
    togleFeatureHandler(getKey);
    console.log(getKey,"getkey");
  };
  return (
    <div className="wrapper">
      <h1  className="feature-title">Feature flag</h1>
      {loading && <h3>please wait</h3>}
      <div className="feature-wrapper">
      {ComponentsToRender.map((item, index) => (
        <div className="toggle-wrapper" key={index}>
            <div className="toggle-title">  <span className="toggle-label">{item.key}</span></div>
          <label className="feature-switch">
            <input
              type="checkbox"
              id={`toggleSwitch-${item.key}`}
              onChange={() => toggleFunction(item.key)}
              checked={enableflage[item.key]}
            />
            <span className="feature-slider"></span>
          </label>
        
        </div>
      ))}</div>
      {ComponentsToRender.map((item) =>
        checkFlagehandler(item.key) ? item.component : null
      )}
    </div>
  ); 
};
export default Featureflage;
