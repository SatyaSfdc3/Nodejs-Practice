var http = require("http");
var first_module = require("./first_module");
var db_config = require("./db_config");

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":'text/plain'});
    res.write(first_module.my_fun()+ "/n");
    res.write(db_config.db_details.db_user + "..." +
               db_config.db_details.db_password + "..." +
                db_config.connectionLimit + "..."+
                  db_config.db_details.debug);
    res.end();
}).listen(4040);
console.log('second server listening the port no.4040 ');

