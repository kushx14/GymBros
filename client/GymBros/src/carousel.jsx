import React, { useState, useEffect } from "react";
import Vid from "./vdo.mp4";
import Vid2 from "./vdo2.mp4";
import Vid3 from "./vdo3.mp4";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false); // State for text visibility
  const [autoSlide, setAutoSlide] = useState(true); // State for auto-slide

  const slides = [
    { type: "video", src: Vid, alt: "Slide 1" },
    { type: "video", src: Vid2, alt: "Slide 2" },
    { type: "video", src: Vid3, alt: "Slide 3" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setAutoSlide(false); // Stop auto-slide on user interaction
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setAutoSlide(false); // Stop auto-slide on user interaction
  };

  const handleButtonClick = () => {
    setTextVisible(true); // Show text when button is clicked
  };

  // Auto slide effect
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000); // change slide every 4 seconds

      return () => clearInterval(interval); // cleanup
    }
  }, [autoSlide]);

  // Restart auto-slide after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoSlide(true);
    }, 10000); // Restart auto-slide after 10 seconds of inactivity

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="max-w-full mx-auto h-screen">
      <div className="relative rounded-lg overflow-hidden shadow-lg h-full">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            >
              <div className={`relative w-full h-full ${index === 1 ? "bg-gradient-to-t from-black via-transparent to-black" : ""}`}>
                {slide.type === "video" ? (
                  <>
                    <video
                      src={slide.src}
                      className={`object-cover w-full h-full ${index === 1 ? "blur-sm" : ""}`}
                      alt={slide.alt}
                      autoPlay
                      loop
                      muted
                    />
                    {index === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
                    )}
                    {index === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {!textVisible ? (
                          <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={handleButtonClick}
                          >
                            Show Text
                          </button>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50">
                            Here is the displayed text!
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    src={slide.src}
                    className="object-cover w-full h-full"
                    alt={slide.alt}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-gray-500" : "bg-gray-300"}`}
              onClick={() => {
                setActiveIndex(index);
                setAutoSlide(false); // Stop auto-slide on user interaction
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={handlePrev}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={handleNext}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
