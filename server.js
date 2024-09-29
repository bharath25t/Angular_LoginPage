const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Disable strict query
mongoose.set('strictQuery', false);

// Middleware for parsing JSON
app.use(express.json());

// MongoDB connection string (replace if necessary)
const mongoURI = 'mongodb://localhost:27017/abc';  // Database: abc

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define schema and model for user login
const LoginSchema = new mongoose.Schema({
  username: String,
  password: String
});

const Login = mongoose.model('Login', LoginSchema);

// Add a root route for the homepage to avoid "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Welcome to the MEAN Stack Application!');
});

// Example route for login (use proper authentication in production)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username, password });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error during login' });
  }
});

// Route to fetch all users (if needed)
app.get('/users', async (req, res) => {
  try {
    const users = await Login.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
