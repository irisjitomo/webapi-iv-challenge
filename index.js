const express = require('express')
require('dotenv').config()

const server = express()

const friends = [
    {
        "name" : "lesly"
    },
    {
        "name" : "lovely"
    },
    {
        "name" : "lowbrow"
    },
    {
        "name" : "lazlo"
    },
];


//custome middleWares
function logger(req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method}`)
    next();
};
// midleWares
server.use(express.json())
server.use(logger)
//requests

server.get('/', (req, res) => {
    res.status(200).json({ message: "hello its working already"})
})

server.get('/friends', (req, res) => {
    res.status(200).json(friends)
})

server.post('/friends', (req, res) => {
    if (req.body.name) {
        friends.push(req.body)
        res.status(201).json(req.body)
    } else {
        res.status(404).json({message: 'must contain name'})
    }
    
})


const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(` listening on port: ${port}`)
    console.log(process.env.PORT)
})
 



