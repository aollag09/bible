import React from "react"
import { Grid, makeStyles } from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));

type NoteToggleProp = {

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
                            value="what"
                            aria-label="tag type what">
                            <p>Comment</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="who"
                            aria-label="tag type who">
                            <p>Question</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="where"
                            aria-label="tag type where">
                            <p>Prayer</p>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
        </div>
    )
}