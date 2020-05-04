
import { Tooltip } from "@material-ui/core";
import LabelIcon from '@material-ui/icons/Label';
import React from "react";
import { Tag } from "../../../common/generated/services/tag/tag_pb";
import { TagCaseUtils } from "../../../common/utils/tagCaseUtils";

type TagIconProp = {
    tags: Array<Tag>
}

export const TagIcon: React.FunctionComponent<TagIconProp> = (props) => {

    const capitalize = (s: string) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const getToolTip = () => {
        const map = new Map<Tag.TagCase, number>();
        props.tags.forEach((tag) => {
            const key = tag.getTagCase();
            const counter = map.get(key);
            if (!counter) {
                map.set(key, 1);
            } else {
                map.set(key, counter + 1);
            }
        });

        let tooltip = "";
        map.forEach((val, key) => {
            tooltip += capitalize(TagCaseUtils.getStringName(key)) + ": " + val.toString() + " "
        })
        return tooltip;
    }


    return (
        <div className="tag-label-icon-container">
            <Tooltip title={getToolTip()} aria-label="nb-tags" placement="top">
                <LabelIcon className="tag-label-icon" />
            </Tooltip>
        </div>

    )
}