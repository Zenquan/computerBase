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