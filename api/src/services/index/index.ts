
import { Client, RequestParams, ApiResponse } from "@elastic/elasticsearch"
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
    public getIndex(version: Version) {
        return "bible_" + version.getTable()
    }

    /**
     * Query verse from the index
     * @param index 
     * @param query 
     */
    public async search(index: string, query: string): Promise<ApiResponse<SearchResponse<VerseSource>>> {

        // Define the search parameters
        const searchParams: RequestParams.Search<SearchVerseBody> = {
            index: index,
            body: {
                query: {
                    match: { t: query }
                }
            }
        }

        // Craft the final type definition
        return await this.client.search(searchParams)
    }

    /**
     * Query verse from the index
     * @param index 
     * @param query 
     */
    public async searchAll(query: string): Promise<ApiResponse<SearchResponse<VerseSource>>> {

        // Define the search parameters
        const searchParams: RequestParams.Search<SearchVerseBody> = {
            index: "bible*",
            body: {
                query: {
                    match: { t: query }
                }
            }
        }

        // Craft the final type definition
        return await this.client.search(searchParams)
    }
}


// Define the type of the body for the Search request
interface SearchVerseBody {
    query: {
        match: { t: string }
    }
}

// Complete definition of the Search response
interface ShardsResponse {
    total: number;
    successful: number;
    failed: number;
    skipped: number;
}

interface Explanation {
    value: number;
    description: string;
    details: Explanation[];
}

interface SearchResponse<T> {
    took: number;
    timed_out: boolean;
    _scroll_id?: string;
    _shards: ShardsResponse;
    hits: {
        total: number;
        max_score: number;
        hits: Array<{
            _index: string;
            _type: string;
            _id: string;
            _score: number;
            _source: T;
            _version?: number;
            _explanation?: Explanation;
            fields?: any;
            highlight?: any;
            inner_hits?: any;
            matched_queries?: string[];
            sort?: string[];
        }>;
    };
    aggregations?: any;
}

// Define the interface of the source object
interface VerseSource {
    id: string,
    b: number,
    c: number,
    v: number
    t: string
}