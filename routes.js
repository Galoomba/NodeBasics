
/**
 * Moves the routes logic into another file and export it to node modules
 * 
 */
const fs = require('fs')

const requestHandler=(request,response)=>{

  const url = request.url;
  const method = request.method;

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
    return request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      //WriteFileSync block the excution of the rest of the code until it's finish 
      // use WriteFile instead which is async
      //it recive a callback about what to excute when no error occur
      //-->fs.writeFileSync('message.txt', message);
      fs.writeFile('message.txt', message, err => {
        if (err == null) {
          response.statusCode = 302;
          response.setHeader('Location', '/');
          return response.end();
        }
      })
    });

  }
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My First Page</title><head>');
  response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  response.write('</html>');
  response.end();
}

/**
 * module.exports==> can also works with only calling exports
 */

 /**
  * Exporting single function
  * **/
 //exports=requestHandler

 /** Exporting an object key and value*/
// exports={
//     handler:requestHandler
// }

/** Another way to export */
exports.handler=requestHandler