import React, { Component } from "react";

type TaggerProp = {
    showTagger: boolean,
}


export class TaggerBar extends Component<TaggerProp>{

    render() {
        return (
            <div className={this.getClassName(this.props.showTagger)}>
                <button className="tagger-closebtn">&times;</button>
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