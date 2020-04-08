import { Database } from "../database/database";
import { Version } from "./version_pb";
import { SQLUtils } from "../../utils/SQLUtils";

/**
 * Data Access Layer for availables Bible Versions
 */
export class VersionDAL {

    /** Version selectables */
    private static SELECTABLE_ABBREVIATION = "abbreviation";
    private static SELECTABLE_COPYRIGHT = "copyright";
    private static SELECTABLE_COPYRIGHT_INFO = "copyright_info";
    private static SELECTABLE_ID = "id";
    private static SELECTABLE_INFO_TEXT = "info_text";
    private static SELECTABLE_INFO_URL = "info_url";
    private static SELECTABLE_LANGUAGE = "language";
    private static SELECTABLE_PUBLISHER = "publisher";
    private static SELECTABLE_TABLE = "table";
    private static SELECTABLE_VERSION = "version";

    /** Default english translation */
    public static DEFAULT_ENGLISH = "ASV"

    /** Database query object */
    private database: Database;

    constructor(db: Database) {
        this.database = db;
    }

    private sqlSelectVersion(): string {
        return `
        select
            bvk.*
        from
            bible_version_key bvk`
    }

    /**
     * Return the default bible version
     * The default version is ASV
     */
    public async getDefault(): Promise<Version> {
        let version = await this.withAbbreviation(VersionDAL.DEFAULT_ENGLISH);
        return version!;
    }

    /**
     * Retrieve the entire list of existing bible versions in the database
     */
    public async list(): Promise<Array<Version>> {
        let versions = new Array<Version>()
        let rows = await this.database.select(this.sqlSelectVersion())
        rows.forEach(row => {
            versions.push(this.extractVersion(row))
        })
        return versions;
    }

    /**
     * Get the list of existing bible versions from the language
     * @param language 
     */
    public async withLanguage(language: string): Promise<Array<Version>> {
        let versions = new Array<Version>()
        const rows = await this.database.select([
            this.sqlSelectVersion(),
            "where",
            VersionDAL.SELECTABLE_LANGUAGE,
            "=",
            SQLUtils.quote(language)
        ].join(" "))
        rows.forEach(row => {
            versions.push(this.extractVersion(row))
        })
        return versions;
    }

    /**
     * Get the Bible version from the abbreviation
     * @param abbreviation 
     */
    public async withAbbreviation(abbreviation: string): Promise<Version | undefined> {
        const row = await this.database.select([
            this.sqlSelectVersion(),
            "where",
            VersionDAL.SELECTABLE_ABBREVIATION,
            "=",
            SQLUtils.quote(abbreviation)
        ].join(" "))
        if (row.length != 1)
            return undefined
        else
            return this.extractVersion(row[0])
    }

    /**
     * Get the Bible version from its unique identifier
     * @param id 
     */
    public async withId(id: number): Promise<Version | undefined> {
        const row = await this.database.select([
            this.sqlSelectVersion(),
            "where",
            VersionDAL.SELECTABLE_ID,
            "=",
            id
        ].join(" "))
        if (row.length != 1)
            return undefined
        else
            return this.extractVersion(row[0])
    }

    private extractVersion(row: Map<string, string>): Version {
        let version = new Version()
        version.setAbbreviation(row.get(VersionDAL.SELECTABLE_ABBREVIATION)!)
        version.setCopyright(row.get(VersionDAL.SELECTABLE_COPYRIGHT)!)
        version.setCopyrightInfo(row.get(VersionDAL.SELECTABLE_COPYRIGHT_INFO)!)
        version.setId(parseInt(row.get(VersionDAL.SELECTABLE_ID)!))
        version.setInfoText(row.get(VersionDAL.SELECTABLE_INFO_TEXT)!)
        version.setInfoUrl(row.get(VersionDAL.SELECTABLE_INFO_URL)!)
        version.setLanguage(row.get(VersionDAL.SELECTABLE_LANGUAGE)!)
        version.setPublisher(row.get(VersionDAL.SELECTABLE_PUBLISHER)!)
        version.setTable(row.get(VersionDAL.SELECTABLE_TABLE)!)
        version.setVersion(row.get(VersionDAL.SELECTABLE_VERSION)!)
        return version
    }

}