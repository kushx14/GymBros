import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

export default function WorkoutPlanner() {
  const [view, setView] = useState('week');
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedSplit, setSelectedSplit] = useState('');
  const [customSplit, setCustomSplit] = useState('');
  
  const predefinedSplits = [
    'Full Body 3x/week',
    'Upper/Lower 4x/week',
    'Push/Pull/Legs',
    'Bro Split',
  ];

  const handleSplitChange = (value) => {
    setSelectedSplit(value);
    if (value !== 'custom') {
      setCustomSplit(''); // Clear custom split when predefined is selected
    }
  };

  const handleDateClick = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date)); // Remove if already selected
    } else {
      setSelectedDates([...selectedDates, date]); // Add selected date
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">Workout Planner</h1>

      <div className="max-w-2xl mx-auto space-y-8"> 
        <div className="space-y-6">
          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Choose Workout Split</h2>
            <RadioGroup 
              value={selectedSplit} 
              onValueChange={handleSplitChange} 
              className="space-y-4"
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
          </div>

          {selectedSplit === 'custom' && (
            <div className="bg-[#111111] p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Create Custom Split</h2>
              <Textarea
                placeholder="Describe your custom workout split here..."
                value={customSplit}
                onChange={(e) => setCustomSplit(e.target.value)}
                className="bg-[#1e1e1e] text-gray-100 border-orange-500 placeholder-gray-400 rounded-lg"
              />
            </div>
          )}

          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Schedule Workouts</h2>
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={handleDateClick}
              className="bg-[#1e1e1e] text-gray-100 border-orange-500 rounded-lg"
              dateClassName={(date) =>
                selectedDates.includes(date)
                  ? 'bg-gray-500 text-white'
                  : ''
              }
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 transition-colors">
            Save Workout Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
