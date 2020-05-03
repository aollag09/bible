import { Database } from "../database/database";
import { People, Peoples } from "./people_pb";
import { Language } from "../language/language_pb";

export class PeopleDAL {

    private database: Database;

    private language: Language;

    constructor(database: Database, language: Language) {
        this.database = database
        this.language = language
    }


    public async withId(id: number): Promise<People | undefined> {
        const row = await this.database.select(
            this.sqlSelectPeople() + " and id = " + id
        )
        if (row.length === 1)
            return this.extractPeople(row[0])
        else return undefined
    }

    public async withName(name: string): Promise<People | undefined> {
        const row = await this.database.select(
            this.sqlSelectPeople() + " and name = \'" + name + "\'"
        )
        if (row.length === 1)
            return this.extractPeople(row[0])
        else return undefined
    }

    public async list(): Promise<Peoples> {
        const rows = await this.database.select(this.sqlSelectPeople())
        const peoples = new Peoples()
        rows.forEach(row => {
            peoples.getPeoplesList().push(this.extractPeople(row))
        });
        return peoples;
    }

    public async listPrefix(startWith: string): Promise<Peoples> {
        const rows = await this.database.select(
            this.sqlSelectPeople() +
            " and (lower(name) LIKE \'" + startWith.toLowerCase() + "%\')"
        )
        const peoples = new Peoples()
        rows.forEach(row => {
            peoples.getPeoplesList().push(this.extractPeople(row))
        });
        return peoples;
    }

    private sqlSelectPeople(): string {
        return `
            select * from bible_people_translation where language = ` + this.language.getId()
    }

    private extractPeople(row: Map<string, string>): People {
        const people = new People()
        people.setId(parseInt(row.get("id")!))
        people.setLanguage(parseInt(row.get("language")!))
        people.setName(row.get("name")!)
        people.setDescription(row.get("description")!)
        people.setGender(row.get("gender")!)
        return people;
    }
}