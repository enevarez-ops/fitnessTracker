const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type:Date,
        default:()=> new Date()
    }, 
    exercises:[
        {
            type:{
                type:String, 
                trim:true,
                required: "enter type of exercise"
            }, 
            name:{
                type:String,
                trim:true,
                required: "name of exercise"
            }, 
            duration: {
                type:Number,
                required: "enter duration of exercise in minutes"
            }, 
            weight: {
                type:Number
            }, 
            reps:{
                type:Number
            }, 
            sets:{
                type:Number
            },
            distance:{
                type:Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;