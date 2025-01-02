const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3001

// Enable CORS for all routes and domains
app.use(cors({
    origin: '*', // Allow all origins or specify specific origins like ['https://yourdomain.com']
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the methods you need
}));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to access the JSON file
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'db.json'));
});

app.get('/products', (req, res) => {
    res.send("hello world")
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
