const express =require ('express')
const path =require('path')
const rootDir =require('../utils/path')

const router = express.Router()

//using the use function to init logic 
// the @next prama recive a function that will be send to the use function after that one 
router.get('/product',(request,response,next)=>{
response.sendFile(path.join(rootDir,"views","add-product.html"))    // we never use next here as they are indpendent endpoints 
 })
   
 //app.post and app.get are the same as app.use but to spicify the method wither post or get
 router.post('/product',(request,response,next)=>{
    console.log(request.body)
    response.redirect('/')
 })


module.exports =router;