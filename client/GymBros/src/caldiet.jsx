"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const vegetarianDiet = [
  { name: "Greek Yogurt with Berries", calories: 150, protein: 15, carbs: 20, fat: 5 },
  { name: "Lentil Soup", calories: 200, protein: 12, carbs: 30, fat: 3 },
  { name: "Quinoa Salad", calories: 250, protein: 8, carbs: 40, fat: 8 },
  { name: "Vegetable Stir-Fry with Tofu", calories: 300, protein: 15, carbs: 25, fat: 12 },
  { name: "Chickpea Curry", calories: 350, protein: 10, carbs: 45, fat: 15 },
];

const nonVegetarianDiet = [
  { name: "Grilled Chicken Breast", calories: 200, protein: 30, carbs: 0, fat: 5 },
  { name: "Salmon with Roasted Vegetables", calories: 350, protein: 25, carbs: 15, fat: 20 },
  { name: "Turkey and Avocado Wrap", calories: 400, protein: 20, carbs: 30, fat: 15 },
  { name: "Beef Stir-Fry", calories: 450, protein: 35, carbs: 20, fat: 25 },
  { name: "Egg White Omelette with Spinach", calories: 200, protein: 20, carbs: 5, fat: 8 },
];

const Component = () => {
  const [dietType, setDietType] = useState('veg');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [dietItems, setDietItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const calculateBMR = () => {
    const bmr = 10 * weight + 6.25 * height - 5 * 25 + (dietType === 'veg' ? -161 : 5);
    return Math.round(bmr);
  };

  const handleGetResult = () => {
    setIsLoading(true);
    setTimeout(() => {
      const bmr = calculateBMR();
      const targetCalories = bmr * 1.2;
      const diet = dietType === 'veg' ? vegetarianDiet : nonVegetarianDiet;
      const selectedItems = diet.sort(() => 0.5 - Math.random()).slice(0, 3);
      setDietItems(selectedItems);
      setIsLoading(false);
    }, 1500);
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
          Diet Recommendations
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Your Input</h2>
          <p className="text-center">
            Diet Type: <span className="font-bold text-orange-400">{dietType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}</span>
          </p>
          <p className="text-center">
            Height: <span className="font-bold text-orange-400">{height} cm</span>
          </p>
          <p className="text-center">
            Weight: <span className="font-bold text-orange-400">{weight} kg</span>
          </p>
        </div>

        <div className="flex justify-center mt-6 mb-8">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetResult}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Calculating...' : 'Get Diet Recommendations'}
          </motion.button>
        </div>

        <AnimatePresence>
          {dietItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center text-white">Recommended Diet Items</h2>
              <div className="flex flex-col gap-4">
                {dietItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#2a2a2a] p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-orange-400">{item.name}</h3>
                    <p>Calories: {item.calories}</p>
                    <p>Protein: {item.protein}g</p>
                    <p>Carbs: {item.carbs}g</p>
                    <p>Fat: {item.fat}g</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Component;
