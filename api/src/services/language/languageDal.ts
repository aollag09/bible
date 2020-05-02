import { Database } from "../database/database";
import { Language, Languages } from "./language_pb";


export class LanguageDAL {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public async english(): Promise<Language> {
        const english = await this.withName("english");
        if (english)
            return english;
        else
            throw Error("Failed to fecth english language")
    }


    public async french(): Promise<Language> {
        const french = await this.withName("french");
        if (french)
            return french;
        else
            throw Error("Failed to fecth french language")
    }

    public async spanish(): Promise<Language> {
        const spanish = await this.withName("spanish");
        if (spanish)
            return spanish;
        else
            throw Error("Failed to fecth spanish language")
    }

    public async list(): Promise<Languages> {
        const rows = await this.database.select(this.sqlSelectLanguage())
        const languages = new Languages()
        rows.forEach(row => {
            languages.getLanguagesList().push(this.extractLanguage(row))
        });
        return languages;
    }

    public async withId(id: number): Promise<Language | undefined> {
        const row = await this.database.select(
            this.sqlSelectLanguage() + " where id = " + id
        )
        if (row.length === 1)
            return this.extractLanguage(row[0])
        else return undefined
    }

    public async withName(name: string): Promise<Language | undefined> {
        const row = await this.database.select(
            this.sqlSelectLanguage() + " where name = \'" + name + "\'"
        )
        if (row.length === 1)
            return this.extractLanguage(row[0])
        else return undefined
    }


    private sqlSelectLanguage(): string {
        return `
            select * from bible_language`
    }

    private extractLanguage(row: Map<string, string>): Language {
        const language = new Language()
        language.setId(parseInt(row.get("id")!))
        language.setName(row.get("name")!)
        return language;
    }
}