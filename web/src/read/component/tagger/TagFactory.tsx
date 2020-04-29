import React from "react";
import { TextField, Button } from '@material-ui/core';


type TagFactoryProps = {
    tagType: string | null,
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
}

export const TagFactory: React.FunctionComponent<TagFactoryProps> = props => {

    const renderTagType = (tagType: string) => {
        switch (tagType) {
            case 'what':
                return (
                    <div className="tag-factory-what">
                        <TextField required id="what" label="What" variant="filled" defaultValue="" />
                        <TextField multiline id="what-details" label="Details" variant="filled" defaultValue="" />

                    </div>
                );

            case 'who':
                return (
                    <div className="tag-factory-who">
                        <TextField required id="who" label="Who" variant="filled" defaultValue="" />
                    </div>
                );

            case 'where':
                return (
                    <div className="tag-factory-where">
                        <TextField required id="where" label="What" variant="filled" defaultValue="" />
                        <TextField id="latitude" type="number" variant="filled" label="Latitude" defaultValue="" />
                        <TextField id="longitude" type="number" variant="filled" label="Longitude" defaultValue="" />
                    </div>
                );

            case 'when':
                return (
                    <div className="tag-factory-when">
                        <TextField id="year" type="number" variant="filled" label="Year" defaultValue="" />
                    </div>
                );

            case 'how':
                return (
                    <div className="tag-factory-how">
                        <TextField required id="how" label="How" variant="filled" defaultValue="" />
                        <TextField multiline id="how-details" label="Details" variant="filled" defaultValue="" />

                    </div>
                );

            default:
                return null
        }
    }

    if (props.tagType) {

        return (
            <div className="tag-factory">
                <div className="tag-factory-form">


                    <TextField id="type" label="Type" variant="filled" defaultValue="" />
                    <TextField id="subtype" label="Sub Type" variant="filled" defaultValue="" />

                    {renderTagType(props.tagType)}


                    <Button > Create </Button>
                </div>

            </div>
        );
    } else return null;
}