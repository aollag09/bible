import { SQLUtils } from "../../utils/SQLUtils";
import { Database } from "../database/database";
import { Version } from "../version/version_pb";
import { Scripture, Scriptures } from "./scriptures_pb";

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

    /**
     * Retrieve all the verses within the two identifiers
     * @param from 
     * @param to 
     */
    public async withinId(from: number, to: number): Promise<Scriptures> {
        let sql = this.sqlSelectVerse() +
            ` where bible.id between ` + from + ' and ' + to
        let rows = await this.database.select(sql)
        return this.extractScriptures(rows)
    }

    /**
     * Retrieve all the verses within the two identifiers as String
     * @param from 
     * @param to 
     */
    public async withinIdS(from: string, to: string): Promise<Scriptures> {
        let sql = this.sqlSelectVerse() +
            ` where bible.id between ` + SQLUtils.quote(from) + ' and ' + SQLUtils.quote(to)
        let rows = await this.database.select(sql)
        return this.extractScriptures(rows)
    }

    /**
     * Retrieve all the verses within a book
     * @param book 
     */
    public async withBook(book: number): Promise<Scriptures> {
        let sql = this.sqlSelectVerse() +
            ` where bible.b = ` + book
        let rows = await this.database.select(sql)
        return this.extractScriptures(rows)
    }


    /**
     * Retrieve all the verses within a book and a chapter number
     * @param book 
     * @param chapter
     */
    public async withBookAndChapter(book: number, chapter: number): Promise<Scriptures> {
        let sql = this.sqlSelectVerse() +
            ` where bible.b = ` + book + ` and bible.c = ` + chapter
        let rows = await this.database.select(sql)
        return this.extractScriptures(rows)
    }

    /** Scripture selectable */
    private sqlSelectVerse(): string {
        return `
        select bible.* from ` + this.version.getTable() + ` bible`
    }

    /** Extract scripture object */
    private extractSrcipture(row: Map<string, string>): Scripture {
        let scripture = new Scripture()
        scripture.setId(row.get("id")!.toString())
        scripture.setBook(parseInt(row.get("b")!))
        scripture.setChapter(parseInt(row.get("c")!))
        scripture.setVerse(parseInt(row.get("v")!))
        scripture.setScripture(row.get("t")!)
        return scripture
    }

    private extractScriptures(rows: Array<Map<string, string>>): Scriptures {
        let scriptures = new Scriptures()
        rows.forEach(row => {
            let scripture = this.extractSrcipture(row)
            scriptures.getScripturesList().push(scripture)
        });
        return scriptures
    }
}
