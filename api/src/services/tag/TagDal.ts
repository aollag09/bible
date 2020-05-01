import { Database } from "../database/database";
import { HowTag, Tag, WhatTag, WhenTag, WhereTag, WhoTag, Tags } from "./tag_pb";
import { SQLUtils } from "../../utils/SQLUtils";


export class TagDAL {

    /** Database query object */
    private database: Database

    constructor(db: Database) {
        this.database = db;
    }

    /**
     * Return the tag with the iput id
     * @param id 
     */
    public async withId(id: number, tagCase: Tag.TagCase): Promise<Tag | undefined> {
        let sql = this.sqlSelectTag(tagCase) +
            ` where tag.id = ` + id;
        let rows = await this.database.select(sql)
        if (rows.length == 1) {
            return this.extractTag(rows[0], tagCase)
        }
        else
            return undefined;
    }

    /**
   * Retrieve all the tags within the two identifiers
   * @param start 
   * @param end 
   * @param tagCase
   */
    public async within(start: string, end: string, tagCase: Tag.TagCase): Promise<Tags> {
        let sql = this.sqlSelectTag(tagCase) +
            ` where tag.start >= ` + SQLUtils.quote(start) + ' and tag.end <=' + SQLUtils.quote(end)
        let rows = await this.database.select(sql)
        return this.extractTags(rows, tagCase)
    }

    /**
     * 
     * @param book 
     * @param chapter 
     * @param tagCase 
     */
    public async withBookChapter(book: number, chapter: number, tagCase: Tag.TagCase) {
        let sql = this.sqlSelectTag(tagCase) +
            ` where tag.book=` + book + ' and tag.chapter=' + chapter
        let rows = await this.database.select(sql)
        return this.extractTags(rows, tagCase)
    }

    /**
     * With type
     * @param type
     * @param tagCase 
     */
    public async withType(type: string, tagCase: Tag.TagCase) {
        let sql = this.sqlSelectTag(tagCase) +
            ` where tag.type=` + SQLUtils.quote(type)
        let rows = await this.database.select(sql)
        return this.extractTags(rows, tagCase)
    }

    /**
     * Extract tag from book chapter & verse limit
     * @param book 
     * @param chapter 
     * @param start
     * @param end
     * @param tagCase 
     */
    public async withBookChapterStartEnd(book: number, chapter: number, start: string, end: string, tagCase: Tag.TagCase) {
        let sql = this.sqlSelectTag(tagCase) +
            ` where tag.book = ` + book + ' and tag.chapter =' + chapter + ` and ` +
            ` tag.start >= ` + SQLUtils.quote(start) + ' and tag.end <=' + SQLUtils.quote(end)
        let rows = await this.database.select(sql)
        return this.extractTags(rows, tagCase)
    }

    /**
     * Extract tag from book chapter & verse limit
     * @param book 
     * @param chapter 
     * @param start
     * @param end
     */
    public async withBookChapterStartEndAll(book: number, chapter: number, start: string, end: string) {
        let tags = new Tags()
        this.getTagCases().forEach(async tagCase => {
            let currentTags = await this.withBookChapterStartEnd(book, chapter, start, end, tagCase);
            currentTags.getTagsList().forEach(tag => {
                tags.getTagsList().push(tag)
            })
        })
        return tags;
    }

    /**
     * Delete tag
     * @param id 
     * @param tagCase 
     */
    public async deleteTag(id: number, tagCase: Tag.TagCase) {
        let sql = `delete from ` + this.getTable(tagCase) + ` where id = ` + id
        console.log(sql)
        await this.database.transaction((connection: any) => {
            connection.query(sql)
        })
    }

    /**
     * Put a new tag in database
     * @param tag 
     */
    public async putTag(tag: Tag) {
        let sql = this.buildSQLCreate(tag)
        console.log("TMP LOG SQL " + sql)
        //this.database.query(sql)
        await this.database.transaction((connection: any) => {
            connection.query(sql)
        })
    }

    /**
     * Create several tags in the database in one transaction !
     * @param tags 
     */
    public async putTags(tags: Tags) {
        await this.database.transaction((connection: any) => {
            tags.getTagsList().forEach(tag => {
                let sql = this.buildSQLCreate(tag)
                connection.query(sql)
            })
        })
    }

    private buildSQLCreate(tag: Tag): string {
        let values = this.buildSQLTagValues(tag)
        let sql: string = 'insert into ' + this.getTable(tag.getTagCase()) + ' ('
        let i = 0
        values.forEach((value: string, key: string) => {
            if (value) {
                if (i == values.size - 1)
                    sql += SQLUtils.backTics(key) + ") "
                else
                    sql += SQLUtils.backTics(key) + ", "
            }
            i++;
        })
        sql += "values ("
        i = 0
        values.forEach((value: string, key: string) => {
            if (value) {
                if (i == values.size - 1)
                    sql += SQLUtils.quote(value) + ") "
                else
                    sql += SQLUtils.quote(value) + ", "
            }
            i++;
        })
        return sql;
    }

    private buildSQLTagValues(tag: Tag): Map<string, string> {
        let values = new Map<string, string>()

        values.set("owner", tag.getOwner().toString())

        values.set("created", tag.getCreated().toString())
        values.set("modified", tag.getModified().toString())

        values.set("start", tag.getStart())
        values.set("end", tag.getEnd())

        values.set("chapter", tag.getChapter().toString())
        values.set("book", tag.getBook().toString())

        values.set("type", tag.getType())
        values.set("subtype", tag.getSubtype())

        switch (+ tag.getTagCase()) {
            case Tag.TagCase.WHATTAG:
                values.set("what", tag.getWhattag()!.getWhat())
                values.set("details", tag.getWhattag()!.getDetails())
                break;
            case Tag.TagCase.WHOTAG:
                values.set("who", tag.getWhotag()!.getWho().toString())
                break;
            case Tag.TagCase.WHENTAG:
                values.set("year", tag.getWhentag()!.getYear().toString())
                break;
            case Tag.TagCase.WHERETAG:
                values.set("where", tag.getWheretag()!.getWhere())
                values.set("latitude", tag.getWheretag()!.getLatitude().toString())
                values.set("longitude", tag.getWheretag()!.getLongitude().toString())
                break;
            case Tag.TagCase.HOWTAG:
                values.set("how", tag.getHowtag()!.getHow())
                values.set("details", tag.getHowtag()!.getDetails())
                break;
            case Tag.TagCase.TAG_NOT_SET:
                break;
        }
        return values;
    }

    private getTable(tagCase: Tag.TagCase): string {
        switch (+tagCase) {
            case Tag.TagCase.WHATTAG:
                return "tag_what"
            case Tag.TagCase.WHOTAG:
                return "tag_who"
            case Tag.TagCase.WHENTAG:
                return "tag_when"
            case Tag.TagCase.WHERETAG:
                return "tag_where"
            case Tag.TagCase.HOWTAG:
                return "tag_how"
            case Tag.TagCase.TAG_NOT_SET:
                return "tag_not_set"
        }
        return "tag_not_defined"
    }

    private extractTag(row: Map<string, string>, tagCase: Tag.TagCase): Tag {
        let tag = new Tag()

        tag.setId(parseInt(row.get("id")!))
        tag.setOwner(parseInt(row.get("owner")!))

        tag.setCreated(parseInt(row.get("created")!))
        tag.setModified(parseInt(row.get("modified")!))

        tag.setStart(row.get("start")!.toString())
        tag.setEnd(row.get("end")!.toString())

        tag.setBook(parseInt(row.get("book")!))
        tag.setChapter(parseInt(row.get("chapter")!))

        if (row.get("type"))
            tag.setType(row.get("type")!.toString())
        if (row.get("subtype"))
            tag.setSubtype(row.get("subtype")!.toString())

        switch (+tagCase) {
            case Tag.TagCase.WHATTAG:
                let what = new WhatTag()
                what.setWhat(row.get("what")!.toString())
                what.setDetails(row.get("details")!.toString())
                tag.setWhattag(what)
                break;
            case Tag.TagCase.WHOTAG:
                let who = new WhoTag()
                who.setWho(parseInt(row.get("who")!))
                tag.setWhotag(who)
                break;
            case Tag.TagCase.WHENTAG:
                let when = new WhenTag()
                when.setYear(parseInt(row.get("year")!))
                tag.setWhentag(when)
                break;
            case Tag.TagCase.WHERETAG:
                let where = new WhereTag()
                where.setWhere(row.get("where")!.toString())
                where.setLatitude(parseFloat(row.get("latitude")!))
                where.setLongitude(parseFloat(row.get("longitude")!))
                tag.setWheretag(where)
                break;
            case Tag.TagCase.HOWTAG:
                let how = new HowTag()
                how.setHow(row.get("how")!.toString())
                how.setDetails(row.get("details")!.toString())
                tag.setHowtag(how)
                break;
            case Tag.TagCase.TAG_NOT_SET:
                break;
        }
        return tag;
    }

    private extractTags(rows: Map<string, string>[], tagCase: Tag.TagCase): Tags {
        let tags = new Tags()
        rows.forEach(row => {
            let tag = this.extractTag(row, tagCase)
            tags.getTagsList().push(tag)
        })
        return tags;
    }

    private getTagCases(): Tag.TagCase[] {
        return [Tag.TagCase.WHATTAG, Tag.TagCase.WHOTAG, Tag.TagCase.WHERETAG, Tag.TagCase.WHENTAG, Tag.TagCase.HOWTAG]
    }

    private sqlSelectTag(tagCase: Tag.TagCase): string {
        return `
        select tag.* from ` + this.getTable(tagCase) + ` tag`
    }
}