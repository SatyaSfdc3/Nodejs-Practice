var http = require("http");
var server = http.createServer(my_fun);
function my_fun(req, res){
    res.writeHead(200,{"content-type":'text/html'});
    res.write("Welcome to NodeJs technology");
    res.end();

};

server.listen(4040);
console.log("server listening the port no 4040");
