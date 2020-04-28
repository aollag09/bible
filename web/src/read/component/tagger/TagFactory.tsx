import React from "react";
import { TextField } from '@material-ui/core';


type TagFactoryProps = {
    tagType: string | null,
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
}

export const TagFactory: React.FunctionComponent<TagFactoryProps> = props => {

    const getVerseNb = (verseId: string | null) => {
        if (verseId)
            return parseInt(verseId.slice(-3))
        else
            return 0;
    }


    if (props.tagType) {

        return (
            <div className="tag-factory">
                <form className="tag-factory-form">

                    <TextField disabled id="filled-disabled-number" label="Book" defaultValue={props.book} />
                    <TextField disabled id="filled-disabled-number" label="Chapter" defaultValue={props.chapter} />

                    <TextField disabled id="filled-disabled" label="Start" defaultValue={getVerseNb(props.start)} />
                    <TextField disabled id="filled-disabled" label="End" defaultValue={getVerseNb(props.end)} />

                    <TextField id="filled" label="Type" defaultValue="" />
                    <TextField id="filled" label="Sub Type" defaultValue="" />

                    <TextField required id="filled" label="Sub Type" defaultValue="" />



                </form>

            </div>
        );
    } else return null;
}