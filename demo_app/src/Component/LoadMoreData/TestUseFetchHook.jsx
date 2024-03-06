/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./style.css";
import useFetch from "./useFetchHook";

const LIMIT = 6;
const TestHook = () => {
  const [fetchedData, loading, error] = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  const ref = useRef();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleScrollToBottom = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{display:"flex",flexDirection:"column", marginTop:"40px",}}>
      <button style={{width:"10%", marginLeft:"72px", marginBottom:"10px"}} onClick={handleScrollToBottom}>Scroll to bottom</button>
      <span>Also there is another version of loading more of item by scrolling down in code</span>
      <div className="overview">
        {loading && <h3>Data is loading</h3>}
        {error !== null && <h3>Something gets Wrong</h3>}

        {fetchedData.products &&
          fetchedData.products.length !== 0 &&
          fetchedData.products.map((item, index) => (
            <div className="item-container" key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        
      </div>
      <div ref={ref}>
          <button onClick={handleScrollToTop}>Scroll to top</button>
        </div>
    </div>
  );
};
export default TestHook;
