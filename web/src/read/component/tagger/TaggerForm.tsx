import React from "react"
import {TagToggle} from "./TagToggle"
import {VerseSelection} from "../reader/VerseSelection"
import {NoteToggle} from "./NoteToggle"

type TaggerFormProp = {
    book: number,
    chapter: number,
    verseSelections: Array<VerseSelection>,
    cleanSelection: () => void
}

export const TaggerForm: React.FunctionComponent<TaggerFormProp> = props => {

    return (
        <div className="tagger-form">
            <h3> Create Note</h3>
            <NoteToggle
                book={props.book}
                chapter={props.chapter}
                verseSelections={props.verseSelections}
                cleanSelection={props.cleanSelection}/>

            <h3> Create Tag</h3>
            <TagToggle
                book={props.book}
                chapter={props.chapter}
                verseSelections={props.verseSelections}
                cleanSelection={props.cleanSelection}
            />

            <h3> Create Highlight</h3>
        </div>
    )


}