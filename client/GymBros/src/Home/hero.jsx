import React, { useState, useEffect, useRef } from 'react';
import Gymvideo1 from '.././assets/gymvdo1.mp4';
import Gymvideo2 from '.././assets/gymvdo2.mp4';
import Gymvideo3 from '.././assets/gymvdo3.mp4';
import { useUser } from '@clerk/clerk-react'

function HeroSection() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [Gymvideo1, Gymvideo2, Gymvideo3]; // Array of video sources

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      // Move to the next video in the array
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.play();
    }
  }, [currentVideoIndex, videos]);

  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        type="video/mp4"
        autoPlay
        loop={false}  // Disable loop for sequential playback
        muted={true}  // Mute the video to allow autoplay
      />
  
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Train Your Body With Us
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Achieve your ideal body with our expertly designed workout routines. Start your journey to a healthier, stronger you today!
        </p>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          {/* Conditional button based on user authentication status */}
          {user ? (
            <a className="px-6 py-2 bg-[#eb5e28] text-white rounded-md font-semibold hover:bg-orange-600 transition duration-200" href='/explore'>
              Get Started
            </a>
          ) : (
            <a className="px-6 py-2 bg-[#eb5e28] text-white rounded-md font-semibold hover:bg-orange-600 transition duration-200" href='/login'>
              Get Started
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
