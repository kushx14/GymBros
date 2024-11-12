import React, { useState } from 'react';
import { Play, Info, Search, X } from 'lucide-react';

const AbWorkouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const workouts = [
    {
      id: 1,
      title: "Crunch",
      category: "Core Isolation",
      difficulty: "Beginner",
      description: "A classic ab exercise that targets the upper abdominals. Lie on your back, bend your knees, and lift your shoulder blades off the ground while keeping your lower back pressed into the floor.",
      videoId: "Xyd_fa5zoEU",
      musclesFocused: ["Rectus Abdominis"],
      tips: [
        "Engage your core before each rep",
        "Avoid pulling on your neck",
        "Go slow and controlled",
        "Focus on a full contraction"
      ],
      commonMistakes: [
        "Using momentum instead of control",
        "Arching lower back",
        "Pulling on the neck",
        "Incomplete range of motion"
      ]
    },
    {
      id: 2,
      title: "Leg Raises",
      category: "Lower Ab Isolation",
      difficulty: "Intermediate",
      description: "Targets the lower abdominals. Lie on your back, keep your legs straight, and raise them up towards the ceiling while keeping your lower back pressed into the floor.",
      videoId: "loJKcqvXciw",
      musclesFocused: ["Lower Rectus Abdominis", "Hip Flexors"],
      tips: [
        "Engage your core before each rep",
        "Keep legs straight throughout",
        "Avoid swinging or momentum",
        "Control the lowering phase"
      ],
      commonMistakes: [
        "Bending knees",
        "Arching lower back",
        "Using hip flexor momentum",
        "Incomplete range of motion"
      ]
    },
    {
      id: 3,
      title: "Bicycle Crunches",
      category: "Oblique Targeting",
      difficulty: "Intermediate",
      description: "Combines abdominal crunches with oblique twists. Lie on your back, bring your knees in and twist your torso, reaching your elbow to the opposite knee.",
      videoId: "MKmrqcoCZ-M",
      musclesFocused: ["Rectus Abdominis", "Internal/External Obliques"],
      tips: [
        "Move slowly and with control",
        "Keep lower back pressed into floor",
        "Engage your core throughout",
        "Twist your torso, not just your arms"
      ],
      commonMistakes: [
        "Jerky, uncontrolled movements",
        "Arching lower back",
        "Using momentum instead of core",
        "Not twisting through the full range"
      ]
    },
    {
      id: 4,
      title: "Plank",
      category: "Core Stability",
      difficulty: "Beginner",
      description: "A fundamental core exercise that builds isometric strength. Hold a straight-arm or forearm position while maintaining a straight line from head to heels, engaging your entire core.",
      videoId: "ASdvN_XEl_c",
      musclesFocused: ["Rectus Abdominis", "Transverse Abdominis", "Obliques"],
      tips: [
        "Keep your body in a straight line",
        "Engage your core by pulling navel to spine",
        "Keep neck neutral - look at the floor",
        "Don't let hips sag or pike up"
      ],
      commonMistakes: [
        "Sagging hips",
        "Holding breath",
        "Incorrect head position",
        "Not engaging core fully"
      ]
    },
    {
      id: 5,
      title: "Russian Twists",
      category: "Rotational Movement",
      difficulty: "Intermediate",
      description: "A seated exercise that targets the obliques through rotational movement. Sit with knees bent, feet elevated, and twist torso from side to side while holding a weight.",
      videoId: "wkD8rjkodUI",
      musclesFocused: ["Internal Obliques", "External Obliques", "Rectus Abdominis"],
      tips: [
        "Keep chest up and back straight",
        "Lift feet off ground for added difficulty",
        "Move slowly and controlled",
        "Touch weight to ground on each side"
      ],
      commonMistakes: [
        "Rounding lower back",
        "Moving too quickly",
        "Not rotating fully",
        "Using momentum instead of core"
      ]
    },
    {
      id: 6,
      title: "Dead Bug",
      category: "Core Stability",
      difficulty: "Beginner",
      description: "A safe and effective exercise that teaches core stability and coordination. Lie on your back, extend opposite arm and leg while maintaining core engagement.",
      videoId: "4XLEnwUr1d8",
      musclesFocused: ["Deep Core Muscles", "Rectus Abdominis", "Lower Back"],
      tips: [
        "Press lower back firmly into ground",
        "Breathe normally throughout",
        "Move limbs slowly and controlled",
        "Keep core engaged throughout"
      ],
      commonMistakes: [
        "Arching lower back",
        "Moving too quickly",
        "Not maintaining core engagement",
        "Letting limbs drop too low"
      ]
    },
    {
      id: 7,
      title: "Ab Wheel Rollout",
      category: "Dynamic Stability",
      difficulty: "Advanced",
      description: "Using an ab wheel, roll forward and back while maintaining core tension. This exercise builds serious core strength and stability.",
      videoId: "A3uK5TPzHq8",
      musclesFocused: ["Rectus Abdominis", "Transverse Abdominis", "Lats"],
      tips: [
        "Start with small ranges of motion",
        "Keep core engaged throughout",
        "Maintain neutral spine",
        "Control the rollout and return"
      ],
      commonMistakes: [
        "Sagging lower back",
        "Rolling out too far too soon",
        "Not engaging core fully",
        "Using shoulders too much"
      ]
    },
    {
      id: 8,
      title: "Mountain Climbers",
      category: "Dynamic Movement",
      difficulty: "Beginner",
      description: "A dynamic exercise that combines core strength with cardio. In a plank position, alternate bringing knees toward chest in a running motion.",
      videoId: "nmwgirgXLYM",
      musclesFocused: ["Rectus Abdominis", "Hip Flexors", "Shoulders"],
      tips: [
        "Keep hips level throughout",
        "Drive knees toward chest",
        "Maintain plank position",
        "Control your pace"
      ],
      commonMistakes: [
        "Bouncing hips",
        "Moving too fast",
        "Not driving knees high enough",
        "Losing plank form"
      ]
    }
  ];

  const filteredWorkouts = workouts.filter(workout => 
    workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const VideoModal = ({ workout, onClose }) => (
    <div className="fixed inset-0 bg-[#1e1e1e] flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e1e1e] rounded-lg w-full max-w-4xl">
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
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Ab Workouts</h1>
        <p className="text-gray-400">Build a strong, stable core with these essential exercises</p>
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

export default AbWorkouts;