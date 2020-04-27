import useFetch from 'fetch-suspense';
import { Message } from 'google-protobuf';
import memoize from "memoize-one";
import React, { Component } from 'react';
import { Scriptures } from '../../../common/generated/services/scriptures/scriptures_pb';
import { BibleAPI } from '../../../common/utils/bibleAPI';
import { Key } from '../../../common/utils/key';


type ScriptureFetcherProp = {
    version: number,
    book: number,
    chapter: number,
    selectedVerses: Array<string>
    onSelectVerse: (id: string) => void
}

export class ScriptureFetcher extends Component<ScriptureFetcherProp>{

    render() {
        let scriptures = this.getScriptures(this.props.version, this.props.book, this.props.chapter)

        let scriptureSpans: JSX.Element[] = []
        scriptures.getScripturesList().forEach(scripture => {
            scriptureSpans.push(
                <span
                    key={Key.getKey("verse", scripture.getId())}
                    className="scripture-verse"
                    onClick={() => this.props.onSelectVerse(scripture.getId())}>
                    <div className="scripture-verse-id-box">
                        <span className="scripture-verse-id"> {scripture.getVerse()}</span>
                    </div>
                    <span className={this.getClassName(scripture.getId())}> {scripture.getScripture()}</span>
                </span>)
        })

        return (
            <div className="scripture-fetcher">
                {scriptureSpans}
            </div>
        );
    }

    getScriptures = memoize(
        (version: number, book: number, chapter: number) => {
            const response = useFetch(
                BibleAPI.url +
                "scriptures/" +
                version +
                "/book/" +
                book +
                "/chapter/" +
                chapter)
            return Scriptures.deserializeBinary(Message.bytesAsU8(response.toString()))
        })

    handleClick(verseId: string) {
        alert(verseId)
    }

    getClassName(id: string) {
        if (this.props.selectedVerses.includes(id))
            return "scripture-verse-text scripture-verse-text-selected"
        else
            return "scripture-verse-text scripture-verse-text-not-selected"
    }

}