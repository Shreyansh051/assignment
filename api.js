const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// In-memory array to store user data
let users = [
  { id: 1, name: 'Alice', createdOn: new Date(), gender: 'female', dob: '1990-01-01', city: 'New York', state: 'NY', pincode: '10001', modifiedOn: new Date() },
  { id: 2, name: 'Bob', createdOn: new Date(), gender: 'male', dob: '1995-03-15', city: 'Los Angeles', state: 'CA', pincode: '90001', modifiedOn: new Date() }
];

// Middleware to parse request body as JSON
app.use(bodyParser.json());

// GET /users - Return list of all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const { name, gender, dob, city, state, pincode } = req.body;
  const id = users.length + 1;
  const createdOn = new Date();
  const modifiedOn = createdOn;
  const user = { id, name, createdOn, gender, dob, city, state, pincode, modifiedOn };
  users.push(user);
  res.json(user);
});

// PUT /users/:userId - Update an existing user
app.put('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const { name, gender, dob, city, state, pincode } = req.body;
  const user = users.find(user => user.id === userId);
  if (user) {
    user.name = name || user.name;
    user.gender = gender || user.gender;
    user.dob = dob || user.dob;
    user.city = city || user.city;
    user.state = state || user.state;
    user.pincode = pincode || user.pincode;
    user.modifiedOn = new Date();
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE /users/:userId - Delete an existing user
app.delete('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('User API server listening on port 3000');
});
