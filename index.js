const express = require('express')
const app = express()
const port = process.env.PORT || 3001

// Enable CORS for all routes and domains
app.use(cors({
    origin: '*', // Allow all origins or specify specific origins like ['https://yourdomain.com']
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the methods you need
}));

app.use(express.static("public"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
