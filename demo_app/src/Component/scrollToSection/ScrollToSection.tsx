import React, { useRef } from "react";
const dummyData = [
  {
    style: { width: "66.5vw", height: "100vh", backgroundColor: "red" },
    label: "Section 1",
  },
  {
    style: { width: "66.5vw", height: "100vh", backgroundColor: "blue" },
    label: "Section 2",
  },
  {
    style: { width: "66.5vw", height: "100vh", backgroundColor: "green" },
    label: "Section 3",
  },
  // Add more sections as needed
];
const ScrollToSection = () => {
  const refs = useRef<HTMLDivElement>(null);
  const handleToSection = () => {
    let refPos = refs.current.getBoundingClientRect().top;
    window.scrollTo({ top: refPos, behavior: "smooth" });
  };
  return (
    <div>
      {" "}
      <h5>ScrollTo specific Section</h5>
      <button onClick={handleToSection}>Click to scroll section 3</button>
      <div>
        {dummyData.map((el, index) => (
          <div ref={index === 2 ? refs : null} key={el.label} style={el.style}>
            <h2>{el.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ScrollToSection;
