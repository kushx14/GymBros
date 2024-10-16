import React, { useState, useEffect } from 'react';
import Diet from './food.png';
import Plan from './schedule.jpg';
import Bgch from './Designer.png';
import Footer from './footer';
import Car from './carousel';
import Body from './body.jpg';
const CircularButtons = () => {
  const words = [
    "Hey, Choose the Program that",
    "you want to use",
    "Pick one!",
  ];

  const [currentLines, setCurrentLines] = useState(['', '', '']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentLineIndex];
      const currentLine = currentLines[currentLineIndex];

      if (isDeleting) {
        setCurrentLines(prevLines => {
          const newLines = [...prevLines];
          newLines[currentLineIndex] = currentWord.substring(0, letterIndex - 1);
          return newLines;
        });
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentLineIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % words.length;
            setTypingSpeed(200);
            return nextIndex;
          });
        }
      } else {
        setCurrentLines(prevLines => {
          const newLines = [...prevLines];
          newLines[currentLineIndex] = currentWord.substring(0, letterIndex + 1);
          return newLines;
        });
        setLetterIndex(letterIndex + 1);

        if (letterIndex === currentWord.length) {
          setIsDeleting(true);
          setTypingSpeed(100);
        }
      }
    };

    const timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, typingSpeed, currentLineIndex]);

  const scrollToCarComponent = () => {
    const carElement = document.getElementById('car-component');
    if (carElement) {
      carElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="h-screen flex flex-col items-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Bgch})` }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"></div>
        <header className="flex flex-col items-center justify-center w-full h-auto mb-16" style={{ zIndex: 10 }}>
          {words.map((line, index) => (
            <h1
              key={index}
              className={`text-orange-900 text-4xl font-bold text-center ${index === currentLineIndex ? 'opacity-100' : 'opacity-50'} mb-4`}
            >
              {currentLines[index] || line}
            </h1>
          ))}
        </header>

        <div className="flex flex-wrap justify-center space-x-20 w-full max-w-screen-xl">
          {/* Button 1 - Diet */}
          <div className="relative h-64 w-64 mb-8">
            <div className="absolute w-full h-full rounded-full border-8 border-orange-500 flex items-center justify-center transition-all duration-500 hover:bg-gradient-to-r hover:from-black hover:to-black hover:shadow-xl">
              <a href="/diet" className="w-36 h-36 rounded-full flex items-center justify-center">
                <img src={Diet} alt="diet" className="rounded-full w-full h-full object-cover" />
              </a>
              {/* <div className="absolute bottom-10 left-10 w-4 h-4 bg-gray-800 rounded-full"></div> */}
            </div>
          </div>

          {/* Button 2 - Simple Button */}
          <div className="relative h-64 w-64 mb-8">
            <div className="absolute w-full h-full rounded-full border-8 border-orange-500 flex items-center justify-center transition-all duration-500 hover:bg-gradient-to-r hover:from-black hover:to-black hover:shadow-xl">
              <a href="/workout" className="text-white text-lg font-bold">
                <img src={Body} alt="" className='rounded-full w-36 h-36 object-cover' />
              </a>
              {/* <div className="absolute bottom-10 left-10 w-4 h-4 bg-black rounded-full"></div> */}
            </div>
          </div>

          {/* Button 3 - Plan */}
          <div className="relative h-64 w-64 mb-8">
            <div className="absolute w-full h-full rounded-full border-8 border-orange-500 flex items-center justify-center transition-all duration-500 hover:bg-gradient-to-r hover:from-black hover:to-black hover:shadow-xl">
              <a href="/schedule">
                <img src={Plan} alt="plan" className="rounded-full w-36 h-36 object-cover" />
              </a>
              {/* <div className="absolute bottom-10 left-10 w-4 h-4 bg-gray-800 rounded-full"></div> */}
            </div>
          </div>
        </div>

        {/* Arrow SVG */}
        <div className="mt-12">
          <button onClick={scrollToCarComponent} className="transition-transform transform hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-orange-500 hover:text-orange-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Car component */}
      <div id="car-component">
        <Car />
      </div>

      <Footer />
    </div>
  );
};

export default CircularButtons;
