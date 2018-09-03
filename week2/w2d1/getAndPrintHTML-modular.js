var https = require('https');

function getAndPrintHTML (options) {
  var stringBuffer = "";

  https.get(options, function(response){
    //setting the encoding of recieved data
    response.setEncoding('utf8');
    //using 'data' to recieve and logging the recieved chunks to the console
    response.on('data', function(data){
      stringBuffer += data;
    });
    response.on('end',function(){console.log(stringBuffer);} )
  });
  
} 
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};
getAndPrintHTML(requestOptions);
