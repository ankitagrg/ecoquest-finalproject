const mongoose = require('mongoose');

//Defining a schema for tasks, specifying the structure and data types for each field.
const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  environmentalImpact: { type: Number, required: true }, // Scale 1-10 //
  feasibility: { type: Number, required: true }, // Scale 1-10 //
  frequency: { type: Number, required: true }, // Scale 1-10 //
  // effortAndCommitment: { type: Number, required: true }, // Scale 1-10 //
  // educationalValue: { type: Number, required: true }, // Scale 1-10 //
  // scalability: { type: Number, required: true } // Scale 1-10 //
  completed: {type: Boolean, required: false}
});

module.exports = mongoose.model('Task', TaskSchema);