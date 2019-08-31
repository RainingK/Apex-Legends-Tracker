const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

// Load env
dotenv.config({path: './config.env'})

const port = process.env.PORT || 3000

// Dev Logging
if(process.env.NODE_env === 'development') {
    app.use(morgan('dev'))
}

// Profile route
app.use('/api/v1/profile', require('./routes/profile'))

// Handle Production
if (process.env.NODE_env === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get('/.*/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

// Listens to the port and runs the server.
app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})