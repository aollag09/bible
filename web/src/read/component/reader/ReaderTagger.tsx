import React, { Component } from "react";
import "../../resources/style/read.css";
import "../../resources/style/tagger.css";
import { ReaderSelector } from "../ReaderSelector";
import { TaggerBar } from '../tagger/TaggerBar';
import { Reader } from "./Reader";

type ReaderTaggerProp = {
    switch: string,
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}

type ReaderTaggerState = {
    showTagger: boolean
}

export class ReaderTagger extends Component<ReaderTaggerProp, ReaderTaggerState>{


    constructor(props: ReaderTaggerProp) {
        super(props)
        this.state = {
            showTagger: true
        }
    }

    setShowTagger() {
        const show = this.state.showTagger
        this.setState({
            showTagger: !show
        })
    }


    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {

            return (
                <div className="reader-tagger">
                    <TaggerBar showTagger={this.state.showTagger}></TaggerBar>

                    <Reader
                        showTagger={this.state.showTagger}
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter}
                        read={this.props.read}>
                    </Reader>

                    <button onClick={() => this.setShowTagger()}>Tagger</button>
                </div >
            )
        } else {
            return null;
        }
    }

    scrollTop() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        this.scrollTop()
    }


}