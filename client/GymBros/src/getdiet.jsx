import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chicken from './chicken.webp'
import Salad from  './salad.webp'

export default function Component() {
  const [dietType, setDietType] = useState('veg');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGetResult = () => {
    setIsSubmitting(true);
    console.log('Diet Type:', dietType);
    console.log('Height:', height);
    console.log('Weight:', weight);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulating API call
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] text-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full border border-orange-500/20"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-8 text-center">
          Fitness Planner
        </h1>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Choose Your Diet</h2>
          <div className="flex justify-center space-x-6">
            <DietButton
              type="veg"
              selected={dietType === 'veg'}
              onClick={() => setDietType('veg')}
              imageSrc={Salad}
            >
              Vegetarian
            </DietButton>
            <DietButton
              type="non-veg"
              selected={dietType === 'non-veg'}
              onClick={() => setDietType('non-veg')}
              imageSrc={Chicken}
            >
              Non-Vegetarian
            </DietButton>
          </div>
        </div>

        <SliderSection
          title="Your Height"
          value={height}
          onChange={setHeight}
          min={120}
          max={220}
          step={1}
          unit="cm"
        />

        <SliderSection
          title="Your Weight"
          value={weight}
          onChange={setWeight}
          min={30}
          max={170}
          step={1}
          unit="kg"
        />

        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetResult}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Calculating...' : 'Get Your Plan'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function DietButton({ type, selected, onClick, imageSrc, children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
        selected
          ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg'
          : 'bg-[#2a2a2a] hover:bg-[#333333] shadow-md'
      }`}
    >
      <img src={imageSrc} alt={type} className={`mb-3 ${type === 'veg' ? 'w-16 h-16' : 'w-20 h-20'}`} />
      <span className="text-lg font-semibold">{children}</span>
    </motion.button>
  );
}

function SliderSection({ title, value, onChange, min, max, step, unit }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => onChange(displayValue), 50);
    return () => clearTimeout(timer);
  }, [displayValue, onChange]);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">{title}</h2>
      <div className="relative">
        <Slider
          value={displayValue}
          onValueChange={setDisplayValue}
          min={min}
          max={max}
          step={step}
        />
        <div className="absolute left-0 right-0 -bottom-6 px-2 flex justify-between text-xs text-gray-400">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={displayValue}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="mt-6 text-center text-2xl font-bold text-orange-400"
        >
          {displayValue} {unit}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Slider({ value, onValueChange, min, max, step }) {
  const handleChange = (e) => {
    onValueChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      className="w-full cursor-pointer"
    />
  );
}
