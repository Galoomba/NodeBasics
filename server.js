/**
 * 
 * create a server for handling http requests 
 */


// import the http module 
const http = require('http')
//import the routes module
const routes= require('./routes')
//creating the server object
//the arrow function has to prama 
// @ request - handle the server requests 
// @ response - Handle the server response

const server = http.createServer(routes.handler)
   //calling the routes.handler function ^^

   
//keep the server on and listening to requests 
// @prama port number -- localhost 
server.listen(3001, 'localhost')