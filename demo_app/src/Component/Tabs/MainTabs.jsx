import { useState } from "react";
import "./style.css";

import Tab from "./Tab";
const TABS = [
  { label: "Tab1", content: <h1>Hello</h1> },
  { label: "Tab2", content: <h1>Good</h1> },
  { label: "Tab3", content: <h1>Perfect</h1> },
];
const MainTabs = () => {
  const [currTab, setCurrTab] = useState(TABS[0].content);
  const onChangeHandler = (getCurrTab) => {
    
    const curr = TABS.filter((items) => items.label === getCurrTab)[0];

    setCurrTab(curr.content);
  };
  
  return (
    <div className="Tab-Container">
      <Tab tabs={TABS} onChange={onChangeHandler}></Tab>
      <div>{currTab}</div>
    </div>
  );
};
export default MainTabs;
