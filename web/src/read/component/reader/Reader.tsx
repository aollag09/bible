import React, { Component } from "react";
import { ReaderSelector } from "../ReaderSelector";
import { ScriptureReader } from "./ScriptureReader";

type ReaderProp = {
    switch: string,
    version: number,
    book: number,
    chapter: number,
}

export class Reader extends Component<ReaderProp>{

    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {
            return (
                <div className="reader">
                    <ScriptureReader
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter} />
                </div>
            )
        } else {
            return null;
        }
    }
}