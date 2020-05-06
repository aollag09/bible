import { Button, createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { Note, Notes } from "../../../common/generated/services/note/note_pb";
import { DateTime } from "../../../common/utils/dateTime";
import { VerseSelection } from "../reader/VerseSelection";

export type NoteFactoryProps = {
    noteType: string | undefined,
    book: number,
    chapter: number,
    verseSelections: Array<VerseSelection>,
    cleanSelection: () => void
}

interface NoteValues {
    note: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                wnameth: '40em',
            },

        },
    }),
);



export const NoteFactory: React.FunctionComponent<NoteFactoryProps> = (props) => {



    const postNotes = (notes: Notes) => {

    }

    const createNotes = (values: NoteValues) => {
        let notes = new Notes()
        props.verseSelections.forEach(selection => {
            notes.getNotesList().push(createNote(values, selection))
        })
        postNotes(notes)
        props.cleanSelection()
    }

    const createNote = (values: NoteValues, selection: VerseSelection): Note => {
        const note = new Note()

        // FIXME when log is activated
        note.setOwner(1)

        note.setCreated(DateTime.current())
        note.setModified(DateTime.current())

        note.setBook(props.book)
        note.setChapter(props.chapter)
        note.setStart(selection.getStartId())
        note.setEnd(selection.getEndId())

        return note
    }

    const classes = useStyles();

    if (props.noteType !== undefined) {
        const initialValues: NoteValues = {
            note: ""
        }
        return (
            <div className={classes.root}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => createNotes(values)}>
                    {(props: any) => {
                        const {
                            values,
                            handleChange,
                            handleSubmit,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    multiline required
                                    name="note"
                                    label="Note"
                                    variant="filled"
                                    defaultValue={values.type}
                                    onChange={handleChange} />
                                <br/>
                                <Button type="submit" variant="contained" className="button-submit">
                                    Create
                                </Button>
                            </form>
                        )
                    }}
                </Formik >
            </div>
        )
    } else {
        return null
    }
}