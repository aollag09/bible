import { Database } from "../database/database";

/**
 * Data Access Layer for availables Bible Versions
 */
export class VersionDAL {

    /** Version table */
    private static TABLE_VERSION: String = "bible_version_key";

    /** Default english translation */
    public static DEFAULT_ENGLISH: String = "ASV"

    /** Database query object */
    private database: Database;

    constructor(){
        this.database = new Database()
    }

    public list():any {
        //this.database.query("select ? from ?", ["*", VersionDAL.TABLE_VERSION],)
    }

}