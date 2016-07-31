var static = require('node-static');
var file = new static.Server('./');

require('http').createServer(function (request, response) {

    if (!/\./.test(request.url)) {
        request.url = '/';
    }

    console.log(request.url);
    file.serve(request, response);
}).listen(3000);

console.log("listen localhost:3000");
