
import { Client, RequestParams, ApiResponse } from "@elastic/elasticsearch"
import { Version } from "../version/version_pb";
import { Scripture, Scriptures } from "../scriptures/scriptures_pb";
import scriptureRoutes from "../scriptures/scriptureRoutes";

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
    public async searchScripture(index: string, query: string): Promise<Scriptures> {

        // Define the search parameters
        const searchParams: RequestParams.Search<SimpleSearchVerseQuery> = {
            index: index,
            body: {
                query: {
                    match: { t: query }
                }
            }
        }

        let response = await this.onSearchScriptures(searchParams)
        return this.extractScriptures(response)
    }

    /**
     * Query verse from all the existing bible index
     * @param index 
     * @param query 
     */
    public async searchAllScriputure(query: string): Promise<Scriptures> {

        // Define the search parameters
        const searchParams: RequestParams.Search<SimpleSearchVerseQuery> = {
            index: "bible*",
            body: {
                query: {
                    match: { t: query }
                }
            }
        }

        let response = await this.onSearchScriptures(searchParams)
        return this.extractScriptures(response)
    }

    /**
     * Perform Scripture search with associated types
     * @param query 
     */
    private async onSearchScriptures(query: RequestParams.Search<SimpleSearchVerseQuery>)
        : Promise<ApiResponse<SearchResponse<VerseSource>>> {
        return await this.client.search(query)
    }

    /**
     * Extract scriptures from index response
     * @param response 
     */
    private extractScriptures(response: ApiResponse<SearchResponse<VerseSource>>): Scriptures {
        let scriptures = new Scriptures()
        response.body.hits.hits.forEach(hit => {
            let scripture = new Scripture()
            scripture.setId(hit._source.id)
            scripture.setBook(hit._source.b)
            scripture.setChapter(hit._source.c)
            scripture.setVerse(hit._source.v)
            scripture.setScripture(hit._source.t)
            scriptures.getScripturesList().push(scripture)
        });
        return scriptures;
    }
}


/** Define the type of the body for the Search request */
interface SimpleSearchVerseQuery {
    query: {
        match: { t: string }
    }
}

/** Complete definition of the Search response */
interface ShardsResponse {
    total: number;
    successful: number;
    failed: number;
    skipped: number;
}

/** Explenation result */
interface Explanation {
    value: number;
    description: string;
    details: Explanation[];
}

/** Search Response */
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

/* Define the interface of the source object */
interface VerseSource {
    id: string,
    b: number,
    c: number,
    v: number
    t: string
}