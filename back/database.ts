var mysql = require('mysql');

/**
 * Connect to the MySQL Database
 */
var db = mysql.createConnection({
  host: "localhost",
  user: "bible_user",
  password: "docker"
});

db.connect(function(err: any) {
  if (err) throw err;
  console.log("Connection successfull with the bible database");
});

/**
 * @returns true if it is connected to the database
 */
function isConnected(): boolean {
  return db.isConnected();
}

/**
 * Query the input syntax to the database
 * @param syntax query syntax
 * @returns the result of the query
 */
function query(syntax: String):String {
  return db.query(syntax);
}

/**
 * Query the input syntax to the database with the associated input parameters
 * All parameters can be placed with the following caracter : "{}" 
 * ex: queryParameters( "select {} from {}", "pasta", "plates")
 * @param syntax query syntax
 * @param parameters parameters values to remplace in the query syntax
 * @returns the result of the query
 */
function queryParameters(syntax: String){
  var query:String = syntax;
  for (var i = 1; i < arguments.length; i++) {
    query.replace("{}", arguments[i]);
  }
}



