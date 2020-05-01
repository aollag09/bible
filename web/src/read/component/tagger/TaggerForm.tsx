
import React from "react"
import { TagToggle } from "./TagToggle"

type TaggerFormProp = {
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
    cleanSelection: () => void
}


export const TaggerForm: React.FunctionComponent<TaggerFormProp> = props => {

    return (
        <div className="tagger-form" >
            <h3> Create Tag</h3>
            <TagToggle
                book={props.book}
                chapter={props.chapter}
                start={props.start}
                end={props.end}
                cleanSelection={props.cleanSelection}
                 />

            <h3> Create Highlight</h3>

            <h3> Create Note</h3>
        </div>
    )


}