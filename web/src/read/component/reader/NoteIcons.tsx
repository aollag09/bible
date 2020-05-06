import React from "react"
import { Note } from "../../../common/generated/services/note/note_pb"
import { NoteIcon } from "./NoteIcon"

type NoteIconsProps = {
    notes: Array<Note>
}

export const NoteIcons: React.FunctionComponent<NoteIconsProps> = (props) => {

    const groupByType = (): Map<string, Array<Note>> => {
        const map = new Map<string, Array<Note>>()
        props.notes.forEach(note => {
            const key = note.getType()
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [note]);
            } else {
                collection.push(note);
            }
        })
        return map
    }

    const renderIconList = (): JSX.Element[] => {
        const elements = new Array<JSX.Element>();
        const notebytype = groupByType()
        notebytype.forEach((notes, type) => {
            elements.push(<NoteIcon notes={notes} type={type} />)
        })
        return elements;
    }

    return (
        <div className="note-icons">
            {renderIconList()}
        </div>
    )

}