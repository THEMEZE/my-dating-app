const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
