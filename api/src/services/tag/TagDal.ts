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
        let sql = this.sqlSelectTag(tagCase)
        let rows = await this.database.select(sql)
        if (rows.length == 1)
            return this.extractTag(rows[0], tagCase)
        else
            return undefined;
    }

    /**
   * Retrieve all the tags within the two identifiers
   * @param from 
   * @param to 
   */
    public async withinVerses(from: string, to: string, tagCase: Tag.TagCase): Promise<Tags> {
        let sql = this.sqlSelectTag(tagCase) +
            ` where tag.from >= ` + SQLUtils.quote(from) + ' and tag.to <=' + SQLUtils.quote(to)
        let rows = await this.database.select(sql)
        return this.extractTags(rows, tagCase)
    }

    /**
     * withinBookChapter
     
 book: number, chapter: number     */
    public withinBookChapter( book: number, chapter: number) {
        
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

        tag.setType(row.get("type")!.toString())
        tag.setSubtype(row.get("subType")!.toString())

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
            tags.addTags(tag)
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