
import { Client } from "@elastic/elasticsearch"

export class Index {

    /** Host of the elasticsearch index to connect with */
    private static hostname: string = "localhost"

    /** Port of the elasticsearch index to connect with */
    private static port: number = 9200

    /** Protocol for elasticsearch connection */
    private static protocol: string = "http"

    /** ES TS JS Client */
    private client : Client;

    constructor(){
        let url = Index.protocol + "://" + Index.hostname + ":" + Index.port
        this.client = new Client({ node : url.toString()})
    }

    public getClient():Client{
        return this.client
    }
}