import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from '@clerk/clerk-react';
import { format } from 'date-fns';
import './schedule.css';

export default function WorkoutPlanner() {
  const { user } = useUser();
  const [view, setView] = useState('week');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSplit, setSelectedSplit] = useState('');
  const [customSplit, setCustomSplit] = useState('');
  const [savedPlan, setSavedPlan] = useState([]);

  const predefinedSplits = [
    'Full Body 3x/week',
    'Upper/Lower 4x/week',
    'Push/Pull/Legs',
    'Bro Split',
  ];

  useEffect(() => {
    const savedData = Cookies.get('workoutPlan');
    if (savedData) {
      setSavedPlan(JSON.parse(savedData));
    }
  }, []);

  const handleSplitChange = (value) => {
    setSelectedSplit(value);
    if (value !== 'custom') {
      setCustomSplit('');
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const saveWorkoutPlan = () => {
    const newPlan = {
      userId: user.id,
      workout: selectedSplit === 'custom' ? customSplit : selectedSplit,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
    };
    const updatedPlan = [...savedPlan, newPlan];
    setSavedPlan(updatedPlan);
    Cookies.set('workoutPlan', JSON.stringify(updatedPlan), { expires: 7 });
  };

  const clearWorkoutPlan = () => {
    setSavedPlan([]);
    Cookies.remove('workoutPlan');
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">Workout Planner</h1>

      <div className="max-w-2xl mx-auto space-y-8">
        
        <div className="space-y-6 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Choose Workout Split</h2>
            <RadioGroup 
              value={selectedSplit} 
              onValueChange={handleSplitChange} 
              className="space-y-4 p-3"
            >
              {predefinedSplits.map((split, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={split} id={`split-${index}`} className="text-orange-500" />
                  <Label htmlFor={`split-${index}`} className="text-gray-300">
                    {split}
                  </Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="split-custom" className="text-orange-500" />
                <Label htmlFor="split-custom" className="text-gray-300">Custom Split</Label>
              </div>
            </RadioGroup>
            {selectedSplit === 'custom' && (
              <div className="mt-4">
                <Textarea
                  placeholder="Describe your custom workout split here..."
                  value={customSplit}
                  onChange={(e) => setCustomSplit(e.target.value)}
                  className="bg-[#1e1e1e] text-gray-100 border-orange-500 placeholder-gray-400 rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg flex-1 mx-auto flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500 text-center">Schedule Workouts</h2>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateClick}
              className="bg-[#1e1e1e] text-gray-100 border-orange-500 "
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button 
            onClick={saveWorkoutPlan} 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 transition-colors">
            Save Workout Plan
          </Button>
          <Button 
            onClick={clearWorkoutPlan} 
            className="bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8 py-3 transition-colors">
            Clear Workout Plan
          </Button>
        </div>

        <div className="mt-8 bg-[#111111] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Your Saved Workout Plans</h2>
          {savedPlan.length > 0 ? (
            savedPlan.map((plan, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg text-gray-100">
                  <strong>Workout Split:</strong> {plan.workout}
                </p>
                <p className="text-lg text-gray-100">
                  <strong>Scheduled Date:</strong> {plan.date || 'Not selected'}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No saved plans.</p>
          )}
        </div>
      </div>
    </div>
  );
}
