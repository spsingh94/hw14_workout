const router = require("express").Router();
const path = require("path");
const Workouts = require("../models/Workout")

// api routes

router.post("/api/workouts", (req, res) => {
Workouts.create({})
.then((dbWorkout) => {res.json(dbWorkout)})
.catch(err => {res.json(err)})
});

router.put("/api/workouts/:id", (req, res) => {
    // push new exercise
    // Workouts.update({_id = Mongoose.type.ObjectId(req.body), $set:{$push:{excercise: req.body}}
    // db.animals.update({"_id":ObjectId("5ef8c8ae7359b93c4827f48f")}, {$push: {"age":24}})
    Workouts.update({_id = Mongoose.type.ObjectId(req.body)}, {$push: {excercise: req.body}})
    .then(data => {res.json(data)})
    .catch(err => {res.json (err)})
});

router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        .then( data => {res.json(data)})
        .catch( err => {res.json(err)})
});

// html routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));   
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));   
});



module.exports = router;