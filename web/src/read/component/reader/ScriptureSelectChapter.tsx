import useFetch from 'fetch-suspense';
import { Message } from "google-protobuf";
import memoize from "memoize-one";
import React from "react";
import { Version, Versions } from "../../../common/generated/services/version/version_pb";
import { BibleAPI } from "../../../common/utils/bibleAPI";


type ScriptureSelectChapterProp = {
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}


export class ScriptureSelectChapter
    extends React.Component<ScriptureSelectChapterProp>{

    constructor(props: ScriptureSelectChapterProp) {
        super(props)
    }

    render() {

        let options: JSX.Element[] = []
        let nbChapters = this.nbChapters(this.props.book)
        for (let i = 1; i <= nbChapters; i++) {
            options.push(<option value={i}> Chapter {i} </option>)
        }

        return (
            <div className="scripture-version-select" >
                <select
                    onChange={this.handleChange}
                    value={this.props.chapter} >
                    {options}
                </select>

            </div>
        )
    }

    private handleChange = (selection: any) => {
        if (selection.target.value) {
            this.props.read(this.props.version, this.props.book, selection.target.value)
        }
    }

    nbChapters = memoize(
        (book) => {
            return parseInt(useFetch(BibleAPI.url + "book/" + book + "/chapters/count").toString())
        }
    )

}





