/**
 * 
 * create a server for handling http requests 
 */

//import the Express.js module
const express = require('express')
// import a body parser to parse respond body 
const podyParser=require('body-parser')

//Require a router objects from the routers folder
const adminRouter =require('./routes/admin')
const shopRouter =require('./routes/shop')

const app = express()
//add the parser to parse urlencodes 
app.use(podyParser.urlencoded({extended:false}))
app.use(adminRouter) 
app.use(shopRouter) 
//add 404 error when enter wrong endpoint
app.use((req,res,next)=>{
   res.status(404).send("<h1> 404 ERROR WRONG ENDPOINT </h1>")
})
//init the server, Now we have no need for requiring http module 
app.listen(3000)