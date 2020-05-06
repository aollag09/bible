import { Grid, makeStyles } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React from "react";
import { VerseSelection } from "../reader/VerseSelection";
import { NoteFactory } from "./NoteFactory";

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));

type NoteToggleProp = {
    book: number,
    chapter: number,
    verseSelections: Array<VerseSelection>,
    cleanSelection: () => void
}

export const NoteToggle: React.FunctionComponent<NoteToggleProp> = (props) => {


    const [noteType, setNoteType] = React.useState<string | undefined>(undefined);

    const handleNoteType = (event: React.MouseEvent<HTMLElement, MouseEvent>, newNoteType: string | null) => {
        if (newNoteType === noteType || newNoteType === null) {
            setNoteType(undefined)
        } else {
            setNoteType(newNoteType);
        }
    };

    const classes = useStyles();

    return (
        <div className="note-factory">
            <Grid item sm={12} md={12}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup
                        className="tag-factory-toggle-button-group"
                        value={noteType}
                        exclusive
                        onChange={handleNoteType}
                        aria-label="tag type">
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="comment"
                            aria-label="note type comment">
                            <p>Comment</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="question"
                            aria-label="note type question">
                            <p>Question</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="prayer"
                            aria-label="note type prayer">
                            <p>Prayer</p>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
            <NoteFactory
                noteType={noteType}
                book={props.book}
                chapter={props.chapter}
                verseSelections={props.verseSelections}
                cleanSelection={props.cleanSelection} />
        </div>
    )
}