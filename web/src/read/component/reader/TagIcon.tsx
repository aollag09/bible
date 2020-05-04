
import React from "react"
import { Tag } from "../../../common/generated/services/tag/tag_pb"
import LabelIcon from '@material-ui/icons/Label';

type TagIconProp = {
    tags: Array<Tag>
}

export const TagIcon: React.FunctionComponent<TagIconProp> = (props) => {
    return (
        <LabelIcon className="tag-label-icon" />
        )
}