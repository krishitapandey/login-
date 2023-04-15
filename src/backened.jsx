const express = require('express');
const User = require('./path/to/user/model');

const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = 'your-mongodb-uri-here';

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.log('Error connecting to database:', error);
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.json('success');
    } else {
      res.json('invalid');
    }
  } catch (error) {
    console.log('Error:', error);
    res.json('error');
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password
  });

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.json('exist');
    } else {
      await newUser.save();
      res.json('success');
    }
  } catch (error) {
    console.log('Error:', error);
    res.json('error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
