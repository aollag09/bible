
import React from "react"
import { Grid } from "@material-ui/core";


type TaggerSelectionProp = {
    book: number,
    chapter: number,
    start: string | null,
    end: string | null
}


export const TaggerSelection: React.FunctionComponent<TaggerSelectionProp> = props => {

    const getVerseNb = (verseId: string | null) => {
        if (verseId)
            return parseInt(verseId.slice(-3))
        else
            return 0;
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
                            <span> Start Verse </span>
                        </Grid>
                        <Grid item xs={3}>
                            <span> {getVerseNb(props.start)}</span>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3} />
                        <Grid item xs={3}>
                            <span> End Verse </span>
                        </Grid>
                        <Grid item xs={3}>
                            <span> {getVerseNb(props.end)}</span>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </div>
        </div>
    );
}