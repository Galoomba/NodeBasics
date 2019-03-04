/**
 * 
 * create a server for handling http requests 
 */

//import the Express.js module
const express = require('express')
// import a body parser to parse respond body 
const podyParser=require('body-parser')
// init a express object handling creating server logic 
const app = express()
//add the parser to parse urlencodes 
app.use(podyParser.urlencoded())
//using the use function to init logic 
// the @next prama recive a function that will be send to the use function after that one 
app.use('/dock',(request,response,next)=>{
   response.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')//use express send methode to send html response 
   // we never use next here as they are indpendent endpoints 
})
app.use('/product',(request,response,next)=>{
   console.log(request.body)
})
app.use('/',(request,response,next)=>{
   response.send('<h1> ON RESPONSE!! </h1>')//use express send methode to send html response 
})

//init the server, Now we have no need for requiring http module 
app.listen(3000)