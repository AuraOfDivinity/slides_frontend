import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './Carousel.css'
import Slide from "../Slide/Slide";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="wrapper">
      <FaChevronLeft className="leftArrow" onClick={prevSlide} />
      <FaChevronRight className="rightArrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <Slide slide={slide} alt="" />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;