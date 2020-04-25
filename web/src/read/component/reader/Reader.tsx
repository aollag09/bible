import useFetch from 'fetch-suspense';
import memoize from "memoize-one";
import React, { Component } from "react";
import { BibleAPI } from "../../../common/utils/bibleAPI";
import arrow from "../../resources/image/arrow.png";
import "../../resources/style/read.css";
import { ReaderSelector } from "../ReaderSelector";
import { ScriptureReader } from "./ScriptureReader";
import { ScriptureSelector } from "./SriptureSelector";

type ReaderProp = {
    switch: string,
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}

type ReaderState = {
    nbChapters: number
}

export class Reader extends Component<ReaderProp, ReaderState>{


    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {

            let nbChapters = this.nbChapters(this.props.book)
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
                        {this.nextChapterButton(nbChapters)}
                    </div>
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

    nbChapters = memoize(
        (book) => {
            return parseInt(useFetch(BibleAPI.url + "book/" + book + "/chapters/count").toString())
        }

    )

    nextChapter = () => {
        this.props.read(this.props.version, this.props.book, this.props.chapter + 1)
    }

    previousChapter = () => {
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
                        <img className="reader-arrow reader-arrow-previous" alt="previous" src={arrow} />
                    </button>
                </div>
            )
        }
        return null;
    }

    nextChapterButton = (nbChapters: number) => {
        let chapter = this.props.chapter;
        if (chapter < nbChapters) {
            return (
                <div className="reader-chapter-div">
                    <button
                        className="reader-chapter-button reader-next-chapter-button"
                        type="button"
                        onClick={this.nextChapter}>
                        <img className="reader-arrow reader-arrow-next" alt="next" src={arrow} />
                    </button>
                </div>
            )
        }
        return null;
    }
}