var https = require('https');
var stringBuffer = "";
function getAndPrintHTML () {
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function(response){
    //setting the encoding of recieved data
    response.setEncoding('utf8');
    //using 'data' to recieve and logging the recieved chunks to the console
    response.on('data', function(data){
      stringBuffer += data;
    });
    response.on('end',function(){console.log(stringBuffer);} )
  });
  
} 

getAndPrintHTML();
