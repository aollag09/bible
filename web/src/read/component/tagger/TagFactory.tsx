import { Button, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';
import axios from "axios";
import React, { useState } from "react";
import { HowTag, Tag, WhatTag, WhenTag, WhereTag, WhoTag } from "../../../common/generated/services/tag/tag_pb";
import { ProtoUtils } from "../../../common/ProtoUtils";
import { BibleAPI } from "../../../common/utils/bibleAPI";

type TagFactoryProps = {
    tagType: string | null,
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
}

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

export const TagFactory: React.FunctionComponent<TagFactoryProps> = props => {

    const [type, setType] = useState<string>();
    const [subtype, setSubtype] = useState<string>();

    const [what, setWhat] = useState<string>();
    const [whatDetails, setWhatDetails] = useState<string>();

    const [who, setWho] = useState<number>();

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
                        <TextField required id="who" type="number" label="Who" variant="filled" defaultValue=""
                            onChange={(event => { setWho(parseInt(event.target.value)) })} />
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

    const getPath = (tagcase: Tag.TagCase): string => {
        switch (+tagcase) {
            case Tag.TagCase.WHATTAG:
                return "what"
            case Tag.TagCase.WHOTAG:
                return "who"
            case Tag.TagCase.WHERETAG:
                return "where"
            case Tag.TagCase.WHENTAG:
                return "when"
            case Tag.TagCase.HOWTAG:
                return "how"
            default:
                return "invalid"
        }
    }

    const createTag = (tag: Tag) => {
        axios.post(BibleAPI.url + "tag/" + getPath(tag.getTagCase()), {
            tagbuff: ProtoUtils.serialize(tag)
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }


    /** Create the tag */
    const create = () => {
        let tag = new Tag()

        tag.setBook(props.book)
        tag.setChapter(props.chapter)
        tag.setStart(props.start!)
        tag.setEnd(props.end!)

        if (type)
            tag.setType(type)
        if (subtype)
            tag.setSubtype(subtype)

        switch (props.tagType) {
            case "what":
                let whattag = new WhatTag()
                whattag.setWhat(what!)
                if (whatDetails)
                    whattag.setDetails(whatDetails)
                tag.setWhattag(whattag)
                break;

            case "who":
                let whotag = new WhoTag()
                whotag.setWho(who!)
                tag.setWhotag(whotag)
                break;

            case "where":
                let wheretag = new WhereTag()
                wheretag.setWhere(where!)
                if (longitude)
                    wheretag.setLongitude(longitude)
                if (latitude)
                    wheretag.setLatitude(latitude)
                tag.setWheretag(wheretag)
                break;

            case "when":
                let when = new WhenTag()
                when.setYear(year!)
                tag.setWhentag(when)
                break;

            case "how":
                let howtag = new HowTag()
                howtag.setHow(how!)
                if (howDetails)
                    howtag.setDetails(howDetails)
                tag.setHowtag(howtag)
                break;
        }

        console.log(JSON.stringify(tag, null, 3))
        createTag(tag)
    }

    const classes = useStyles();

    if (props.tagType) {

        return (
            <form className={classes.root} onSubmit={create}>
                <div className="tag-factory">
                    <div className="tag-factory-form">

                        <TextField id="type" label="Type" variant="filled" defaultValue=""
                            onChange={(event => { setType(event.target.value) })} />
                        <TextField id="subtype" label="Sub Type" variant="filled" defaultValue=""
                            onChange={(event => { setSubtype(event.target.value) })} />

                        {renderTagType(props.tagType)}

                        <Button type="submit" className="button-submit">
                            Create
                        </Button>

                    </div>
                </div>
            </form>
        );
    } else return null;
}