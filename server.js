/**
 * 
 * create a server for handling http requests 
 */


 // import the http module 
 const http=require('http')
 const fs=require('fs')
 //creating the server object
 //the arrow function has to prama 
 // @ request - handle the server requests 
 // @ response - Handle the server response
 const server=http.createServer((request,response)=>{

    
   const url =request.url;
   const method= request.method;

   //if we are at the root url
   if (url === '/') {
    response.write('<html>');
    response.write('<head><title>Enter Message</title><head>');
    response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    response.write('</html>');
    return response.end();
  }
  //if we are at the /message and the method is POST
  if (url === '/message' && method === 'POST') {
      //colocting chunks into the body array
    const body = [];
    //on data send add the chunks to the array 
    request.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // on stream end concat the chunks by using buffer.concat 
    //and write them to file 
    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    response.statusCode = 302;
    response.setHeader('Location', '/');
    return response.end();
  }
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My First Page</title><head>');
  response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  response.write('</html>');
  response.end();
 })

 //keep the server on and listening to requests 
 // @prama port number -- localhost 
 server.listen(3000,'localhost')