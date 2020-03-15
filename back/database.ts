import { connect } from "http2";

var mysql = require('mysql');

export class Database {

  /** Host of the database to connect to */
  static hostname: String = "localhost";

  /** User of the databse to connect with */
  static user: String = "bible_user";

  /** Password of the database to connect with */
  static password: String = "docker";

  /** Database object connection */
  private db: any;

  /** Connected status flag */
  /** Connected status flag */
  private connected: boolean = false;

  constructor() {
    // Create MySQL Database connection 
    this.db = mysql.createConnection({
      host: Database.hostname,
      user: Database.user,
      password: Database.password
    });
    // Connect to the MySQL Database 
    this.db.connect(function isConnected(error: any) {
      if (error)
        throw error;
      else
        console.log("Connection is successfull with the bible database");
    });
    this.connected = true;
  }

  /**
 * @returns true if it is connected to the database
 */
  public isConnected(): boolean {
    return this.connected;
  }

  /**
   * Query the input syntax to the database
   * @param syntax query syntax
   * @returns the result of the query
   */
  public query(syntax: String): String {
    return this.db.query(syntax);
  }

  /**
   * Query the input syntax to the database with the associated input parameters
   * All parameters can be placed with the following caracter : "{}" 
   * ex: queryParameters( "select {} from {}", "pasta", "plates")
   * @param syntax query syntax
   * @param parameters parameters values to remplace in the query syntax
   * @returns the result of the query
   */
  public queryParameters(syntax: String): String {
    var parameteredSyntax: String = syntax;
    for (var i = 1; i < arguments.length; i++) {
      parameteredSyntax.replace("{}", arguments[i]);
    }
    return this.query(parameteredSyntax);
  }

  /**
   * End the database connection
   */
  public end(): void {
    this.db.end(function (error: any) {
      if (error)
        throw error;
      else
        console.log("Connection is successfull terminated");
    });
  }

}





