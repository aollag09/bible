import React, { Component } from "react";
import { ReaderSelector } from "../ReaderSelector";
import { ScriptureReader } from "./ScriptureReader";
import "../../resources/style/read.css"
import { BibleAPI } from "../../../common/utils/bibleAPI";
import useFetch from 'fetch-suspense'


type ReaderProp = {
    switch: string,
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}


type ReaderState = {
    version: number,
    book: number,
    chapter: number,
}

export class Reader extends Component<ReaderProp, ReaderState>{

    constructor(props: ReaderProp) {
        super(props)
        this.state = {
            version: this.props.version,
            book: this.props.book,
            chapter: this.props.chapter
        }
    }

    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {
            return (
                <div className="reader">
                    <ScriptureReader
                        version={this.state.version}
                        book={this.state.book}
                        chapter={this.state.chapter} />

                    <div className="reader-button">
                        {this.previousChapterButton()}
                        {this.nextChapterButton()}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    componentDidUpdate() {
        this.state = {
            version: this.props.version,
            book: this.props.book,
            chapter: this.props.chapter
        }
    }

    nextChapter = () => {
        let newChapter = this.state.chapter + 1;
        this.setState({
            chapter: newChapter
        })
        this.props.read(this.state.version, this.state.book, newChapter)
    }

    previousChapter = () => {
        let newChapter = this.state.chapter - 1;
        this.setState({
            chapter: newChapter
        })
        this.props.read(this.state.version, this.state.book, newChapter)
    }

    previousChapterButton() {
        let chapter = this.state.chapter;
        if (chapter > 1) {
            return (
                <button
                    className="reader-previous-chapter-button"
                    type="button"
                    onClick={this.previousChapter}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextChapterButton = () => {
        let chapter = this.state.chapter;
        let nbChapters = 20;// parseInt(useFetch(BibleAPI.url + "book/" + this.props.book + "/chapters/count").toString());
        if (chapter < nbChapters) {
            return (
                <button
                    className="reader-previous-chapter-button"
                    type="button"
                    onClick={this.nextChapter}>
                    Next
                </button>
            )
        }
        return null;
    }
}