import { Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import axios from "axios";
import { Formik } from 'formik';
import React, { useState } from "react";
import { HowTag, Tag, WhatTag, WhenTag, WhereTag, WhoTag, Tags } from "../../../common/generated/services/tag/tag_pb";
import { ProtoUtils } from "../../../common/utils/protoUtils";
import { BibleAPI } from "../../../common/utils/bibleAPI";
import { DateTime } from '../../../common/utils/dateTime';
import { VerseSelection } from '../reader/VerseSelection';


type TagFactoryProps = {
    tagType: string | undefined,
    book: number,
    chapter: number,
    verseSelections: Array<VerseSelection>,
    cleanSelection: () => void
}


interface TagValues {
    type: string,
    subtype: string,
    what: string,
    whatDetails: string,

    who: number,

    where: string,
    latitude: number,
    longitude: number,

    year: number,

    how: string,
    howDetails: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                wnameth: '30em',
            },

        },
    }),
);

export const TagFactory: React.FunctionComponent<TagFactoryProps> = props => {

    const [tagType, setTagType] = useState<string>();

    const postTags = (tags: Tags) => {
        axios.post(BibleAPI.url + "tag", {
            tagbuff: ProtoUtils.serialize(tags)
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const createTags = (values: TagValues) => {
        let tags = new Tags()
        props.verseSelections.forEach(selection => {
            tags.getTagsList().push(createTag(values, selection))
        })
        postTags(tags)
        props.cleanSelection()
    }

    /** Create the tag */
    const createTag = (values: TagValues, selection: VerseSelection): Tag => {
        let tag = new Tag()

        // FIXME when log is activated
        tag.setOwner(1)

        tag.setCreated(DateTime.current())
        tag.setModified(DateTime.current())

        tag.setBook(props.book)
        tag.setChapter(props.chapter)
        tag.setStart(selection.getStartId())
        tag.setEnd(selection.getEndId())

        if (values.type)
            tag.setType(values.type)
        if (values.subtype)
            tag.setSubtype(values.subtype)

        switch (props.tagType) {
            case "what":
                let whattag = new WhatTag()
                whattag.setWhat(values.what)
                if (values.whatDetails)
                    whattag.setDetails(values.whatDetails)
                tag.setWhattag(whattag)
                break;

            case "who":
                let whotag = new WhoTag()
                whotag.setWho(values.who)
                tag.setWhotag(whotag)
                break;

            case "where":
                let wheretag = new WhereTag()
                wheretag.setWhere(values.where)
                if (values.longitude)
                    wheretag.setLongitude(values.longitude)
                if (values.latitude)
                    wheretag.setLatitude(values.latitude)
                tag.setWheretag(wheretag)
                break;

            case "when":
                let when = new WhenTag()
                when.setYear(values.year)
                tag.setWhentag(when)
                break;

            case "how":
                let howtag = new HowTag()
                howtag.setHow(values.how)
                if (values.howDetails)
                    howtag.setDetails(values.howDetails)
                tag.setHowtag(howtag)
                break;
        }

        return tag;
    }



    const renderTagType = (handleChange: any) => {
        switch (tagType) {
            case 'what':
                return (
                    <div className="tag-factory-what">
                        <TextField required name="what" label="What" variant="filled" defaultValue=""
                            onChange={handleChange} />
                        <TextField multiline name="what-details" label="Details" variant="filled" defaultValue=""
                            onChange={handleChange} />

                    </div>
                );

            case 'who':
                return (
                    <div className="tag-factory-who">
                        <TextField required name="who" type="number" label="Who" variant="filled" defaultValue=""
                            onChange={handleChange} />
                    </div>
                );

            case 'where':
                return (
                    <div className="tag-factory-where">
                        <TextField required name="where" label="Where" variant="filled" defaultValue=""
                            onChange={handleChange} />
                        <TextField name="latitude" type="number" variant="filled" label="Latitude" defaultValue=""
                            onChange={handleChange} />
                        <TextField name="longitude" type="number" variant="filled" label="Longitude" defaultValue=""
                            onChange={handleChange} />
                    </div>
                );

            case 'when':
                return (
                    <div className="tag-factory-when">
                        <TextField name="year" type="number" variant="filled" label="Year" defaultValue=""
                            onChange={handleChange} />
                    </div>
                );

            case 'how':
                return (
                    <div className="tag-factory-how">
                        <TextField required name="how" label="How" variant="filled" defaultValue=""
                            onChange={handleChange} />
                        <TextField multiline name="how-details" label="Details" variant="filled" defaultValue=""
                            onChange={handleChange} />

                    </div>
                );

            default:
                return null
        }
    }

    const classes = useStyles();

    if (props.tagType !== undefined) {

        if (props.tagType !== tagType)
            setTagType(props.tagType)

        const initialValues: TagValues = {
            type: '',
            subtype: '',
            what: '',
            whatDetails: '',
            who: 0,
            where: '',
            latitude: 0,
            longitude: 0,
            year: 0,
            how: '',
            howDetails: ''
        };

        return (
            <div className={classes.root}>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => createTags(values)}>
                    {(props: any) => {
                        const {
                            values,
                            handleChange,
                            handleSubmit,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    name="type"
                                    label="Type"
                                    variant="filled"
                                    defaultValue={values.type}
                                    onChange={handleChange} />

                                <TextField
                                    name="subtype"
                                    label="Sub Type"
                                    variant="filled"
                                    defaultValue={values.subtype}
                                    onChange={handleChange} />

                                {renderTagType(handleChange)}

                                <Button type="submit" variant="contained" className="button-submit">
                                    Create
                        </Button>
                            </form>
                        )
                    }}
                </Formik >
            </div>
        );
    } else return null;
}