/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./style.css";

const LIMIT = 6;
const LoadMoreData = () => {
  const [fetchedData, setfetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [lastVisibleInView, setlastVisibleInView] = useState(0);
  const [total, setTotal] = useState(0);
  const [scrollPersentage, setScrollPersentage] = useState(0);

  const handleLoadMoreItems = () => {
    if (fetchedData) {
      setlastVisibleInView(fetchedData.length);
    }
  };
  //Fetching Data

  const fetchDate = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${lastVisibleInView}`
      );
      const data = await response.json();
      if (data) {
        setfetchedData((pre) => [...pre, ...data.products]);
        setTotal(data.total);
      }
    } catch (e) {
      setError(e);
    }
  };
  const handleScrollBar = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPersentage(
      ((document.body.scrollTop || document.documentElement.scrollTop) /
        height) *
        100
    );
  };
  //Load Data
  useEffect(() => {
    fetchDate();
  }, [lastVisibleInView]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollBar);
    return () => {
      removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div className="overview">
        <div className="scroll-bar-wrapper">
          <div
            className="scroll-bar"
            style={{ width: `${scrollPersentage}%` }}
          />
        </div>
        {error !== null && <h3>Something gets Wrong</h3>}

        {fetchedData &&
          fetchedData.length !== 0 &&
          fetchedData.map((item, index) => (
            <div className="item-container" key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        <button
          className="More-btn"
          onClick={handleLoadMoreItems}
          disabled={total === fetchedData.length}
        >
          Load more Item
        </button>
      </div>
    </>
  );
};
export default LoadMoreData;
