const router = require("express").Router();
const Workout = require("../models/workout.js")

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(workout =>{
        res.json(workout)
    }).catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push:{exercises:req.body} }, {new:true, runValidators:true}
    ).then(workout =>{
        res.json(workout)
    }).catch(err => {
        res.json(err)
    })
});

