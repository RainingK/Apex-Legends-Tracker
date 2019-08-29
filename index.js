const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

// Load env
dotenv.config({path: './config.env'})

const port = process.env.PORT || 3000

// Profile route
app.use('/api/v1/profile', require('./routes/profile'))

// Listens to the port and runs the server.
app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})