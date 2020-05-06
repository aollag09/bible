import { Database } from "../database/database";
import { Note, Notes } from "./note_pb";
import { SQLUtils } from "../../utils/SQLUtils";


export class NoteDAL {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    /**
     * Return the note with the iput id
     * @param id 
     */
    public async withId(id: number): Promise<Note | undefined> {
        let sql = this.sqlSelectNote() +
            ` where id = ` + id;
        let rows = await this.database.select(sql)
        if (rows.length == 1) {
            return this.extractNote(rows[0])
        }
        else
            return undefined;
    }

    /**
     * Return all the notes in the current bool & chapter
     * @param book 
     * @param chapter 
     */
    public async withBookChapter(book: number, chapter: number) {
        let sql = this.sqlSelectNote() +
            ` where book=` + book + ' and chapter=' + chapter
        let rows = await this.database.select(sql)
        return this.extractNotes(rows)
    }

    /** Delete tag
     * @param id 
     * @param tagCase 
     */
    public async deleteNote(id: number) {
        let sql = `delete from note where id = ` + id
        await this.database.transaction((connection: any) => {
            connection.query(sql)
        })
    }

    /**
     * Put a new note in database
     * @param note 
     */
    public async putNote(note: Note) {
        let sql = this.buildSQLCreate(note)
        await this.database.transaction((connection: any) => {
            connection.query(sql)
        })
    }

    /**
     * Put notes in database
     * @param notes 
     */
    public async putNotes(notes: Notes) {
        await this.database.transaction((connection: any) => {
            notes.getNotesList().forEach(note => {
                const sql = this.buildSQLCreate(note)
                connection.query(sql)
            })
        })
    }


    private buildSQLCreate(note: Note) {
        const values = this.buildSQLNoteValues(note)
        return SQLUtils.buildSQLCreate("note", values)
    }

    private buildSQLNoteValues(note: Note): Map<string, string> {
        let values = new Map<string, string>()

        values.set("owner", note.getOwner().toString())

        values.set("created", note.getCreated().toString())
        values.set("modified", note.getModified().toString())

        values.set("start", note.getStart())
        values.set("end", note.getEnd())

        values.set("chapter", note.getChapter().toString())
        values.set("book", note.getBook().toString())

        values.set("type", note.getType())
        values.set("note", note.getNote())

        return values
    }

    private extractNotes(rows: Map<string, string>[]): Notes {
        const notes = new Notes()
        rows.forEach(row => {
            const note = this.extractNote(row)
            notes.getNotesList().push(note)
        })
        return notes;
    }

    private extractNote(row: Map<string, string>): Note {
        let note = new Note()

        note.setId(parseInt(row.get("id")!))
        note.setOwner(parseInt(row.get("owner")!))

        note.setCreated(parseInt(row.get("created")!))
        note.setModified(parseInt(row.get("modified")!))

        note.setStart(row.get("start")!.toString())
        note.setEnd(row.get("end")!.toString())

        note.setBook(parseInt(row.get("book")!))
        note.setChapter(parseInt(row.get("chapter")!))

        note.setType(row.get("type")!.toString())

        note.setNote(row.get("note")!.toString())

        return note;
    }

    private sqlSelectNote(): string {
        return `select * from note`
    }

}