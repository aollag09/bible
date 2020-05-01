
import React from "react"
import { Grid } from "@material-ui/core";
import { VerseSelection } from "../reader/VerseSelection";


type TaggerSelectionProp = {
    book: number,
    chapter: number,
    verseSelections: Array<VerseSelection>,
}

export const TaggerSelection: React.FunctionComponent<TaggerSelectionProp> = props => {


    const getSelectionsString = (): string => {
        let out = ""
        props.verseSelections.forEach(selection => {
            out += selection.toString() + " "
        })
        return out
    }

    return (
        <div className="tagger-selection">
            <h3>Selection </h3>
            <div className="tagger-selection-grid">
                <Grid container spacing={2} justify="center"
                    alignItems="center">
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3} />
                        <Grid item xs={3}>
                            <span> Book </span>
                        </Grid>
                        <Grid item xs={3}>
                            <span> {props.book}</span>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3} />
                        <Grid item xs={3}>
                            <span> Chapter </span>
                        </Grid>
                        <Grid item xs={3}>
                            <span> {props.chapter}</span>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3} />
                        <Grid item xs={3}>
                            <span> Selection </span>
                        </Grid>
                        <Grid item xs={3}>
                            <span> {getSelectionsString()}</span>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </div>
        </div>
    );
}