import React, { Suspense } from "react";
import { ScriptureSelectBook } from "./ScriptureSelectBook";
import { ScriptureSelectVersion } from "./ScriptureSelectVersion";


type ScriptureSelectorProp = {
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}

export class ScriptureSelector extends React.Component<ScriptureSelectorProp>{

    render() {
        return (
            <div className="scripture-selector" >
                <Suspense fallback="Loading versions..." >
                    <ScriptureSelectVersion
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter}
                        read={this.props.read}
                    />
                </Suspense>
                <Suspense fallback="Loading books..." >
                    <ScriptureSelectBook
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter}
                        read={this.props.read}
                    />
                </Suspense>
            </div>
        )
    }

    readVersion(version: number) {
        this.props.read(version, this.props.book, this.props.chapter)
    }

} 