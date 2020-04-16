
import { Client } from "@elastic/elasticsearch";
import { Version } from "../version/version_pb";

export class Index {

    /** Host of the elasticsearch index to connect with */
    private static hostname: string = "localhost"

    /** Port of the elasticsearch index to connect with */
    private static port: number = 9200

    /** Protocol for elasticsearch connection */
    private static protocol: string = "http"

    /** ES TS JS Client */
    private client: Client;

    constructor() {
        let url = Index.protocol + "://" + Index.hostname + ":" + Index.port
        this.client = new Client({ node: url.toString() })
    }

    /**
     * @returns The ES Client
     */
    public getClient(): Client {
        return this.client
    }

    /**
     * Get the index name from the input version
     * @param version 
     */
    public getIndexName(version: Version) {
        return "bible_" + version.getTable()
    }
}