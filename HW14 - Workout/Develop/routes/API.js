//an api is the messenger that takes and sends requests
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
    Workouts.update(req.params.id, {$push: {excercise: req.body}}, { new: true, runValidators: true })
    .then(data => {res.json(data)})
    .catch(err => {res.json (err)})
});

router.delete("/api/workouts", (req, res) => {
    Workouts.find(req.body.id)
    .then(() => res.json(
        res.json(true)
    ))
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