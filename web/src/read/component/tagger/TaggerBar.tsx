import React, { Component } from "react";
import close from "../../resources/image/close.png"

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
                    <img
                        className="tagger-close-button-image"
                        src={close}
                        alt="close"
                    >
                    </img>
                </button>
                <h2> Tagger</h2>
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