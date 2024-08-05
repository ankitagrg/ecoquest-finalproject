const mongoose = require('mongoose');

const CarbonEmissionSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  date: { type: Date, default: Date.now },
  electricity: { type: Number, default: 0 }, // kWh
  naturalGas: { type: Number, default: 0 }, // cubic meters
  carTravel: { type: Number, default: 0 }, // kilometers
  busTravel: { type: Number, default: 0 }, // kilometers
  trainTravel: { type: Number, default: 0 }, // kilometers
  shortFlights: { type: Number, default: 0 }, // kilometers
  longFlights: { type: Number, default: 0 }, // kilometers
  meatConsumption: { type: Number, default: 0 }, // kilograms
  poultryConsumption: { type: Number, default: 0 }, // kilograms
  vegetableConsumption: { type: Number, default: 0 }, // kilograms
  wasteGeneration: { type: Number, default: 0 }, // kilograms
  totalEmissions: { type: Number, required: true } // kg CO2
});

module.exports = mongoose.model('CarbonEmission', CarbonEmissionSchema);
