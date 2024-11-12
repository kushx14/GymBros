import React, { useState, useEffect } from 'react';
import { Play, Info, ExternalLink, Search, X } from 'lucide-react';

const ChestWorkouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const workouts = [
    {
      id: 1,
      title: "Bench Press",
      category: "Compound Movement",
      difficulty: "Intermediate",
      description: "The bench press is a compound exercise that works your chest, front deltoids, and triceps. Lie on a flat bench, grip the barbell slightly wider than shoulder-width, lower it to your chest, and press up.",
      videoId: "rT7DgCr-3pg",
      musclesFocused: ["Upper Chest", "Middle Chest", "Front Deltoids", "Triceps"],
      tips: [
        "Keep your feet flat on the ground",
        "Maintain a slight arch in your back",
        "Keep your elbows at a 45-degree angle",
        "Control the weight throughout the movement"
      ],
      commonMistakes: [
        "Bouncing the bar off the chest",
        "Uneven bar path",
        "Too wide grip"
      ]
    },
    {
      id: 2,
      title: "Incline Dumbbell Press",
      category: "Compound Movement",
      difficulty: "Intermediate",
      description: "This exercise targets the upper chest muscles. Set the bench to 30-45 degrees, hold a dumbbell in each hand at shoulder level, and press upward while maintaining control.",
      videoId: "8iPEnn-ltC8",
      musclesFocused: ["Upper Chest", "Front Deltoids", "Triceps"],
      tips: [
        "Keep your core tight",
        "Don't let the dumbbells touch",
        "Lower weights slowly for better control",
        "Keep your back pressed against the bench"
      ],
      commonMistakes: [
        "Setting bench angle too high",
        "Flaring elbows too much",
        "Using momentum"
      ]
    },
    {
      id: 3,
      title: "Dumbbell Flyes",
      category: "Isolation",
      difficulty: "Intermediate",
      description: "Dumbbell flyes isolate the chest muscles and provide a great stretch. Lie on a flat bench, start with dumbbells extended above your chest, then lower them out to the sides in an arc motion.",
      videoId: "eozdVDA78K0",
      musclesFocused: ["Middle Chest", "Upper Chest"],
      tips: [
        "Maintain a slight bend in your elbows",
        "Focus on the stretch at the bottom",
        "Keep the movement controlled",
        "Imagine hugging a barrel"
      ],
      commonMistakes: [
        "Straightening arms completely",
        "Using too heavy weight",
        "Insufficient range of motion"
      ]
    },
    {
      id: 4,
      title: "Cable Crossover",
      category: "Isolation",
      difficulty: "Advanced",
      description: "A cable crossover targets the chest muscles from a standing position, allowing for constant tension throughout the movement. Stand between two cable machines and bring your hands together in a hugging motion.",
      videoId: "taI4XduLpTk",
      musclesFocused: ["Lower Chest", "Middle Chest", "Serratus Anterior"],
      tips: [
        "Lean slightly forward",
        "Keep a slight bend in your elbows",
        "Focus on squeezing your chest at peak contraction",
        "Maintain control throughout the movement"
      ],
      commonMistakes: [
        "Standing too close to the cables",
        "Using momentum",
        "Not maintaining tension"
      ]
    },
    {
      id: 5,
      title: "Push-Ups",
      category: "Compound Movement",
      difficulty: "Beginner",
      description: "The classic push-up is a bodyweight exercise that effectively targets the chest, shoulders, and triceps. Start in a plank position and lower your body until your chest nearly touches the ground, then push back up.",
      videoId: "IODxDxX7oi4",
      musclesFocused: ["Middle Chest", "Front Deltoids", "Triceps", "Core"],
      tips: [
        "Keep your body in a straight line",
        "Position hands slightly wider than shoulders",
        "Look at a spot about 6 inches in front of you",
        "Engage your core throughout"
      ],
      commonMistakes: [
        "Sagging hips",
        "Flaring elbows too much",
        "Incomplete range of motion"
      ]
    },
    {
      id: 6,
      title: "Decline Bench Press",
      category: "Compound Movement",
      difficulty: "Advanced",
      description: "The decline bench press emphasizes the lower chest muscles. Lie on a decline bench with your feet secured, grip the barbell, and lower it to your lower chest before pressing up.",
      videoId: "LfyQBUKR8SE",
      musclesFocused: ["Lower Chest", "Triceps", "Front Deltoids"],
      tips: [
        "Keep your shoulder blades retracted",
        "Control the descent",
        "Keep wrists straight",
        "Breathe properly during the movement"
      ],
      commonMistakes: [
        "Letting the bar drift too high",
        "Not securing feet properly",
        "Rushing the movement"
      ]
    }
  ];

  const filteredWorkouts = workouts.filter(workout => 
    workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const VideoModal = ({ workout, onClose }) => (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl">
        <div className="p-4 border-b border-gray-500 flex justify-between items-center">
          <h2 className="text-xl font-bold text-orange-500">{workout.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${workout.videoId}`}
            title={workout.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Chest Workouts</h1>
        <p className="text-gray-400">Master these essential chest exercises for a stronger upper body</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, category, or difficulty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1e1e1e] rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div 
            key={workout.id}
            className="bg-[#1e1e1e] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all"
          >
            {/* Workout Video Thumbnail */}
            <div 
              className="relative cursor-pointer"
              onClick={() => setSelectedWorkout(workout)}
            >
              <img 
                src={`https://img.youtube.com/vi/${workout.videoId}/maxresdefault.jpg`}
                alt={workout.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Play className="w-12 h-12 text-orange-500" />
              </div>
            </div>

            {/* Workout Info */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-orange-500">{workout.title}</h2>
                <span className={`text-xs px-2 py-1 rounded ${
                  workout.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  workout.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {workout.difficulty}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">{workout.description}</p>

              {/* Muscles Focused */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-orange-500 mb-2">Muscles Focused:</h3>
                <div className="flex flex-wrap gap-2">
                  {workout.musclesFocused.map((muscle, index) => (
                    <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-orange-500">
                  <Info className="w-4 h-4" />
                  <h3 className="font-semibold">Pro Tips:</h3>
                </div>
                <ul className="list-disc list-inside text-gray-400 pl-2">
                  {workout.tips.map((tip, index) => (
                    <li key={index} className="text-sm">{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-orange-500">Common Mistakes to Avoid:</h3>
                <ul className="list-disc list-inside text-gray-400 pl-2">
                  {workout.commonMistakes.map((mistake, index) => (
                    <li key={index} className="text-sm">{mistake}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedWorkout && (
        <VideoModal 
          workout={selectedWorkout} 
          onClose={() => setSelectedWorkout(null)}
        />
      )}
    </div>
  );
};

export default ChestWorkouts;