/**
 * 
 * create a server for handling http requests 
 */


// import the http module 
const http = require('http')
//import the Express.js module
const express = require('express')
// init a express object handling creating server logic 
const app = express()

//using the use function to init logic 
// the @next prama recive a function that will be send to the use function after that one 
app.use( (request,response,next)=>{
   console.log('hii')
   next()// Allow the request to travel to the next middleware in line 
})

app.use((request,response,next)=>{
   console.log('hi back')
})
const server = http.createServer(app)
   //creating server logic 

   
//keep the server on and listening to requests 
// @prama port number -- localhost 
server.listen(3001, 'localhost')