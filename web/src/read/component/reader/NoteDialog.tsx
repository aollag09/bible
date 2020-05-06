import { Button, DialogContent } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { Note } from "../../../common/generated/services/note/note_pb";
import { BibleAPI } from "../../../common/utils/bibleAPI";
import { DialogField } from "./DialogField";

type NoteDialogProps = {
    notes: Array<Note>
    handleClose: () => void
}

export const NoteDialog: React.FunctionComponent<NoteDialogProps> = (props) => {


    const deleteNote = (id: number) => {
        Axios.delete(BibleAPI.url + "note/" + id);
        props.handleClose()
    }

    const noteElts: JSX.Element[] = []
    props.notes.forEach(tag => {

        noteElts.push(
            <div key={tag.getId()}>

                <DialogField key={tag.getId() + "start"} field="start" value={tag.getStart()} />
                <DialogField key={tag.getId() + "end"} field="end" value={tag.getEnd()} />
                <DialogField key={tag.getId() + "created"} field="created" value={new Date(tag.getCreated()).toUTCString()} />
                <DialogField key={tag.getId() + "modified"} field="modified" value={new Date(tag.getModified()).toUTCString()} />
                <DialogField key={tag.getId() + "type"} field="type" value={tag.getType()} />
                <DialogField key={tag.getId() + "note"} field="note" value={tag.getNote()} />

                <Button onClick={() => deleteNote(tag.getId())} > Delete </Button>
            </div>
        )
    })



    return (
        <div className="dialog-container">
            <DialogContent>
                {noteElts}
            </DialogContent>
        </div>
    )

}