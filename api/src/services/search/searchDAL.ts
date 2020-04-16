import { Scriptures, Scripture } from "../scriptures/scriptures_pb"
import { RequestParams, ApiResponse } from "@elastic/elasticsearch"
import { Index } from "../index/index"
import { Version } from "../version/version_pb";


export class SearchDAL {

    /** Index client to connect to elasticsearch and perform queries */
    private index: Index;

    constructor(index: Index) {
        this.index = index;
    }

    /**
     * Query verse from the index
     * @param index 
     * @param query 
     */
    public async searchScripture(version: Version, query: string): Promise<Scriptures> {

        // Define the search parameters
        const searchParams: RequestParams.Search<SimpleSearchVerseQuery> = {
            index: this.index.getIndexName(version),
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
        return await this.index.getClient().search(query)
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
