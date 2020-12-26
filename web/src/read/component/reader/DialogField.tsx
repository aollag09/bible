import React from "react"
import {TextField} from "@material-ui/core"
import {StringUtils} from "../../../common/utils/stringUtils"

type DialogFieldProps = {
    field: string,
    value: string | undefined
}

export const DialogField: React.FunctionComponent<DialogFieldProps> = (props) => {


    return (
        <TextField
            margin="dense"
            variant="filled"
            id={props.field}
            label={StringUtils.capitalize(props.field)}
            value={props.value}
            fullWidth
            multiline
        />
    )
}