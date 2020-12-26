import useFetch from 'fetch-suspense';
import {Message} from 'google-protobuf';
import memoize from "memoize-one";
import React, {Component} from 'react';
import {Note, Notes} from '../../../common/generated/services/note/note_pb';
import {Scripture, Scriptures} from '../../../common/generated/services/scriptures/scriptures_pb';
import {Tag, Tags} from '../../../common/generated/services/tag/tag_pb';
import {BibleAPI} from '../../../common/utils/bibleAPI';
import {Key} from '../../../common/utils/key';
import {TagIcon} from './TagIcon';
import {NoteIcons} from './NoteIcons';

type ScriptureFetcherProp = {
    version: number,
    book: number,
    chapter: number,
    selectedVerses: Array<string>
    onSelectVerse: (id: string) => void
}

export class ScriptureFetcher extends Component<ScriptureFetcherProp> {

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
    getNotes = memoize(
        (book: number, chapter: number): Notes => {
            const response = useFetch(
                BibleAPI.url
                + "note/book/"
                + book +
                "/chapter/" +
                chapter)
            return Notes.deserializeBinary(Message.bytesAsU8(response.toString()))
        }
    )

    render() {
        const scriptures = this.getScriptures(this.props.version, this.props.book, this.props.chapter)
        const tags = this.getTags(this.props.book, this.props.chapter)
        const notes = this.getNotes(this.props.book, this.props.chapter)
        const scriptureSpans: JSX.Element[] = []
        scriptures.getScripturesList().forEach(scripture => {

            scriptureSpans.push(
                <span
                    key={Key.getKey("verse", scripture.getId())}
                    className="scripture-verse">
                    <div className="scripture-verse-id-box">
                        <span className="scripture-verse-id"> {scripture.getVerse()}</span>
                    </div>
                    {this.getTagSpan(tags, scripture)}
                    {this.getNoteSpan(notes, scripture)}
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

    getTagSpan = (tags: Tags, scripture: Scripture): JSX.Element | null => {
        const currentTags = new Array<Tag>()
        tags.getTagsList().forEach(tag => {
            if (tag.getStart() === scripture.getId())
                currentTags.push(tag)
        })
        if (currentTags.length > 0) {
            return <TagIcon tags={currentTags}/>
        } else
            return null
    }

    getNoteSpan = (notes: Notes, scripture: Scripture): JSX.Element | null => {
        const currentNotes = new Array<Note>()
        notes.getNotesList().forEach(note => {
            if (note.getStart() === scripture.getId())
                currentNotes.push(note)
        })
        if (currentNotes.length > 0) {
            return <NoteIcons notes={currentNotes}/>
        } else
            return null
    }

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