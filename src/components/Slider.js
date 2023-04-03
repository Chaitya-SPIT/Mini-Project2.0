import React, { useState, useRef } from "react";
import Card from "./Card";

const Slider = ({ cards,state,account }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(cards.slice(0, 3));
  const slideContainer = useRef(null);

  const handleNext = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
      setCardsToShow(cards.slice(currentIndex + 1, currentIndex + 4));
    } else {
      setCurrentIndex(0);
      setCardsToShow(cards.slice(0, 3));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCardsToShow(cards.slice(currentIndex - 1, currentIndex + 2));
    } else {
      setCurrentIndex(cards.length - 3);
      setCardsToShow(cards.slice(cards.length - 3));
    }
  };

  return (
    <div className="flex items-center justify-around w-full bg-cyan-500 h-3/6 rounded-xl p-5">
      <button className="button" onClick={handlePrev}>
        &#10094;
      </button>
      <div
        className="flex flex-nowrap overflow-x-hidden w-full scroll-smooth justify-around"
        ref={slideContainer}
      >
        {/* {cardsToShow.map((card) => ( */}
          <Card type='1' state={state} account={account} />
        {/* ))} */}
      </div>

      <button className="button" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
