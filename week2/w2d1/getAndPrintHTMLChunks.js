var https = require('https');
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function(response){
    //setting the encoding of recieved data
    response.setEncoding('utf8');
    //using 'data' to recieve and logging the recieved chunks to the console
    response.on('data', function(data){
      console.log(data.toString() + '\n');
    });
  });
}

getAndPrintHTMLChunks();