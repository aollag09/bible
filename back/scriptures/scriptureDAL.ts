import { Database } from "../database/database";
import { Version } from "../version/version_pb";
import { Scripture } from "./scriptures_pb";
import { VersionSchema } from "../version/versionSchema";
import { SQLUtils } from "../utils/SQLUtils";

/**
 * Scriptures object to enable query over scriptures data
 */
export class ScriptureDAL {

    /** Database query object */
    private database: Database

    /** Bible version to fetch */
    private version: Version;

    /** Build scripture object from a specific version */
    constructor(db: Database, v: Version) {
        this.database = db
        this.version = v
    }

    /** 
     * Return the associated verse in the specific traduction
     * @param id String identifier of the scripture
     */
    public async withIdS(id: string): Promise<Scripture | undefined> {
        let sql = this.sqlSelectVerse() +
            ` where bible.id = ` + SQLUtils.quote(id)
        let row = await this.database.select(sql)
        if (row.length == 1)
            return this.extractSrcipture(row[0])
        else
            return undefined
    }

    /** 
     * Return the associated verse in the specific traduction
     * @param id Number identifier of the scripture
     */
    public async withId(id: number): Promise<Scripture | undefined> {
        let sql = this.sqlSelectVerse() +
            ` where bible.id = ` + id
        let row = await this.database.select(sql)
        if (row.length == 1)
            return this.extractSrcipture(row[0])
        else
            return undefined
    }

    private sqlSelectVerse(): string {
        return `
        select bible.* from ` + VersionSchema.getTableName(this.version) + ` bible`
    }

    private extractSrcipture(row: Map<string, string>): Scripture {
        let scripture = new Scripture()
        scripture.setId(parseInt(row.get("id")!))
        scripture.setBook(parseInt(row.get("b")!))
        scripture.setChapter(parseInt(row.get("c")!))
        scripture.setVerse(parseInt(row.get("v")!))
        scripture.setScripture(row.get("t")!)
        return scripture
    }

}
