/**
 * 
 * create a server for handling http requests 
 */

//import the Express.js module
const express = require('express')
// init a express object handling creating server logic 
const app = express()

//using the use function to init logic 
// the @next prama recive a function that will be send to the use function after that one 
app.use('/dock',(request,response,next)=>{
   console.log('hi back')
   response.send('<h1> ON Dock!! </h1>')//use express send methode to send html response 
   // we never use next here as they are indpendent endpoints 
})
app.use('/',(request,response,next)=>{
   console.log('hi back')
   response.send('<h1> ON RESPONSE!! </h1>')//use express send methode to send html response 
})

//init the server, Now we have no need for requiring http module 
app.listen(3000)