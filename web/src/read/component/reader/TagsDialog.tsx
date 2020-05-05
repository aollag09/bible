
import { DialogContent, DialogTitle, Divider } from "@material-ui/core"
import React from "react"
import { Tag } from "../../../common/generated/services/tag/tag_pb"
import { StringUtils } from "../../../common/utils/stringUtils"
import { TagCaseUtils } from "../../../common/utils/tagCaseUtils"
import { TagDialogField } from "./TagDialogField"

type TagsDialogProps = {
    tags: Array<Tag>
}

export const TagsDialog: React.FunctionComponent<TagsDialogProps> = (props) => {

    const tagsElts: JSX.Element[] = []
    props.tags.forEach(tag => {

        const tagSpecifics: JSX.Element[] = []

        switch (+tag.getTagCase()) {

            case Tag.TagCase.WHATTAG:
                tagSpecifics.push(<TagDialogField key={tag.getId() + "what"} field="what" value={tag.getWhattag()?.getWhat()} />)
                tagSpecifics.push(<TagDialogField key={tag.getId() + "details"} field="details" value={tag.getWhattag()?.getDetails()} />)
                break;
            case Tag.TagCase.WHOTAG:
                tagSpecifics.push(<TagDialogField key={tag.getId() + "who"} field="who" value={tag.getWhotag()?.getWho().toString()!} />)
                break;
            case Tag.TagCase.WHERETAG:
                tagSpecifics.push(<TagDialogField key={tag.getId() + "where"} field="where" value={tag.getWheretag()?.getWhere()!} />)
                tagSpecifics.push(<TagDialogField key={tag.getId() + "latitude"} field="latitude" value={tag.getWheretag()?.getLatitude().toString()!} />)
                tagSpecifics.push(<TagDialogField key={tag.getId() + "longitude"} field="longitude" value={tag.getWheretag()?.getLongitude().toString()} />)
                break;
            case Tag.TagCase.WHENTAG:
                tagSpecifics.push(<TagDialogField key={tag.getId() + "year"} field="year" value={tag.getWhentag()?.getYear().toString()} />)
                break;
            case Tag.TagCase.HOWTAG:
                tagSpecifics.push(<TagDialogField key={tag.getId() + "how"} field="how" value={tag.getHowtag()?.getHow()} />)
                tagSpecifics.push(<TagDialogField key={tag.getId() + "howdetails"} field="details" value={tag.getHowtag()?.getDetails()} />)
                break;
        }


        tagsElts.push(
            <div key={tag.getId()}>
                <DialogTitle> {StringUtils.capitalize(TagCaseUtils.getStringName(tag.getTagCase()))} Tag</DialogTitle>

                <TagDialogField key={tag.getId() + "type"} field="type" value={tag.getType()} />
                <TagDialogField key={tag.getId() + "subtype"} field="subtype" value={tag.getSubtype()} />
                <TagDialogField key={tag.getId() + "start"} field="start" value={tag.getStart()} />
                <TagDialogField key={tag.getId() + "end"} field="end" value={tag.getEnd()} />
                <TagDialogField key={tag.getId() + "created"} field="created" value={new Date(tag.getCreated()).toUTCString()} />
                <TagDialogField key={tag.getId() + "modified"} field="modified" value={new Date(tag.getModified()).toUTCString()} />
                {tagSpecifics}
            </div>
        )
    })


    return (
        <div className="tag-dialog-container">
            <DialogContent>

                {tagsElts}
            </DialogContent>


        </div>
    )

}