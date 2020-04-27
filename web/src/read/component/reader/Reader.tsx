import useFetch from 'fetch-suspense';
import memoize from "memoize-one";
import React from 'react';
import { BibleAPI } from "../../../common/utils/bibleAPI";
import arrow from "../../resources/image/arrow.png";
import { ScriptureReader } from "./ScriptureReader";
import { ScriptureSelector } from "./SriptureSelector";


type ReaderProp = {
    version: number,
    book: number,
    chapter: number,
    showTagger: boolean,
    selectedVerses: Array<string>
    read: (version: number, book: number, chapter: number) => void
    onSelectVerse: (id: string) => void
    showReaderSelector: () => void
}


export class Reader extends React.Component<ReaderProp> {


    render() {

        let nbChapters = this.nbChapters(this.props.book)
        return (
            <div className={this.getClassName(this.props.showTagger)}>
                <div className="reader-top-selector" >
                    <ScriptureSelector
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter}
                        read={this.props.read}
                        showReaderSelector={this.props.showReaderSelector}
                    />
                </div>

                <h2> Chapter {this.props.chapter}</h2>

                <div className="reader-button">
                    {this.previousChapterButton()}
                </div>

                <ScriptureReader
                    version={this.props.version}
                    book={this.props.book}
                    chapter={this.props.chapter}
                    selectedVerses={this.props.selectedVerses}
                    onSelectVerse={this.props.onSelectVerse} />

                <div className="reader-button">
                    {this.nextChapterButton(nbChapters)}
                </div>
            </div>
        );
    }

    getClassName(showTagger: boolean) {
        if (showTagger)
            return "reader reader-with-tagger"
        else
            return "reader reader-without-tagger"
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

