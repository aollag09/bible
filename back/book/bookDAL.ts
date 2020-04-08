import { Book, GenreMap, Genre } from "./book_pb";
import { Database } from "../database/database";
import { SQLUtils } from "../utils/SQLUtils";

export class BookDAL {

    private database: Database;

    constructor(db: Database) {
        this.database = db;
    }

    private sqlSelectBook(): string {
        return `
        select
            ke.b,
            ke.n,
            ke.t,
            ke.g,
            kae.a
        from
            key_english ke
        left join 
            key_abbreviations_english kae on ke.b = kae.b`
    }

    /**
     * List all book in database
     */
    public async list(): Promise<Book[]> {
        let books: Array<Book> = Array()
        let rows = await this.database.select(this.sqlSelectBook())
        books = this.extractBooks(rows)
        return books;
    }

    /**
     * Retrieve the book with the specified id
     * @param id 
     */
    public async withId(id: number): Promise<Book | undefined> {
        const row = await this.database.select([
            this.sqlSelectBook(),
            "where",
            "ke.b",
            "=",
            id
        ].join(" "))
        if (row.length > 0)
            return this.extractBooks(row)[0]
        else
            return undefined
    }

    public async withName(name: string): Promise<Book | undefined> {
        // Query book id with this name
        let query = `
        select
            ke.b
        from
            key_english ke
        left join 
            key_abbreviations_english kae on ke.b = kae.b
        where 
            lower(kae.a) = lower(` + SQLUtils.quote(name) + `)`

        const row = await this.database.select(query)
        if (row.length == 1) {
            let id: number = parseInt(row[0].get("b")!)
            return this.withId(id)
        } else
            return undefined
    }

    private extractBooks(rows: Map<string, string>[]): Book[] {
        let books: Map<Number, Book> = new Map()
        rows.forEach(row => {
            let bookId = parseInt(row.get("b")!)
            if (!books.has(bookId)) {
                // Create the current book
                let book = new Book()
                book.setId(bookId)
                this.extractGenreFromNumber(book, parseInt(row.get("g")!))
                book.setName(row.get("n")!)
                book.setIsnt(row.get("t")! == "NT")
                book.getAbbreviationsList().push(row.get("a")!)
                books.set(bookId, book)
            } else {
                // Book already created, just add the new abbreviation
                let book = books.get(bookId)
                book!.getAbbreviationsList().push(row.get("a")!)
            }
        });
        return Array.from(books.values())
    }

    private extractGenreFromString(book: Book, genre: string) {
        if (genre == "Law")
            book.setGenre(Genre.LAW)
        else if (genre == "History")
            book.setGenre(Genre.HISTORY)
        else if (genre == "Wisdom")
            book.setGenre(Genre.WISDOM)
        else if (genre == "Prophets")
            book.setGenre(Genre.PROPHETS)
        else if (genre == "Gospels")
            book.setGenre(Genre.GOSPELS)
        else if (genre == "Acts")
            book.setGenre(Genre.ACTS)
        else if (genre == "Epistles")
            book.setGenre(Genre.EPISTLES)
        else if (genre == "Apocalyptic")
            book.setGenre(Genre.APOCALYPTIC)
        else
            book.setGenre(Genre.UNKNOWN)
    }

    private extractGenreFromNumber(book: Book, genre: number) {
        if (genre == 1)
            book.setGenre(Genre.LAW)
        else if (genre == 2)
            book.setGenre(Genre.HISTORY)
        else if (genre == 3)
            book.setGenre(Genre.WISDOM)
        else if (genre == 4)
            book.setGenre(Genre.PROPHETS)
        else if (genre == 5)
            book.setGenre(Genre.GOSPELS)
        else if (genre == 6)
            book.setGenre(Genre.ACTS)
        else if (genre == 7)
            book.setGenre(Genre.EPISTLES)
        else if (genre == 8)
            book.setGenre(Genre.APOCALYPTIC)
        else
            book.setGenre(Genre.UNKNOWN)
    }

}