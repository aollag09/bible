import React, { useState } from "react"
import SearchBar from "material-ui-search-bar"
import Axios from "axios";
import { BibleAPI } from "../../common/utils/bibleAPI";
import { Scriptures } from "../../common/generated/services/scriptures/scriptures_pb";
import { Message } from "google-protobuf";

export const BibleSearchBar: React.FunctionComponent = (props) => {

    const [query, setQuery] = useState<string>("");
    const [scriptures, setScriptures] = useState<Scriptures>()
    const [elements, setElements] = useState<Array<JSX.Element>>()

    const search = async () => {
        let res = await Axios.get(BibleAPI.url + "_search/?q=\"" + query + "\"")
        const script = Scriptures.deserializeBinary(Message.bytesAsU8(res.data))
        setScriptures(script)

        const elts = new Array<JSX.Element>()
        script.getScripturesList().forEach(scripture => {
            elts.push(<li key={scripture.getScripture()}> {scripture.getScripture()} </li>)
        })

        // to remove
        scriptures?.getScripturesList()
        setElements(elts)
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
                <ul> {elements} </ul>
            </div>
        </div>
    )
}