const express = require('express');
const cors = require('cors');
const courses = require('./courses.json');

const app = express();

app.use(cors());

app.get('/courses', (req, res) => {
  res.json(courses);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
