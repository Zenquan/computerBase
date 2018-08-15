## REST API
实验目的
>熟悉 REST API 的基本用法

操作步骤

（1） 命令行进入rest-api-demo目录，执行下面的命令。
```
$ npm install -S json-server
```
（2） 在项目根目录下，新建一个 JSON 文件db.json。
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
（3） 打开package.json，在scripts字段添加一行。
```json
"scripts": {
  "server": "json-server db.json",
  "test": "..."
},
```
（4） 命令行下执行下面的命令，启动服务。
```
$ npm run server
```
（5）打开 Chrome 浏览器的 Postman 应用。依次向`http://127.0.0.1:3000/posts`、`http://127.0.0.1:3000/posts/1`发出GET请求，查看结果。

（6）向`http://127.0.0.1:3000/comments`发出POST请求。注意，数据体Body要选择x-www-form-urlencoded编码，然后依次添加下面两个字段。
```json
body: "hello world"
postId: 1
```
发出该请求后，再向http://127.0.0.1:3000/comments发出GET请求，查看结果。

（7） 向`http://127.0.0.1:3000/comments/2`发出PUT请求，数据体Body要选择`x-www-form-urlencoded`编码，然后添加下面的字段。
```
body: "hello react"
```
发出该请求后，再向`http://127.0.0.1:3000/comments`发出GET请求，查看结果。

（8）向`http://127.0.0.1:3000/comments/2`发出delete请求。

发出该请求后，再向`http://127.0.0.1:3000/comments`发出GET请求，查看结果。