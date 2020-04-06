/**
 * Scriptures object to enable query over scriptures data
 */
export class ScriptureDAL {

    private version: String;

    /** Build scripture object from a specific version */
    constructor(version: String) {
        this.version = version;
    }

    /** Return the associated verse in the specific traduction */
    public get(id: String) {
        
    }

}