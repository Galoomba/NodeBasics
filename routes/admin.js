const express =require ('express')
const router = express.Router()

//using the use function to init logic 
// the @next prama recive a function that will be send to the use function after that one 
router.get('/dock',(request,response,next)=>{
    response.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')//use express send methode to send html response 
    // we never use next here as they are indpendent endpoints 
 })
   
 //app.post and app.get are the same as app.use but to spicify the method wither post or get
 router.post('/product',(request,response,next)=>{
    console.log(request.body)
    response.redirect('/')
 })


module.exports =router;