var mysql = require('mysql2')

export class Database {

  /** Singleton pattern */
  private static database: Database

  /** Get singletin instance of the database */
  public static get(): Database {
    if (!Database.database)
      Database.database = new Database()
    return this.database
  }

  /** Host of the database to connect to */
  static hostname: string = process.env.DB_HOST || "localhost"

  /** User of the database to connect with */
  static user: string = process.env.DB_USER || "bible_user"

  /** Password of the database to connect with */
  static password: string = process.env.DB_PASSWORD || "docker"

  /** Database name */
  static dbname: string = process.env.DB_DATABASE || "bible"

  /** Connection limit to the database pool */
  static connectionLimit: number = 20

  /** Queue limit to the database pool, TODO don't understand */
  static queueLimit: number = 0

  /** Time out for sql query : 40 seconds*/
  static timeout: number = 40000

  /** Database object connection */
  private pool: any

  /** Pool Promise object for async database call */
  private poolPromise: any

  /** Connected status flag */
  private connected: boolean = false

  private constructor() {

    // Create MySQL Database Pool connection 
    this.pool = mysql.createPool({
      host: Database.hostname,
      user: Database.user,
      password: Database.password,
      database: Database.dbname,
      waitForConnections: true,
      connectionLimit: Database.connectionLimit,
      queueLimit: Database.queueLimit
    })
    this.poolPromise = this.pool.promise()
    this.connected = true
  }

  /**
   * Is the database pool is connected
   */
  public isConnected(): boolean {
    return this.connected
  }

 /**
   * Run a simple sql query 
   * @param sql 
   */
  public async run(sql: string) {
    try {
      await this.poolPromise.query(sql);
    } catch (error) {
      throw ("SQL query failed : " + sql + ". Error is : " + error)
    }
  }

  /**
   * Query the input syntax to the database with input parameters if required.
   * All parameters can be placed with the following caracter : "?" 
   * ex: queryParameters( "select ? from ?", ["pasta", "plates"] )
   * @param sql query syntax
   * @param parameters the parameters of the sql query
   * @returns 
   *  An array with 
   */
  public async query(sql: string, parameters?: Array<string>): Promise<Array<any>> {
    try {
      const [rows, fields] = await this.poolPromise.query(sql, parameters)
      return [rows, fields];
    } catch (error) {
      throw ("SQL query failed : " + sql + " with parameters : " + parameters + ". Error is : " + error)
    }
  }

  /**
 * Select SQL Query the input syntax to the database with input parameters if required.
 * All parameters can be placed with the following caracter : "?" 
 * ex: queryParameters( "select ? from ?", ["pasta", "plates"] )
 * @param sql query syntax
 * @param parameters the parameters of the sql query
 * @returns An Array of Map<Field, Value>
 */
  public async select(sql: string, parameters?: Array<string>): Promise<Array<Map<string, string>>> {
    try {
      const [rows, fields] = await this.query(sql, parameters)
      let out: Array<Map<string, string>> = new Array()
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i]
        let map: Map<string, string> = new Map()
        for (let j = 0; j < fields.length; j++)
          map.set(fields[j].name, row[fields[j].name])
        out.push(map)
      }
      return out
    } catch (error) {
      throw ("SQL select query failed : " + error)
    }
  }

  /**
   * Execute callback function within the same transaction
   * @param callback transaction operations function with connection as input parameter
   */
  public async transaction(callback: Function) {

    this.pool.getConnection(async (err: any, connection: any) => {
      await connection.promise().query("START TRANSACTION")
      try {

        await callback(connection)
        await connection.promise().query("COMMIT")

      } catch (err) {

        await connection.promise().query("ROLLBACK")
        throw err

      } finally {
        connection.release()
      }
    });
  }
}
