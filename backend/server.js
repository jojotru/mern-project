require('dotenv').config()

const express = require('express')


// create express app
const app = express() 

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes 
app.get('/', (req, res) => { 
    res.json({mssg: 'Welcome to the app'})
})

// listen for request 
app.listen(process.env.PORT, () => {
    console.log('listening 4000!')
})

process.env