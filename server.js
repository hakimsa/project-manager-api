const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

  

const projectsRouter = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use('/projects', projectsRouter);

const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/project_manager';

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
