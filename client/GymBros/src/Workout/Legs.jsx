import React, { useState } from 'react';
import { Play, Info, Search, X } from 'lucide-react';

const LegWorkouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const workouts = [
    {
      id: 1,
      title: "Squats",
      category: "Lower Body Strength",
      difficulty: "Intermediate",
      description: "A fundamental lower body exercise that targets the quadriceps, glutes, and hamstrings. Stand with feet shoulder-width apart, send hips back, and bend knees to lower into a squat.",
      videoId: "bEv2gYWlKJE",
      musclesFocused: ["Quadriceps", "Glutes", "Hamstrings"],
      tips: [
        "Keep chest up and core braced",
        "Distribute weight evenly through feet",
        "Drive through heels to stand up",
        "Control the lowering phase"
      ],
      commonMistakes: [
        "Knees caving inward",
        "Rounding lower back",
        "Going too deep without mobility",
        "Letting chest fall forward"
      ]
    },
    {
      id: 2,
      title: "Lunges",
      category: "Lower Body Strength",
      difficulty: "Intermediate",
      description: "A unilateral leg exercise that challenges balance and coordination. Step forward with one leg, lowering your hips until both knees are bent at 90 degrees.",
      videoId: "SaZg7MqKWxg",
      musclesFocused: ["Quadriceps", "Glutes", "Hamstrings"],
      tips: [
        "Keep upper body tall and core braced",
        "Drive through the front heel to stand up",
        "Alternate legs, keeping them in line",
        "Control the movement, don't bounce"
      ],
      commonMistakes: [
        "Letting front knee cave inward",
        "Arching lower back",
        "Leaning torso forward or backward",
        "Uneven step length between legs"
      ]
    },
    {
      id: 3,
      title: "Deadlifts",
      category: "Posterior Chain",
      difficulty: "Advanced",
      description: "A compound exercise that primarily targets the posterior chain (hamstrings, glutes, and lower back). Hinge at the hips to lift a barbell or dumbbells off the floor.",
      videoId: "op9kVQaHl3w",
      musclesFocused: ["Hamstrings", "Glutes", "Lower Back"],
      tips: [
        "Maintain a neutral spine throughout",
        "Grip the bar with straight wrists",
        "Drive through the heels to stand up",
        "Control the weight on the lowering phase"
      ],
      commonMistakes: [
        "Rounding lower back",
        "Using too much weight too soon",
        "Letting the bar drift away from body",
        "Not bracing the core properly"
      ]
    },
    {
      id: 4,
      title: "Calf Raises",
      category: "Lower Leg",
      difficulty: "Beginner",
      description: "An isolation exercise that targets the calf muscles. Stand with feet shoulder-width apart and raise up onto your toes, lifting your heels off the ground.",
      videoId: "rNbfqcWuDo0",
      musclesFocused: ["Gastrocnemius", "Soleus"],
      tips: [
        "Squeeze your calf muscles at the top",
        "Control the lowering phase",
        "Keep your core braced",
        "Use a wall or chair for balance if needed"
      ],
      commonMistakes: [
        "Going up too high or not fully",
        "Bouncing at the bottom",
        "Using momentum instead of control",
        "Letting upper body sway or lean"
      ]
    },
    {
      id: 5,
      title: "Hip Thrusts",
      category: "Glute Isolation",
      difficulty: "Intermediate",
      description: "An effective exercise for targeting the glutes. Sit with your upper back against a bench, place a barbell or weights across your hips, and drive through your heels to lift your hips up.",
      videoId: "xD6G6CepYFM",
      musclesFocused: ["Glutes", "Hamstrings"],
      tips: [
        "Keep your core braced",
        "Squeeze your glutes at the top",
        "Control the lowering phase",
        "Use a pad or towel for comfort"
      ],
      commonMistakes: [
        "Arching back too much",
        "Not going to full hip extension",
        "Letting hips sag or pike up",
        "Relying on momentum instead of glutes"
      ]
    },
    {
      id: 6,
      title: "Wall Sits",
      category: "Isometric Hold",
      difficulty: "Beginner",
      description: "A static leg exercise that targets the quadriceps. Lean back against a wall with your feet shoulder-width apart and knees bent at 90 degrees, as if you're sitting in an invisible chair.",
      videoId: "y-wV4Venusw",
      musclesFocused: ["Quadriceps"],
      tips: [
        "Keep your back flat against the wall",
        "Engage your core and glutes",
        "Maintain even weight distribution",
        "Hold for as long as you can"
      ],
      commonMistakes: [
        "Letting knees cave inward",
        "Leaning forward or backward",
        "Holding your breath",
        "Letting hips sag or pike up"
      ]
    },
    {
      id: 7,
      title: "Step-Ups",
      category: "Lower Body Strength",
      difficulty: "Intermediate",
      description: "A compound exercise that works the legs and glutes. Step up onto a sturdy box or bench with one leg, then step back down with the same leg.",
      videoId: "pAEwzD_TDNQ",
      musclesFocused: ["Quadriceps", "Glutes", "Hamstrings"],
      tips: [
        "Keep your core braced and chest up",
        "Drive through the heel of the stepping leg",
        "Avoid pushing off with the trailing leg",
        "Control the lowering phase"
      ],
      commonMistakes: [
        "Letting the trailing knee touch the ground",
        "Leaning on the leading leg too much",
        "Using momentum instead of control",
        "Failing to fully extend the hip at the top"
      ]
    },
    {
      id: 8,
      title: "Side Lunges",
      category: "Lateral Movement",
      difficulty: "Intermediate",
      description: "A variation of the lunge that targets the inner and outer thighs. Step out to the side with one leg, lowering your hips and keeping your torso upright.",
      videoId: "2-lzv1LwuNY",
      musclesFocused: ["Quadriceps", "Glutes", "Adductors"],
      tips: [
        "Keep your chest up and core braced",
        "Drive through the heel to return to start",
        "Maintain an upright torso throughout",
        "Alternate sides, keeping steps even"
      ],
      commonMistakes: [
        "Letting the knee cave inward",
        "Leaning torso to the side",
        "Uneven step width between legs",
        "Pushing off with the trailing leg"
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
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Leg Workouts</h1>
        <p className="text-gray-400">Build stronger, more powerful legs with these essential exercises</p>
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
            className="w-full bg-gray-900 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div 
            key={workout.id}
            className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all"
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

export default LegWorkouts;