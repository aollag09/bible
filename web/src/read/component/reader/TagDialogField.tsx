
import React from "react"
import { TextField } from "@material-ui/core"
import { StringUtils } from "../../../common/utils/stringUtils"

type TagDialogFieldProps = {
    field: string,
    value: string | undefined
}

export const TagDialogField: React.FunctionComponent<TagDialogFieldProps> = (props) => {


    return (
        <TextField
            margin="dense"
            variant="filled"
            id={props.field}
            label={StringUtils.capitalize(props.field)}
            value={props.value}
            fullWidth
        />
    )
}