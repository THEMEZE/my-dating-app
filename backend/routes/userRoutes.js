const express = require('express');
const router = express.Router();

// Mock database for users
let users = [];

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.status(200).send({ message: 'User signed up successfully' });
});

module.exports = router;
