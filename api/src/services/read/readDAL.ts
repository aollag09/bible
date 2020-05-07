import { Database } from "../database/database";
import { Read, Reads } from "./read_pb";
import { SQLUtils } from "../../utils/SQLUtils";


export class ReadDAL {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }


    public async withId(id: number): Promise<Read | undefined> {
        const sql = this.sqlSelectRead() +
            ` where id=` + id;
        let rows = await this.database.select(sql)
        if (rows.length === 1) {
            return this.extractRead(rows[0])
        } else
            return undefined
    }


    /**
     * Return all the read in the current book & chapter
     * @param book 
     * @param chapter 
     */
    public async withBookChapter(book: number, chapter: number) {
        let sql = this.sqlSelectRead() +
            ` where book=` + book + ' and chapter=' + chapter
        let rows = await this.database.select(sql)
        return this.extractReads(rows)
    }

    /**
     * Return all the read in the current owner
     * @param owner 
     */
    public async withOwner(owner: number) {
        let sql = this.sqlSelectRead() +
            ` where owner=` + owner
        let rows = await this.database.select(sql)
        return this.extractReads(rows)
    }


    /**
     * Put a new note in database
     * @param read 
     */
    public async putRead(read: Read) {
        let sql = this.buildSQLCreate(read)
        await this.database.transaction((connection: any) => {
            connection.query(sql)
        })
    }


    private buildSQLCreate(read: Read) {
        const values = this.buildSQLNoteValues(read)
        return SQLUtils.buildSQLCreate("note", values)
    }

    private buildSQLNoteValues(read: Read): Map<string, string> {
        let values = new Map<string, string>()

        values.set("owner", read.getOwner().toString())

        values.set("time", read.getTime().toString())

        values.set("version", read.getVersion().toString())
        values.set("chapter", read.getChapter().toString())
        values.set("book", read.getBook().toString())

        return values
    }

    private extractReads(rows: Map<string, string>[]): Reads {
        const reads = new Reads()
        rows.forEach(row => {
            const read = this.extractRead(row)
            reads.getReadsList().push(read)
        })
        return reads;
    }

    private extractRead(row: Map<string, string>): Read {
        let read = new Read()

        read.setId(parseInt(row.get("id")!))
        read.setOwner(parseInt(row.get("owner")!))

        read.setVersion(parseInt(row.get("version")!))
        read.setBook(parseInt(row.get("book")!))
        read.setChapter(parseInt(row.get("chapter")!))

        read.setTime(parseInt(row.get("time")!))

        return read;
    }

    private sqlSelectRead(): string {
        return `select * from bible_read`
    }


}