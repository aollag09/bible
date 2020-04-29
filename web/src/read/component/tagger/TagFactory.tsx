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


    if (props.tagType) {

        return (
            <div className="tag-factory">
                <div className="tag-factory-form">


                    <TextField id="type" label="Type" variant="filled" defaultValue="" />
                    <TextField id="subtype" label="Sub Type" variant="filled" defaultValue="" />
                    <TextField required id="filled" label="Sub Type" defaultValue="" />

                </div>

            </div>
        );
    } else return null;
}