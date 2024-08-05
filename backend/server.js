const express = require('express'); //creates an express server
const mongoose = require('mongoose'); //connects to MongoDB
const bodyParser = require('body-parser'); //parses JSON requests, works as middleware for req and res
const cors = require('cors'); //enables Cross-Origin Resource Sharing
const app = express();

//Creates an Express app instance and configures it to use cors and body-parser.
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:5174',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

//Sets up a route for task-related API requests (/api/tasks).
const taskRoutes = require('./routes/tasks');
const emissionsRoutes = require('./routes/emissions');

app.use('/api/tasks', taskRoutes);
app.use('/api/emissions', emissionsRoutes);

//Connects to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ecoquest?directConnection=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
