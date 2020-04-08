import { Version } from "./version_pb";



export class VersionSchema {

    public static getTableName(version: Version) {
        return 't_' + version.getAbbreviation().toLowerCase()
    }

}