import "./styles.css";
import { img1, img2, img3 } from "./imageList";
import { useEffect, useState } from "react";

export default function App() {
  //image array
  const images = [
    {
      id: 1,
      url: img1
    },
    {
      id: 2,
      url: img2
    },
    {
      id: 3,
      url: img3
    }
  ];
  //current image id/number
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    let box = document.getElementById("box");
    let extractImgFromObj = images.filter(
      (item) => item.id === currentImage
    )[0];
    box.style.background = `url("${extractImgFromObj?.url}") no-repeat center center`;
    // let dot =
  }, [currentImage]);

  const handleNext = () => {
    if (currentImage < images.length) {
      setCurrentImage(currentImage + 1);
    }
  };
  const handlePrev = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
    }
  };
  const handleDotClick = (event) => {
    //add active red to dot with currentImage
    setCurrentImage(Number(event.target.id));
    event.target.style.backgroundColor = "red";
    console.log(event.target);
  };

  return (
    <div className="App">
      <div className="box" id="box">
        {/* Left Arrow &  Right Arrow*/}
        <div className="arrow_container">
          <div className="arrow" onClick={handlePrev}>
            {`<`}
          </div>
          <div className="arrow" onClick={handleNext}>
            {`>`}
          </div>
        </div>
        {/* Dots */}
        <div className="dots_container" id="dots_container">
          {images.map((item) => {
            return (
              <div
                key={item.id}
                id={item.id}
                className="dot"
                onClick={handleDotClick}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
