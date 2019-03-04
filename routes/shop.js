const express =require ('express')
const router = express.Router()

router.use('/',(request,response,next)=>{
    response.send('<h1> ON RESPONSE!! </h1>')//use express send methode to send html response 
 })
 

 module.exports =router;