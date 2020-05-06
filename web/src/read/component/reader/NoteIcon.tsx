
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import React, { useState } from "react";
import { Note } from "../../../common/generated/services/note/note_pb";
import { StringUtils } from "../../../common/utils/stringUtils";
import { NoteDialog } from "./NoteDialog";

export type NoteIconProps = {
    notes: Note[]
    type: string
}

export const NoteIcon: React.FunctionComponent<NoteIconProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const getToolTip = () => {
        return StringUtils.capitalize(props.type) + " " + props.notes.length
    }

    const buildIcon = (): JSX.Element => {
        if (props.type === "question")
            return <HelpIcon className="note-label-icon" />
        else if (props.type === "comment")
            return <ChatIcon className="note-label-icon" />
        else if (props.type === "prayer")
            return <FavoriteIcon className="note-label-icon" />
        else
            return <ChatIcon className="note-label-icon" />
    }

    return (
        <div className="note-icon">
            <Tooltip title={getToolTip()} onClick={handleOpen} aria-label="nb-notes" placement="top">
                {buildIcon()}
            </Tooltip>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="scroll-dialog-title">{StringUtils.capitalize(props.type)}</DialogTitle>
                <DialogContent dividers={true}>
                    <NoteDialog notes={props.notes} handleClose={handleClose} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}> Close </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}