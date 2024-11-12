import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import svgimg from '.././assets/svgexport.svg'
import logimg from '.././assets/loginimg.jpg'

export default function MuscleMap() {
  const [hoveredArea, setHoveredArea] = useState(null)
  const navigate = useNavigate()

  const getFillColor = (muscleGroup) => {
    if (hoveredArea === muscleGroup) {
      return 'rgba(249, 115, 22, 0.4)' // Orange with opacity
    }
    return 'transparent'
  }

  const handleMuscleClick = (muscle) => {
    const routes = {
      chest: '/workout/chest',
      abs: '/workout/abs',
      'bicep-left': '/workout/biceps',
      'bicep-right': '/workout/biceps',
      'leg-left': '/workout/legs',
      'leg-right': '/workout/legs',
    }
    navigate(routes[muscle])
  }

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen bg-gray-900"
      style={{
        backgroundImage: `url(${logimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl font-bold text-orange-500 mt-8 mb-8">INTERACTIVE MUSCLE MAP</h1>
      <div className="muscle-map-container relative w-full max-w-[500px] mx-auto bg-gray-800 rounded-lg p-4 shadow-xl">
        <div className="relative">
          <div className="absolute inset-0">
            <img src={svgimg} alt="Anatomical figure" className="w-full h-full object-contain" />
          </div>

          <svg
            className="w-full aspect-[4/5] relative z-10"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Chest Muscle */}
            <path
              d="M143,121 L158,102 L178,89 L199,94 L214,89 L237,97 L249,113 L251,126 L237,141 L202,137 L184,137 L172,141 L158,137 Z"
              fill={getFillColor('chest')}
              stroke="orange"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setHoveredArea('chest')}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => handleMuscleClick('chest')}
            />

            {/* Abs Muscle */}
            <path
              d="M175,146 L178,158 L177,174 L177,186 L179,206 L184,226 L201,244 L213,232 L220,206 L221,165 L220,143 L203,137 L186,135 Z"
              fill={getFillColor('abs')}
              stroke="orange"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setHoveredArea('abs')}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => handleMuscleClick('abs')}
            />

            {/* Bicep Left */}
            <path
              d="M126,125 L118,133 L112,146 L111,169 L124,170 L136,157 L145,145 L152,130 L139,121 Z"
              fill={getFillColor('bicep-left')}
              stroke="orange"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setHoveredArea('bicep-left')}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => handleMuscleClick('bicep-left')}
            />

            {/* Bicep Right */}
            <path
              d="M254,124 L249,134 L252,145 L261,155 L269,168 L279,170 L290,168 L290,149 L276,126 Z"
              fill={getFillColor('bicep-right')}
              stroke="orange"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setHoveredArea('bicep-right')}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => handleMuscleClick('bicep-right')}
            />

            {/* Leg Left */}
            <path
              d="M163,220 L153,246 L146,280 L146,310 L149,337 L151,353 L147,369 L143,393 L143,416 L145,439 L149,449 L164,458 L165,433 L171,413 L176,402 L173,373 L179,356 L182,342 L188,314 L197,288 L197,269 L187,252 L182,231 L173,223 Z"
              fill={getFillColor('leg-left')}
              stroke="orange"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setHoveredArea('leg-left')}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => handleMuscleClick('leg-left')}
            />

            {/* Leg Right */}
            <path
              d="M221,224 L207,252 L201,266 L202,288 L210,310 L211,335 L217,348 L224,369 L222,396 L227,411 L230,427 L235,450 L235,457 L249,457 L252,434 L256,400 L249,364 L249,325 L253,298 L250,265 L242,231 L240,220 Z"
              fill={getFillColor('leg-right')}
              stroke="orange"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setHoveredArea('leg-right')}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => handleMuscleClick('leg-right')}
            />
          </svg>
        </div>

        {/* Hovered Area Label */}
        {hoveredArea && (
          <div className="absolute top-4 left-4 bg-orange-500 p-2 rounded text-white">
            {hoveredArea.replace('-', ' ').toUpperCase()}
          </div>
        )}
      </div>
    </div>
  )
}