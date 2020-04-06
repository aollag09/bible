import { Database } from "../database/database";
import { Version } from "./version_pb";

/**
 * Data Access Layer for availables Bible Versions
 */
export class VersionDAL {

    /** Version table */
    private static TABLE_VERSION: String = "bible_version_key";

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
    public static DEFAULT_ENGLISH: String = "ASV"

    /** Database query object */
    private database: Database;

    constructor() {
        this.database = new Database()
    }

    private selectVersions(): String {
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

    public list(): Array<Version> {
        let versions = new Array<Version>()
        this.database.queryNP(this.selectVersions(),
            function (error: any, results: any[], fields: any) {
                if (error)
                    throw error;

                // Loop on results
                Object.keys(results).forEach(function (key: any) {
                    var row = results[key];
                    let version = new Version()
                    version.setAbbreviation(row.abbreviation)
                    version.setCopyright(row.copyright)
                    version.setCopyrightInfo(row.copyright_info)
                    version.setId(row.id)
                    version.setInfoText(row.info_text)
                    version.setInfoUrl(row.info_url)
                    version.setLanguage(row.language)
                    version.setPublisher(row.publisher)
                    version.setTable(row.table)
                    version.setVersion(row.version)
                    versions.push(version)
                });
            });
        return versions;
    }

    public try(id: number) {
        this.database.execute( this.selectVersions())
    }

}