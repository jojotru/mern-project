const express = require('express')


const router = express.Router()
// GET all workouts
router.get('/', (req, res) => {
    res.json ({mssg: 'GET all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})
 
// POST a new workout
router.post('/', async (req, res) => {
    const {title, count, reps} = req.body

    try{
        const workout = await Workout.create({title, count, reps})
        res.status(200).json(workout)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
})

// DELETE a new workout 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})


module.exports = router

