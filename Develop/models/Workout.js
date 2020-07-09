const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    excercise: [
      {
        name: { type: String, trim: true, required: "Enter Exercise Name" },
        type: { type: String, trim: true, required: "Enter Exercise Type" },
        Weight: { type: Number },
        sets: { type: Number },
        reps: { type: Number },
        duration: { type: Number, required: "Enter Mins" },
        distance: { type: Number },
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true,
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
