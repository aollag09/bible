import React, { Component } from "react";
import { Selector } from "./selector/Selector"
import { Reader } from "./reader/Reader";


type ReaderSelectorState = {

    /** Switch between the selector and the reader with possible values {"selector", "reader"} */
    switch: string,

    /** VBC Scripture Identifier */
    version: number,
    book: number,
    chapter: number,

}

export class ReaderSelector extends Component<{}, ReaderSelectorState> {

    public static SWITCH_SELECTOR = "selector"
    public static SWITCH_READER = "reader"

    constructor(props: Readonly<{}>) {
        super(props)

        // Default state values
        this.state = {
            version: 1,
            book: 1,
            chapter: 1,
            switch: ReaderSelector.SWITCH_SELECTOR
        }
    }

    read(version: number, book: number, chapter: number) {
        this.setState({
            switch: ReaderSelector.SWITCH_READER,
            version: version,
            book: book,
            chapter: chapter
        })
    }

    select() {
        this.setState({
            switch: ReaderSelector.SWITCH_SELECTOR
        })
    }

    render() {
        return (
            <div className="reader-selector">
                <Selector
                    read={ (version, book, chapter) => this.read(version, book, chapter)}
                    switch={this.state.switch} />
                <Reader
                    read={ (version, book, chapter) => this.read(version, book, chapter)}
                    switch={this.state.switch}
                    book={this.state.book}
                    chapter={this.state.chapter}
                    version={this.state.version} />
            </div>
        );
    }
}