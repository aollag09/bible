import {Button, DialogContent, DialogTitle} from "@material-ui/core"
import Axios from "axios"
import React from "react"
import {Tag} from "../../../common/generated/services/tag/tag_pb"
import {BibleAPI} from "../../../common/utils/bibleAPI"
import {StringUtils} from "../../../common/utils/stringUtils"
import {TagCaseUtils} from "../../../common/utils/tagCaseUtils"
import {DialogField} from "./DialogField"
import {DateTimeUtils} from "../../../common/utils/dateTimeUtils"

type TagsDialogProps = {
    tags: Array<Tag>,
    handleClose: () => void
}

export const TagsDialog: React.FunctionComponent<TagsDialogProps> = (props) => {

    const deleteTag = (tagcase: Tag.TagCase, id: number) => {
        Axios.delete(BibleAPI.url + "tag/" + TagCaseUtils.getStringName(tagcase) + "/" + id)
        props.handleClose()
    }

    const tagsElts: JSX.Element[] = []
    props.tags.forEach(tag => {

        const tagSpecifics: JSX.Element[] = []

        switch (+tag.getTagCase()) {

            case Tag.TagCase.WHATTAG:
                tagSpecifics.push(<DialogField key={tag.getId() + "what"} field="what"
                                               value={tag.getWhattag()?.getWhat()}/>)
                tagSpecifics.push(<DialogField key={tag.getId() + "details"} field="details"
                                               value={tag.getWhattag()?.getDetails()}/>)
                break;
            case Tag.TagCase.WHOTAG:
                tagSpecifics.push(<DialogField key={tag.getId() + "who"} field="who"
                                               value={tag.getWhotag()?.getWho().toString()!}/>)
                break;
            case Tag.TagCase.WHERETAG:
                tagSpecifics.push(<DialogField key={tag.getId() + "where"} field="where"
                                               value={tag.getWheretag()?.getWhere()!}/>)
                tagSpecifics.push(<DialogField key={tag.getId() + "latitude"} field="latitude"
                                               value={tag.getWheretag()?.getLatitude().toString()!}/>)
                tagSpecifics.push(<DialogField key={tag.getId() + "longitude"} field="longitude"
                                               value={tag.getWheretag()?.getLongitude().toString()}/>)
                break;
            case Tag.TagCase.WHENTAG:
                tagSpecifics.push(<DialogField key={tag.getId() + "year"} field="year"
                                               value={tag.getWhentag()?.getYear().toString()}/>)
                break;
            case Tag.TagCase.HOWTAG:
                tagSpecifics.push(<DialogField key={tag.getId() + "how"} field="how"
                                               value={tag.getHowtag()?.getHow()}/>)
                tagSpecifics.push(<DialogField key={tag.getId() + "howdetails"} field="details"
                                               value={tag.getHowtag()?.getDetails()}/>)
                break;
        }


        tagsElts.push(
            <div key={tag.getId()}>
                <DialogTitle> {StringUtils.capitalize(TagCaseUtils.getStringName(tag.getTagCase()))} Tag</DialogTitle>

                <DialogField key={tag.getId() + "type"} field="type" value={tag.getType()}/>
                <DialogField key={tag.getId() + "subtype"} field="subtype" value={tag.getSubtype()}/>
                <DialogField key={tag.getId() + "start"} field="start" value={tag.getStart()}/>
                <DialogField key={tag.getId() + "end"} field="end" value={tag.getEnd()}/>
                <DialogField key={tag.getId() + "created"} field="created"
                             value={DateTimeUtils.toDateTime(tag.getCreated()).toUTCString()}/>
                <DialogField key={tag.getId() + "modified"} field="modified"
                             value={DateTimeUtils.toDateTime(tag.getModified()).toUTCString()}/>
                {tagSpecifics}

                <Button onClick={() => deleteTag(tag.getTagCase(), tag.getId())}> Delete </Button>
            </div>
        )
    })


    return (
        <div className="dialog-container">
            <DialogContent>
                {tagsElts}
            </DialogContent>
        </div>
    )

}