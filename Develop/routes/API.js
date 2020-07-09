//an api is the messenger that takes and sends requests
const router = require("express").Router();
const Workouts = require("../models/Workout")

// api routes
router.post("/api/workouts", (req, res) => {
    Workouts.create({})
    .then((data) => {res.json(data)})
    .catch((err) => {res.json(err)})
});

router.put("/api/workouts/:id", (req, res) => {
    Workouts.update(
        req.params.id, 
        {$push: {excercise: req.body}},
        { new: true, runValidators: true })
    .then((data) => {res.json(data)})
    .catch((err) => {res.json (err)})
});

router.get("/api/workouts", (req, res) => {
    Workouts.find()
    .then((data) => {res.json(data)})
    .catch((err) => {res.json (err)})
});

router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
    .limit(10)
    .then((data) => {res.json(data)})
    .catch((err) => {res.json (err)})
});

router.delete("/api/workouts", (req, res) => {
    Workouts.find(req.body.id)
    .then(() => res.json(
        res.json(true)
    ))
    .catch((err) => {res.json(err)})
});

module.exports = router;