import React, { Component } from "react";
import { TagToggle } from "./TagToggle";
import CloseIcon from '@material-ui/icons/Close';
import { TaggerForm } from "./TaggerForm";
import { TaggerSelection } from "./TaggerSelection";

type TaggerBarProp = {
    showTagger: boolean,
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
    cleanSelection: () => void
}


export class TaggerBar extends Component<TaggerBarProp>{

    render() {
        return (
            <div className={this.getClassName(this.props.showTagger)}>
                <button
                    className="tagger-close-button"
                    onClick={this.props.cleanSelection}>
                    <CloseIcon
                        aria-label="close tagger bar"
                        fontSize="large"
                        className="tagger-close-button-image">
                    </CloseIcon>
                </button>

                <TaggerSelection
                    book={this.props.book}
                    chapter={this.props.chapter}
                    start={this.props.start}
                    end={this.props.end}
                />

                <TaggerForm
                    book={this.props.book}
                    chapter={this.props.chapter}
                    start={this.props.start}
                    end={this.props.end} />
            </div>
        );
    }

    getClassName(showTagger: boolean) {
        if (showTagger)
            return "tagger-sidebar tagger-sidebar-opened"
        else
            return "tagger-sidebar tagger-sidebar-closed"
    }

}