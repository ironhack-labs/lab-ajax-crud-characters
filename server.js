const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// ...other server configurations

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});