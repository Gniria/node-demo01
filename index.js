var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.11.10',
  port: 3306,
  user: 'admin',
  password: 'admin!@#',
  database: 'nbugs-agent-management'
});

connection.connect();
connection.query("select * from am_user_info limit 0, 10", function(err, rows, fields){
  if(err){
    console.log("Error while performing query:", err);
  }else{
    console.log("query result:", rows);
  }
});
