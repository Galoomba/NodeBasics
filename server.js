/**
 * 
 * create a server for handling http requests 
 */


 // import the http module 
 const http=require('http')

 //creating the server object
 //the arrow function has to prama 
 // @ request - handle the server requests 
 // @ response - Handle the server response
 const server=http.createServer((request,response)=>{
    console.log(request)
 })

 //keep the server on and listening to requests 
 // @prama port number -- localhost 
 server.listen(3000,'localhost')