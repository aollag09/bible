import React, { Component } from "react";
import { ReaderSelector } from "../ReaderSelector";
import { ScriptureReader } from "./ScriptureReader";
import "../../resources/style/read.css"

type ReaderProp = {
    switch: string,
    version: number,
    book: number,
    chapter: number,
}

type ReaderState = {
    version: number,
    book: number,
    chapter: number,
}

export class Reader extends Component<ReaderProp, ReaderState>{

    constructor(props: ReaderProp){
        super(props)

    }

    next(){
        let next = this.state.chapter + 1
        this.setState({

        })
    }

    previous(){
        
    }

    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {
            return (
                <div className="reader">
                    <ScriptureReader
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter} />
                </div>
            )
        } else {
            return null;
        }
    }
}