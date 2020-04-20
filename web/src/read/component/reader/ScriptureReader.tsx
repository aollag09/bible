import React, { Component, Suspense } from "react";
import { Loading } from "../../../common/utils/component/Loading";
import { ScriptureFetcher } from "./ScriptureFetcher";


type ScriptureReaderProp = {
    version: number,
    book: number,
    chapter: number
}

export class ScriptureReader extends Component<ScriptureReaderProp> {

    render() {
        return (
            <div className="scripture-reader">
                <Suspense fallback={<Loading text="Loading scriptures ..." />}>
                    <ScriptureFetcher
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter} />
                </Suspense>
            </div>
        )
    }

}