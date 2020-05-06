
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from "@material-ui/core";
import LabelIcon from '@material-ui/icons/Label';
import React, { useState } from "react";
import { Tag } from "../../../common/generated/services/tag/tag_pb";
import { StringUtils } from "../../../common/utils/stringUtils";
import { TagCaseUtils } from "../../../common/utils/tagCaseUtils";
import { TagsDialog } from "./TagsDialog";

type TagIconProp = {
    tags: Array<Tag>
}

export const TagIcon: React.FunctionComponent<TagIconProp> = (props) => {

    const [open, setOpen] = useState<boolean>(false);

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
            tooltip += StringUtils.capitalize(TagCaseUtils.getStringName(key)) + ": " + val.toString() + " "
        })
        return tooltip;
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div className="tag-label-icon-container">
            <Tooltip title={getToolTip()} onClick={handleOpen} aria-label="nb-tags" placement="top">
                <LabelIcon className="tag-label-icon" />
            </Tooltip>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="scroll-dialog-title">Tags</DialogTitle>
                <DialogContent dividers={true}>
                    <TagsDialog tags={props.tags} handleClose={handleClose} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}> Close </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}