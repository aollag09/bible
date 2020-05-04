import useFetch from 'fetch-suspense';
import { Message } from 'google-protobuf';
import memoize from "memoize-one";
import React, { Component } from 'react';
import { Scriptures } from '../../../common/generated/services/scriptures/scriptures_pb';
import { BibleAPI } from '../../../common/utils/bibleAPI';
import { Key } from '../../../common/utils/key';
import { Tags, Tag } from '../../../common/generated/services/tag/tag_pb';
import { TagIcon } from './TagIcon';

type ScriptureFetcherProp = {
    version: number,
    book: number,
    chapter: number,
    selectedVerses: Array<string>
    onSelectVerse: (id: string) => void
}

export class ScriptureFetcher extends Component<ScriptureFetcherProp>{

    render() {
        const scriptures = this.getScriptures(this.props.version, this.props.book, this.props.chapter)
        const tags = this.getTags(this.props.book, this.props.chapter)
        const scriptureSpans: JSX.Element[] = []
        scriptures.getScripturesList().forEach(scripture => {

            const currentTags = new Array<Tag>()
            tags.getTagsList().forEach(tag => {
                if (tag.getStart() === scripture.getId())
                    currentTags.push(tag)
            })
            let tagSpan: JSX.Element | null = null;
            if (currentTags.length > 0) {
                tagSpan = <TagIcon tags={currentTags} />
            }

            scriptureSpans.push(
                <span
                    key={Key.getKey("verse", scripture.getId())}
                    className="scripture-verse">
                    <div className="scripture-verse-id-box">
                        <span className="scripture-verse-id"> {scripture.getVerse()}</span>
                    </div>
                    {tagSpan}
                    <span
                        className={this.getClassName(scripture.getId())}
                        onClick={() => this.props.onSelectVerse(scripture.getId())}>
                        {scripture.getScripture()}
                    </span>
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

    getTags = memoize(
        (book: number, chapter: number) => {
            const tags = new Tags();
            ["what", "who", "where", "when", "how"].forEach(tagcase => {
                const response = useFetch(
                    BibleAPI.url +
                    "tag/" +
                    tagcase +
                    "/book/" +
                    book +
                    "/chapter/" +
                    chapter)
                const current = Tags.deserializeBinary(Message.bytesAsU8(response.toString()))
                current.getTagsList().forEach(newtag => {
                    tags.getTagsList().push(newtag)
                })
            })
            return tags
        }
    )

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