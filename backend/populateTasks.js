const mongoose = require("mongoose");
const Task = require("./models/Task");

mongoose.connect("mongodb://localhost:27017/ecoquest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tasks = [
  {
    name: "Use a Reusable Water Bottle",
    description:
      "Switch to using a reusable water bottle instead of disposable plastic bottles.",
    environmentalImpact: 5,
    feasibility: 2,
    frequency: 1,
  },
  {
    name: "Turn Off Lights When Not in Use",
    description: "Always turn off lights when you leave a room.",
    environmentalImpact: 4,
    feasibility: 1,
    frequency: 1,
  },
  {
    name: "Unplug Electronics When Not in Use",
    description: "Unplug electronics and chargers when they are not in use.",
    environmentalImpact: 3,
    feasibility: 2,
    frequency: 1,
  },
  {
    name: "Recycle Household Waste",
    description: "Sort and recycle your household waste.",
    environmentalImpact: 7,
    feasibility: 3,
    frequency: 4,
  },
  {
    name: "Carpool or Use Public Transport",
    description:
      "Share rides or use public transport instead of driving alone.",
    environmentalImpact: 6,
    feasibility: 5,
    frequency: 4,
  },
  {
    name: "Plant a Tree or Maintain a Garden",
    description: "Plant a tree or maintain a garden to help the environment.",
    environmentalImpact: 9,
    feasibility: 7,
    frequency: 7,
  },
  {
    name: "Switch to LED Bulbs",
    description: "Replace incandescent bulbs with energy-efficient LED bulbs.",
    environmentalImpact: 6,
    feasibility: 2,
    frequency: 10,
  },
  {
    name: "Use a Clothesline Instead of a Dryer",
    description: "Dry your clothes on a clothesline instead of using a dryer.",
    environmentalImpact: 5,
    feasibility: 4,
    frequency: 4,
  },
  {
    name: "Install Solar Panels",
    description: "Install solar panels to generate your own renewable energy.",
    environmentalImpact: 10,
    feasibility: 9,
    frequency: 10,
  },
  {
    name: "Adopt a Plant-Based Diet",
    description:
      "Switch to a plant-based diet to reduce your carbon footprint.",
    environmentalImpact: 8,
    feasibility: 7,
    frequency: 7,
  },
  {
    name: "Purchase an Electric Vehicle",
    description:
      "Reduce carbon emissions from transportation by using an electric vehicle.",
    environmentalImpact: 10,
    feasibility: 8,
    frequency: 10,
  },
  {
    name: "Conduct a Home Energy Audit and Implement Recommendations",
    description: "Improve energy efficiency and reduce utility bills.",
    environmentalImpact: 8,
    feasibility: 6,
    frequency: 10,
  },
  {
    name: "Replace incandescent bulbs with LED bulbs",
    description: "Use LED bulbs to save energy.",
    environmentalImpact: 6,
    feasibility: 2,
    frequency: 10,
  },
  {
    name: "Install a programmable thermostat",
    description:
      "Install a thermostat to control heating and cooling more efficiently.",
    environmentalImpact: 7,
    feasibility: 5,
    frequency: 10,
  },
  {
    name: "Use public transportation for a day",
    description: "Opt for public transport instead of personal vehicles.",
    environmentalImpact: 6,
    feasibility: 4,
    frequency: 1,
  },
  {
    name: "Carpool with friends or colleagues",
    description: "Share a ride to reduce carbon emissions.",
    environmentalImpact: 6,
    feasibility: 5,
    frequency: 4,
  },
  {
    name: "Ride a bike or walk instead of driving",
    description: "Choose biking or walking over driving.",
    environmentalImpact: 5,
    feasibility: 6,
    frequency: 1,
  },
  {
    name: "Participate in a local recycling program",
    description: "Engage in community recycling efforts.",
    environmentalImpact: 7,
    feasibility: 4,
    frequency: 4,
  },
  {
    name: "Start composting organic waste",
    description: "Reduce waste by composting.",
    environmentalImpact: 8,
    feasibility: 5,
    frequency: 4,
  },
  {
    name: "Avoid single-use plastics for a day",
    description: "Use reusable items instead of single-use plastics.",
    environmentalImpact: 6,
    feasibility: 3,
    frequency: 1,
  },
  {
    name: "Eat a plant-based meal",
    description: "Choose a plant-based meal to reduce carbon footprint.",
    environmentalImpact: 6,
    feasibility: 4,
    frequency: 1,
  },
  {
    name: "Install a low-flow showerhead",
    description: "Use a low-flow showerhead to save water.",
    environmentalImpact: 5,
    feasibility: 4,
    frequency: 10,
  },
  {
    name: "Use a rain barrel to collect rainwater",
    description: "Collect and use rainwater for gardening or other purposes.",
    environmentalImpact: 8,
    feasibility: 6,
    frequency: 10,
  },
  {
    name: "Participate in a community clean-up",
    description: "Join community efforts to clean up the environment.",
    environmentalImpact: 7,
    feasibility: 6,
    frequency: 7,
  },
  {
    name: "Plant a tree or participate in a tree-planting event",
    description: "Plant trees to increase green cover.",
    environmentalImpact: 9,
    feasibility: 7,
    frequency: 7,
  },
  {
    name: "Attend a local sustainability workshop",
    description: "Learn about sustainability practices.",
    environmentalImpact: 5,
    feasibility: 3,
    frequency: 7,
  },
];

Task.insertMany(tasks)
  .then(() => {
    console.log("Tasks added successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error adding tasks:", err);
  });
