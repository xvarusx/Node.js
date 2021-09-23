var fs = require("fs");

var filename = process.argv[2];

file = fs.readFile(filename,'utf-8',((err, data) => {
    if (err){return console.log(err)}
    else{ contents = data.toString();
    console.log(contents.split("\n").length - 1);}

}));




