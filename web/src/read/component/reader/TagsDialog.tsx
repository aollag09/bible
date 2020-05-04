
import { DialogContent, DialogTitle } from "@material-ui/core"
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
                tagSpecifics.push(<TagDialogField field="what" value={tag.getWhattag()?.getWhat()} />)
                tagSpecifics.push(<TagDialogField field="details" value={tag.getWhattag()?.getDetails()} />)
                break;
            case Tag.TagCase.WHOTAG:
                tagSpecifics.push(<TagDialogField field="who" value={tag.getWhotag()?.getWho().toString()!} />)
                break;
            case Tag.TagCase.WHERETAG:
                tagSpecifics.push(<TagDialogField field="where" value={tag.getWheretag()?.getWhere()!} />)
                tagSpecifics.push(<TagDialogField field="latitude" value={tag.getWheretag()?.getLatitude().toString()!} />)
                tagSpecifics.push(<TagDialogField field="longitude" value={tag.getWheretag()?.getLongitude().toString()} />)
                break;
            case Tag.TagCase.WHENTAG:
                tagSpecifics.push(<TagDialogField field="year" value={tag.getWhentag()?.getYear().toString()} />)
                break;
            case Tag.TagCase.HOWTAG:
                tagSpecifics.push(<TagDialogField field="how" value={tag.getHowtag()?.getHow()} />)
                tagSpecifics.push(<TagDialogField field="details" value={tag.getHowtag()?.getDetails()} />)
                break;
        }


        tagsElts.push(
            <div>
                <DialogTitle> {StringUtils.capitalize(TagCaseUtils.getStringName(tag.getTagCase()))} Tag</DialogTitle>

                <TagDialogField field="type" value={tag.getType()} />
                <TagDialogField field="subtype" value={tag.getSubtype()} />
                <TagDialogField field="start" value={tag.getStart()} />
                <TagDialogField field="end" value={tag.getEnd()} />
                <TagDialogField field="created" value={new Date(tag.getCreated()).toUTCString()} />
                <TagDialogField field="modified" value={new Date(tag.getModified()).toUTCString()} />
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