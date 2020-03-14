var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bible_user",
  password: "docker"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
