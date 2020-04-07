import { Database } from "../database/database";
import { Version } from "./version_pb";

/**
 * Data Access Layer for availables Bible Versions
 */
export class VersionDAL {

    /** Version table */
    private static TABLE_VERSION = "bible_version_key";

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

    constructor() {
        this.database = new Database()
    }

    private sqlSelectAllVersions(): string {
        return `
        select
            bvk.abbreviation,
            bvk.copyright,
            bvk.copyright_info,
            bvk.id,
            bvk.info_text,
            bvk.info_url,
            bvk.\`language\`,
            bvk.publisher,
            bvk.\`table\`,
            bvk.\`version\`
        from
            bible_version_key bvk
        limit
            10000;`
    }

    public async list(): Promise<Array<Version>> {
        let versions = new Array<Version>()
        let rows = await this.database.select(this.sqlSelectAllVersions())
        rows.forEach(row => {
            let version = new Version()
            version.setAbbreviation(row.get(VersionDAL.SELECTABLE_ABBREVIATION)!)
            version.setCopyright(row.get(VersionDAL.SELECTABLE_COPYRIGHT)!)
            version.setCopyrightInfo(row.get(VersionDAL.SELECTABLE_COPYRIGHT_INFO)!)
            version.setId(parseInt(row.get(VersionDAL.SELECTABLE_ID)!))
            version.setInfoText(row.get(VersionDAL.SELECTABLE_INFO_TEXT)!)
            version.setInfoUrl(row.get(VersionDAL.SELECTABLE_INFO_URL)!)
            version.setLanguage(row.get(VersionDAL.SELECTABLE_LANGUAGE)!)
            version.setPublisher(row.get(VersionDAL.SELECTABLE_PUBLISHER)!)
            version.setTable(row.get(VersionDAL.SELECTABLE_PUBLISHER)!)
            version.setVersion(row.get(VersionDAL.TABLE_VERSION)!)
            versions.push(version)
        })
        return versions;
    }

}