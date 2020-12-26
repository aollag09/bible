import React, {Component, Suspense} from "react";
import {Loading} from "../../../common/utils/component/Loading";
import {ScriptureFetcher} from "./ScriptureFetcher";
import ErrorBoundary from "react-error-boundary";


type ScriptureReaderProp = {
    version: number,
    book: number,
    chapter: number,
    selectedVerses: Array<string>
    onSelectVerse: (id: string) => void
}

export class ScriptureReader extends Component<ScriptureReaderProp> {

    render() {
        return (
            <div className="scripture-reader">
                <Suspense fallback={<Loading text="Loading scriptures ..."/>}>
                    <ErrorBoundary>
                        <ScriptureFetcher
                            version={this.props.version}
                            book={this.props.book}
                            chapter={this.props.chapter}
                            selectedVerses={this.props.selectedVerses}
                            onSelectVerse={this.props.onSelectVerse}/>
                    </ErrorBoundary>
                </Suspense>
            </div>
        )
    }

}