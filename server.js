/**
 * 
 * create a server for handling http requests 
 */

//import the Express.js module
const express = require('express')
// import a body parser to parse respond body 
const podyParser=require('body-parser')
const path =require('path')
const rootDir =require('./utils/path')
//Require a router objects from the routers folder
const adminRouter =require('./routes/admin')
const shopRouter =require('./routes/shop')

const app = express()
//add the parser to parse urlencodes 
app.use(podyParser.urlencoded({extended:false}))
//make a static dir to contian our css files 
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRouter) 
app.use(shopRouter) 
//add 404 error when enter wrong endpoint
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
//init the server, Now we have no need for requiring http module 
app.listen(3000)