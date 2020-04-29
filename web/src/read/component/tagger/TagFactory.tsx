import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';


type TagFactoryProps = {
    tagType: string | null,
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
}

export const TagFactory: React.FunctionComponent<TagFactoryProps> = props => {

    const [type, setType] = useState<string>();
    const [subtype, setSubtype] = useState<string>();

    const [what, setWhat] = useState<string>();
    const [whatDetails, setWhatDetails] = useState<string>();

    const [who, setWho] = useState<string>();

    const [where, setWhere] = useState<string>();
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();

    const [year, setYear] = useState<number>();

    const [how, setHow] = useState<string>();
    const [howDetails, setHowDetails] = useState<string>()

    const renderTagType = (tagType: string) => {
        switch (tagType) {
            case 'what':
                return (
                    <div className="tag-factory-what">
                        <TextField required id="what" label="What" variant="filled" defaultValue=""
                            onChange={(event => { setWhat(event.target.value) })} />
                        <TextField multiline id="what-details" label="Details" variant="filled" defaultValue=""
                            onChange={(event => { setWhatDetails(event.target.value) })} />

                    </div>
                );

            case 'who':
                return (
                    <div className="tag-factory-who">
                        <TextField required id="who" label="Who" variant="filled" defaultValue=""
                            onChange={(event => { setWho(event.target.value) })} />
                    </div>
                );

            case 'where':
                return (
                    <div className="tag-factory-where">
                        <TextField required id="where" label="Where" variant="filled" defaultValue=""
                            onChange={(event => { setWhere(event.target.value) })} />
                        <TextField id="latitude" type="number" variant="filled" label="Latitude" defaultValue=""
                            onChange={(event => { setLatitude(parseInt(event.target.value)) })} />
                        <TextField id="longitude" type="number" variant="filled" label="Longitude" defaultValue=""
                            onChange={(event => { setLongitude(parseInt(event.target.value)) })} />
                    </div>
                );

            case 'when':
                return (
                    <div className="tag-factory-when">
                        <TextField id="year" type="number" variant="filled" label="Year" defaultValue=""
                            onChange={(event => { setYear(parseInt(event.target.value)) })} />
                    </div>
                );

            case 'how':
                return (
                    <div className="tag-factory-how">
                        <TextField required id="how" label="How" variant="filled" defaultValue=""
                            onChange={(event => { setHow(event.target.value) })} />
                        <TextField multiline id="how-details" label="Details" variant="filled" defaultValue=""
                            onChange={(event => { setHowDetails(event.target.value) })} />

                    </div>
                );

            default:
                return null
        }
    }

    /** Create the tag */
    const create = () => {

    }

    if (props.tagType) {

        return (
            <div className="tag-factory">
                <div className="tag-factory-form">

                    <TextField id="type" label="Type" variant="filled" defaultValue=""
                        onChange={(event => { setType(event.target.value) })} />
                    <TextField id="subtype" label="Sub Type" variant="filled" defaultValue=""
                        onChange={(event => { setSubtype(event.target.value) })} />

                    {renderTagType(props.tagType)}

                    <Button type="submit" className="button-submit" >
                        Create
                    </Button>
                </div>

            </div>
        );
    } else return null;
}