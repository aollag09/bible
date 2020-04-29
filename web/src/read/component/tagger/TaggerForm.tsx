
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import React from "react"
import { TagToggle } from "./TagToggle"

type TaggerFormProp = {
    book: number,
    chapter: number,
    start: string | null,
    end: string | null
}


export const TaggerForm: React.FunctionComponent<TaggerFormProp> = props => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: '30em',
                },
            },
        }),
    );


    const classes = useStyles();

    return (
        <form className={classes.root}>

            <h3> Create Tag</h3>
            <TagToggle
                book={props.book}
                chapter={props.chapter}
                start={props.start}
                end={props.end} />


            <h3> Create Highlight</h3>

            <h3> Create Note</h3>
        </form>
    )


}