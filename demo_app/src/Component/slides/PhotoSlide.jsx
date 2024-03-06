/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsCircle,
} from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currImage, setCurrImage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //handling next image by click on next arrow button

  const handleNextImage = () => {
  
    setCurrImage((pre) => (pre + 1 === images.length ? 0 :  pre + 1));
  };

  //handling next image by click on preview arrow button

  const handlePreviewImage = () => {
    setCurrImage((pre) => (pre - 1 === 0 ? images.length - 1 : pre - 1));
  };

  //Fetching Data

  const fetchDate = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchDate(url);
      setLoading(false);
    }
  }, [url]);

  return (
    <div className="container">
      {loading && <h3>data is loading</h3>}
      {error && error !== null && <h3>Something gets Wrong</h3>}
      <div className="images-wrapper">
        <BsArrowLeftCircleFill onClick={handlePreviewImage} className="arrow" />
        {images &&
          images.length !== 0 &&
          images.map((item, index) => (
            <img
              key={item.id}
              src={item.download_url}
              alt={item.download_url}
              style={{ display: `${index === currImage ? "inline" : ""}` }}
            />
          ))}
        <BsArrowRightCircleFill onClick={handleNextImage} className="arrow" />
      </div>

      {images &&
        images.length !== 0 &&
        images.map((_, index) => (
          <BsCircle
            key={index}
            onClick={() => setCurrImage(index)}
            style={{ fill: `${index === currImage ? "black" : "grey"}` }}
            className="circle"
          />
        ))}
    </div>
  );
};
export default ImageSlider;
