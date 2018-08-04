navicat 连接mysql 8.0出现Client does not support authentication protocol 解决方法

1.先通过命令行进入mysql的root账户：

```
mysql -uroot -p 
```
![](./images/mysql01.png)

2.修改加密方式：

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
```
![](./images/mysql02.png)

3.修改密码：

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '000000';
```

![](./images/mysql03.png)

蓝色区域为需要设置的密码

4.刷新：

```
FLUSH PRIVILEGES;
```
![](./images/mysql04.png)


数据库语言：SQL

增
    INSERT INTO 表 (自动列表) VALUES(值);

    INSERT INTO user_table (username, password, online) VALUES('wangwu', '987654', 0);
删
    DELETE FROM 表 WHERE 条件
    DELETE FROM user_table WHERE ID>3;

改
    UPDATE 表 SET 字段=新值, ... WHERE 条件
    UPDATE user_table SET password='11111' WHERE ID=2;

查  SELECT 字段列表 FROM 表 WHERE 条件
    SELECT username, online FROM user_table WHERE ID=1;
（CURD）

node
```js
const mysql = require('mysql');
//连接
//连接池
let db = mysql.createPool({'host': 'localhost','user': 'root', 'password': '000000', 'database': '20180803'});
//查询
db.query('SELECT * FROM user_table', function(data, error){
    if(error){
        console.log(error);
    }else{
        console.log(data)
    }
})
```



