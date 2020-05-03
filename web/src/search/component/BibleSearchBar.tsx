import React, { useState } from "react"
import SearchBar from "material-ui-search-bar"
import Axios from "axios";
import { BibleAPI } from "../../common/utils/bibleAPI";

export const BibleSearchBar: React.FunctionComponent = (props) => {

    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<string>("")

    const search = async () => {
        let res = await Axios.get(BibleAPI.url + "_search/?q=" + query)
        setResponse(res.data)
    }

    return (
        <div className="bible-search">
            <div className="bible-search-bar">
                <SearchBar
                    value={query}
                    onChange={(newValue: string) => setQuery(newValue)}
                    onRequestSearch={() => search()}
                />
            </div>

            <div className="bible-search-response">
                <p>
                    {response}
                </p>
            </div>
        </div>
    )
}