var fs = require("fs");
filepath = process.argv.slice(2)[0];

fs.readFile(filepath,function(err,data){
  if (err) {
    return console.error(err);
  }
  console.log("Async read: "+ data.toString());
});
