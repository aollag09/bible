import React, { Component } from "react";
import { ReaderSelector } from "../ReaderSelector";
import { ScriptureReader } from "./ScriptureReader";
import "../../resources/style/read.css"
import { BibleAPI } from "../../../common/utils/bibleAPI";
import useFetch from 'fetch-suspense'
import { ScriptureSelector } from "./SriptureSelector";

type ReaderProp = {
    switch: string,
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}

type ReaderState = {

}

export class Reader extends Component<ReaderProp, ReaderState>{

    constructor(props: ReaderProp) {
        super(props)
    }

    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {
            return (
                <div className="reader">
                    <div className="reader-top-selector" >
                        <ScriptureSelector 
                            version={this.props.version}
                            book={this.props.book}
                            chapter={this.props.chapter}
                            read={this.props.read}
                        />
                    </div>

                    <div className="reader-button">
                        {this.previousChapterButton()}
                    </div>

                    <ScriptureReader
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter} />

                    <div className="reader-button">
                        {this.nextChapterButton()}
                    </div>
                    <button onClick={this.scrollTop}> top </button>
                </div>
            )
        } else {
            return null;
        }
    }

    scrollTop() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        this.scrollTop()
    }

    nextChapter = () => {
        this.props.read(this.props.version, this.props.book, this.props.chapter + 1)
    }

    previousChapter = () => {
        let newChapter = this.props.chapter - 1;
        this.props.read(this.props.version, this.props.book, this.props.chapter - 1)
    }

    previousChapterButton() {
        let chapter = this.props.chapter;
        if (chapter > 1) {
            return (
                <div className="reader-chapter-div">
                    <button
                        className="reader-chapter-button reader-previous-chapter-button"
                        type="button"
                        onClick={this.previousChapter}>
                        <span className="reader-arrow reader-arrow-previous"> &#60; </span>
                    </button>
                </div>
            )
        }
        return null;
    }

    nextChapterButton = () => {
        let chapter = this.props.chapter;
        let nbChapters = 20;// parseInt(useFetch(BibleAPI.url + "book/" + this.props.book + "/chapters/count").toString());
        if (chapter < nbChapters) {
            return (
                <div className="reader-chapter-div">
                    <button
                        className="reader-chapter-button reader-next-chapter-button"
                        type="button"
                        onClick={this.nextChapter}>
                        <span className="reader-arrow reader-arrow-next"> &#62; </span>
                    </button>
                </div>
            )
        }
        return null;
    }
}