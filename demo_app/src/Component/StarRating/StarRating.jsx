/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ NumOfStars = 10 }) => {
  const [rate, setRate] = useState(0);
  const [starFill, setstarFill] = useState(0);

  const handleRateNum = (getCurIndex) => {
    setRate(getCurIndex);
  };
  const handleFillRate = (getCurIndex) => {
    setstarFill(getCurIndex);
  };

  const handleUfillRate = () => {
    setstarFill(rate);
  };
  //   console.log(starFill,"starfill");
  return (
    <div style={{margin:"auto"}}>
      {[...Array(NumOfStars)].map((_, index) => {
        index += 1;
       return(<>
        <FaStar
          style={ index <= (starFill || rate) ? { fill: "orange" } : { fill: "#ddd" }}
          key={index}
          size={40}
          onClick={() => handleRateNum(index )}
          onMouseMove={() => handleFillRate(index )}
          onMouseLeave={() => handleUfillRate()}
        />{" "}
      </>) ;
      })}
    </div>
  );
};

export default StarRating;
