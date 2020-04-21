import React, { Component } from 'react'
import useFetch from 'fetch-suspense'
import { BibleAPI } from '../../../common/utils/bibleAPI';
import { Scriptures } from '../../../common/generated/services/scriptures/scriptures_pb'
import { Message } from 'google-protobuf';

type ScriptureFetcherProp = {
    version: number,
    book: number,
    chapter: number
}

export class ScriptureFetcher extends Component<ScriptureFetcherProp>{

    render() {
        const response = useFetch(
            BibleAPI.url +
            "scriptures/" +
            this.props.version +
            "/book/" +
            this.props.book +
            "/chapter/" +
            this.props.chapter)

        const scriptures = Scriptures.deserializeBinary(Message.bytesAsU8(response.toString()))

        let scriptureSpans: JSX.Element[] = []
        scriptures.getScripturesList().forEach(scripture => {
            scriptureSpans.push(
                <span className="scripture-verse">
                    <div className="scripture-verse-id-box">
                        <span className="scripture-verse-id"> {scripture.getVerse()}</span>
                    </div>
                    <span className="scripture-verse-text"> {scripture.getScripture()}</span>
                </span>)
        })

        return (
            <div className="scripture-fetcher">
                {scriptureSpans}
            </div>
        );
    }
}