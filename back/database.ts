var mysql = require('mysql');

export class Database {

  /** Host of the database to connect to */
  static hostname: String = "localhost";

  /** User of the databse to connect with */
  static user: String = "bible_user";

  /** Password of the database to connect with */
  static password: String = "docker";

  /** Database name */
  static database: String = "bible";

  /** Time out for sql query : 40 seconds*/
  static timeout: number = 40000;

  /** Database object connection */
  private db: any;

  /** Connected status flag */
  private connected: boolean = false;

  constructor() {
    this.connect();
  }

  /** Connect to the database */
  public connect(): void {
    if (!this.connected) {
      // Create MySQL Database connection 
      this.db = mysql.createConnection({
        host: Database.hostname,
        user: Database.user,
        password: Database.password,
        database: Database.database
      });
      // Connect to the MySQL Database 
      this.db.connect(function isConnected(error: any) {
        if (error)
          throw error;
      });
      this.connected = true;
    }
  }

  /**
   * @returns true if it is connected to the database
   */
  public isConnected(): boolean {
    return this.connected;
  }

  /**
   * Run an sql query without output
   * @param sql the sql query
   */
  public run(sql: String): void {
    // Run the query
    this.db.query(
      {
        sql: sql,
        timeout: Database.timeout
      },
      [],
      function (error: any, results: Array<Object>, fields: Array<Object>) {
        if (error) throw error;
      }
    );
  }

  /**
   * Run an sql query without parameters
   * @param sql the sql query
   * @param output the ouput function with fields (error, result, fields)
   */
  public query(sql: String, output: Function): void {
    // Run the query
    this.db.query(
      {
        sql: sql,
        timeout: Database.timeout
      },
      [],
      output
    );
  }

  /**
   * Query the input syntax to the database with input parameters if required.
   * All parameters can be placed with the following caracter : "?" 
   * ex: queryParameters( "select ? from ?", ["pasta", "plates"] )
   * @param sql query syntax
   * @param parameters the parameters of the sql query
   * @param output output function with the fields (error, result, fields)
   */
  public parametrizedQuery(sql: String, parameters: Array<String>, output: Function): void {

    // Run the query
    this.db.query(
      {
        sql: sql,
        timeout: Database.timeout
      },
      parameters,
      output
    );
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
