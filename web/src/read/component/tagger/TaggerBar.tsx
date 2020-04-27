import React, { Component } from "react";
import TagFactory from "./TagFactory";
import CloseIcon from '@material-ui/icons/Close';

type TaggerProp = {
    showTagger: boolean,
    cleanSelection: () => void
}


export class TaggerBar extends Component<TaggerProp>{

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
                <TagFactory />
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