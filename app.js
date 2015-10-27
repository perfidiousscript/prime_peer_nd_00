var http = require('http');
var product = require('./product')

http.createServer(function(require,response){
    response.writeHead(200);
    response.write(product.string() + product.money());
    response.end();
}).listen(8000);
