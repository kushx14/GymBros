import React, { useState } from 'react';
import { Play, Info, Search, X } from 'lucide-react';

const BicepsWorkouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const workouts = [
    {
      id: 1,
      title: "Standing Barbell Curl",
      category: "Compound Movement",
      difficulty: "Beginner",
      description: "The classic barbell curl is a fundamental biceps exercise. Stand with feet shoulder-width apart, grip the barbell with palms facing up, and curl the weight toward your shoulders while keeping your upper arms stationary.",
      videoId: "kwG2ipFRgfo",
      musclesFocused: ["Long Head Biceps", "Short Head Biceps", "Brachialis"],
      tips: [
        "Keep your back straight and core engaged",
        "Don't swing the weight - use controlled movements",
        "Keep elbows close to your sides",
        "Squeeze biceps at the top of the movement"
      ],
      commonMistakes: [
        "Using momentum to lift the weight",
        "Moving elbows away from sides",
        "Incomplete range of motion"
      ]
    },
    {
      id: 2,
      title: "Incline Dumbbell Curl",
      category: "Isolation",
      difficulty: "Intermediate",
      description: "This variation provides an enhanced stretch on the biceps. Set an incline bench to 45-60 degrees, sit back fully, and curl dumbbells while keeping your arms hanging straight down.",
      videoId: "soxrZlIl35U",
      musclesFocused: ["Long Head Biceps", "Brachialis"],
      tips: [
        "Keep your back pressed against the bench",
        "Start with arms fully extended",
        "Control the negative portion",
        "Don't let arms swing forward"
      ],
      commonMistakes: [
        "Sitting too far forward on bench",
        "Using too heavy weight",
        "Rushing the movement"
      ]
    },
    {
      id: 3,
      title: "Hammer Curls",
      category: "Isolation",
      difficulty: "Beginner",
      description: "Hammer curls target the brachialis and brachioradialis muscles. Hold dumbbells with palms facing each other, and curl them toward your shoulders while maintaining the neutral grip.",
      videoId: "zC3nLlEvin4",
      musclesFocused: ["Brachialis", "Brachioradialis", "Biceps"],
      tips: [
        "Keep wrists straight throughout",
        "Maintain neutral grip (thumbs up)",
        "Control the movement speed",
        "Keep elbows fixed at sides"
      ],
      commonMistakes: [
        "Rotating wrists during movement",
        "Swinging the weights",
        "Moving shoulders"
      ]
    },
    {
      id: 4,
      title: "Preacher Curl",
      category: "Isolation",
      difficulty: "Intermediate",
      description: "Preacher curls isolate the biceps by eliminating body momentum. Rest your arms on the preacher bench pad, and curl the weight while keeping your arms in full contact with the pad.",
      videoId: "fIWP-FRFNU0",
      musclesFocused: ["Short Head Biceps", "Brachialis"],
      tips: [
        "Keep arms flat on the pad",
        "Don't bounce at bottom",
        "Full extension at bottom",
        "Control the negative portion"
      ],
      commonMistakes: [
        "Lifting hips off the seat",
        "Not going full range",
        "Using too much weight"
      ]
    },
    {
      id: 5,
      title: "Cable Curl",
      category: "Isolation",
      difficulty: "Beginner",
      description: "Cable curls provide constant tension throughout the movement. Stand facing a low pulley, grab the straight bar attachment, and curl while keeping upper arms stationary.",
      videoId: "NFzTWp2qpiE",
      musclesFocused: ["Long Head Biceps", "Short Head Biceps"],
      tips: [
        "Stay centered over the cable",
        "Keep elbows at your sides",
        "Maintain constant tension",
        "Focus on squeezing at the top"
      ],
      commonMistakes: [
        "Leaning back too much",
        "Moving elbows forward",
        "Using momentum"
      ]
    },
    {
      id: 6,
      title: "Concentration Curl",
      category: "Isolation",
      difficulty: "Intermediate",
      description: "A seated isolation exercise that maximizes bicep peak contraction. Sit on a bench, rest your elbow on your inner thigh, and curl a dumbbell while keeping your arm stable.",
      videoId: "Jvj2wV0vOYU",
      musclesFocused: ["Short Head Biceps", "Peak Contraction"],
      tips: [
        "Keep elbow firmly on thigh",
        "Don't swing the weight",
        "Focus on squeezing at the top",
        "Control the negative portion"
      ],
      commonMistakes: [
        "Moving elbow off thigh",
        "Using body momentum",
        "Incomplete range of motion"
      ]
    },
    {
      id: 7,
      title: "21s Bicep Curl",
      category: "Intensity Technique",
      difficulty: "Advanced",
      description: "A high-intensity technique performing 7 reps in the lower half, 7 in the upper half, and 7 full range reps. This creates maximum pump and metabolic stress.",
      videoId: "YbX7RTgqZ38",
      musclesFocused: ["Full Biceps", "Endurance", "Peak Contraction"],
      tips: [
        "Keep strict form throughout",
        "Complete all reps in each portion",
        "Use lighter weight than normal",
        "Maintain tension throughout"
      ],
      commonMistakes: [
        "Using too heavy weight",
        "Mixing up the segments",
        "Breaking form as fatigue sets in"
      ]
    },
    {
      id: 8,
      title: "Reverse Curl",
      category: "Isolation",
      difficulty: "Intermediate",
      description: "Targets the brachialis and forearms. Hold a barbell or EZ bar with palms facing down, and curl while maintaining the pronated grip position.",
      videoId: "nRgxYX2Ve9w",
      musclesFocused: ["Brachialis", "Forearms", "Brachioradialis"],
      tips: [
        "Keep wrists straight",
        "Use lighter weight than standard curls",
        "Focus on form over weight",
        "Control the entire movement"
      ],
      commonMistakes: [
        "Using too much weight",
        "Swinging the body",
        "Bending wrists excessively"
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
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
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
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Biceps Workouts</h1>
        <p className="text-gray-400">Build stronger, more defined biceps with these essential exercises</p>
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
            className="w-full bg-[#1e1e1e] rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 "
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

export default BicepsWorkouts;