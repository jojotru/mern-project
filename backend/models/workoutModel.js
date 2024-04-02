const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String
    },
    reps: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },

}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)
