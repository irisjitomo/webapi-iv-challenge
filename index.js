const express = require('express')
require('dotenv').config()

const server = express()


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
    res.status(200).json({ message: "hello its working"})
})


const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(` listening on port: ${port}`)
    console.log(process.env.PORT)
})
 



