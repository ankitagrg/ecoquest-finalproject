const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Define a function to calculate total points
const calculatePoints = (task) => {
  const { environmentalImpact, feasibility, frequency } = task;
  return (environmentalImpact + feasibility) * frequency;
};

// Get a random task
router.get('/random', async (req, res) => {
  try {
      const tasks = await Task.aggregate([{ $sample: { size: 4 } }]);
      if (tasks.length > 0) {
            // Add totalPoints to each task
            tasks.forEach(task => {
              task.totalPoints = calculatePoints(task);
            });
      
            // Combine all tasks into a single object
            const combinedTask = { tasks };
      
            // Send the combined task as the response
            res.json(combinedTask);
      } else {
          res.status(404).json({ message: 'No tasks found' });
      }
  } catch (error) {
      console.error('Error fetching random task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to mark a task as complete
router.post('/complete', async (req, res) => {
  const { taskId } = req.body;
  try {
      const task = await Task.findById(taskId);
      if (!task) {
          console.error('Task not found');
          return res.status(404).json({ message: 'Task not found' });
      }

      // Here, we would update the task status to completed
      console.log(task)
      task.completed = true;
      console.log(task)
      try {
      const saveResp =  await task.save();
      console.log(saveResp);
      } catch (error) {
        res.json({error: error})
      }
      res.json({ message: 'Task marked as complete' });
  } catch (error) {
      console.error('Error marking task as complete:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to get all completed tasks
// http://localhost:5000/api/tasks/completed
router.get('/completed', async (req, res) => {
    try {
      const completedTasks = await Task.find({ completed: true });
      if (!completedTasks || completedTasks.length === 0) {
        return res.status(404).json({ message: 'No completed tasks found' });
      }
      
      const totalPoints = completedTasks.reduce((sum, task) => {
        return sum + calculatePoints(task);
      }, 0);
  
      res.json({
        tasks: completedTasks,
        totalPoints: totalPoints
      });
    } catch (error) {
      console.error('Error fetching completed tasks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Route to skip a task
router.post('/skip', async (req, res) => {
  const { taskId } = req.body;
  console.log(`Received taskId: ${taskId}`);
  try {
      const task = await Task.findById(taskId);
      if (!task) {
          console.error('Task not found');
          return res.status(404).json({ message: 'Task not found' });
      }

      // Here, we could update the task status to skipped or just inform the client
      res.json({ message: 'Task skipped' });
  } catch (error) {
      console.error('Error skipping task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
