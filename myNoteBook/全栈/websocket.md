websocket--socket.io

- sock.emit
- sock.on

1.服务端

a.先有一个http服务

引进包

```js
const http = require('http');
const io = require('socket.io');
```

开启http服务

```js
let httpServer = http.createServer();

httpServer.listen(8966);
```

b.再有一个ws服务

开启socket服务

```js
let wsSever = io.listen(httpServer);

wsSever.on('connection', function(sock){
    sock.on('a', function(...arr){
        console.log(arr);
    })
})
```

2.浏览器

a.引进库
```js
<script src="http://localhost:8966/socket.io/socket.io.js"></script>
```

b.连接

```js
let sock = io.connect('ws://localhost:8966');
document.onclick = function(){
sock.emit('a', 12, 5, 4);
}
```

websocket: 数据交互
1.性能高
2.双向-数据实时性
3.HTML5 iE9+
4.socket.io
跨域

socket.io
1.兼容
2.二进制

1.怎么用
2.聊天室
3.视频点播

Ajax跨域
jsonp

工具

后台--node
1.原生
2.框架

1.性能高  86倍
2.跟前台配合方便
3.适合前端人员入门



v8会预编译

node---小型项目 工具类  中间层
java---性能比较高，安全性能高，适合开发大型项目
php---几十个页面
.net -- 比较老的程序员

websocket
1.原生难写
2socket.io兼容

数据库
1.关系型 -- Mysql、Oracle
优点：强大（9）
缺点： 性能低（7.5）
2.文件型--SQLite
优点：简单
缺点：支撑不了庞大的应用、没法存储特别多数据
3.文档型--MogoDB
优点：直接存储对象本身
缺点：不够严谨、性能偏低（6.5）

4.空间型--坐标、位置
GIS

NoSQL:
性能（9）

Redis、memcachaed、bigtable、hypertable
hive

库--文件夹
表--文件

类型：
数字
整数 tinyint(-128~127)、int(21亿或者43亿)
浮点数 float-8位 double-308位
字符串
小字符串 varchar(255)
大字符串 text(2G)

主键（unique+index）：
1.唯一的
2.性能高


