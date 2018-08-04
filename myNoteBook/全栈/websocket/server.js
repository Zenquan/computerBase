const http = require('http');
const io = require('socket.io');
//1.开启http服务
let httpServer = http.createServer();

httpServer.listen(8966);

//2.开启socket服务

let wsSever = io.listen(httpServer);

wsSever.on('connection', function(sock){
    sock.on('a', function(...arr){
        console.log(arr);
    })
    // setInterval(function(){
    //     sock.emit('ttt', Math.random());
    // }, 500)
})