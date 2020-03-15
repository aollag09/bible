var mysql = require('mysql');

export class Database {

  /** Host of the database to connect to */
  static hostname: String = "localhost";

  /** User of the databse to connect with */
  static user: String = "bible_user";

  /** Password of the database to connect with */
  static password: String = "docker";

  /** Time out for sql query : 40 seconds*/
  static timeout: number = 40000;

  /** Database object connection */
  private db: any;

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
   * Query the input syntax to the database with input parameters if required.
   * All parameters can be placed with the following caracter : "?" 
   * ex: queryParameters( "select ? from ?", ["pasta", "plates"] )
   * @param syntax query syntax
   * @returns the result of the query
   */
  public query(syntax: String): String {
    var output: String = "";

    // Extract parameters from input arguments
    var parameters = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      parameters[i - 1] = arguments[i];

    // Run the query
    this.db.query(
      {
        sql: syntax,
        timeout: Database.timeout
      },
      parameters,
      function (error: any, results: String, fields: String) {
        if (error)
          throw error;
        else
          output = results;
      });
    return output;
  }

  /** End the database connection */
  public end(): void {
    this.db.end(function (error: any) {
      if (error)
        throw error;
    });
    this.connected = false;
  }

}
