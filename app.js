const ws = require("ws")
// 定义websocket服务器
const Server = ws.Server;
const wsServer = new Server({ port: 8085 });
const wsServer2 = new Server({ port: 8084 });
// 定义连接到的websocket集合
let socketSet = new Set();
// 连接
wsServer.on('connection', websocket => {
    socketSet.add(websocket)
    console.log('connection');
    //接受消息
    websocket.on('message', (msg) => {
        console.log('received:', msg);
        console.log('received: %s', msg);
        console.log('length', msg.length);
    })
    websocket.send('我收到消息了')
});
wsServer2.on('connection', (websocket) => {
    socketSet.add(websocket);
    console.log('connection2')
})
