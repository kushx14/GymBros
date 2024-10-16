const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessdataSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    steps: {
        today: {
            type: Number,
            required: true
        },
        last7Days: {
            type: Number,
            required: true
        },
        goal: {
            type: Number,
            required: true
        }
    },
    progress: {
        averageThisYear: {
            type: Number,
            required: true
        },
        averageLastYear: {
            type: Number,
            required: true
        }
    },
    walkingDistance: {
        type: Number,
        required: true
    },
    restingHeartRate: {
        type: Number,
        required: true
    },
    variability: {
        type: Number,
        required: true
    },
    move: {
        calories: {
            type: Number,
            required: true
        },
        goal: {
            type: Number,
            required: true
        }
    },
    exercise: {
        minutes: {
            type: Number,
            required: true
        },
        goal: {
            type: Number,
            required: true
        }
    },
    stand: {
        hours: {
            type: Number,
            required: true
        },
        goal: {
            type: Number,
            required: true
        }
    },
    activeEnergy: {
        calories: {
            type: Number,
            required: true
        }
    },
    timeInBed: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Fitnessdata', fitnessdataSchema);
