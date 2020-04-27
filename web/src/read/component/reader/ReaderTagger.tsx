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
    showReaderSelector: () => void
}

type ReaderTaggerState = {
    showTagger: boolean,
    selectedVerses: Array<string>
}

export class ReaderTagger extends Component<ReaderTaggerProp, ReaderTaggerState>{


    constructor(props: ReaderTaggerProp) {
        super(props)
        this.state = {
            selectedVerses: new Array<string>(),
            showTagger: false
        }
    }


    render() {
        if (this.props.switch === ReaderSelector.SWITCH_READER) {

            return (
                <div className="reader-tagger">
                    <TaggerBar
                        showTagger={this.state.showTagger}
                        cleanSelection={() => this.cleanSelection()}
                    >
                    </TaggerBar>

                    <Reader
                        showTagger={this.state.showTagger}
                        version={this.props.version}
                        book={this.props.book}
                        chapter={this.props.chapter}
                        selectedVerses={this.state.selectedVerses}
                        showReaderSelector={this.props.showReaderSelector}
                        read={(version, book, chapter) => this.read(version, book, chapter)}
                        onSelectVerse={(id) => this.onSelectVerse(id)}>
                    </Reader>

                </div >
            )
        } else {
            return null;
        }
    }

    read(version: number, book: number, chapter: number) {
        this.scrollTop()
        this.cleanSelection()
        this.props.read(version, book, chapter)
    }

    scrollTop() {
        window.scrollTo(0, 0)
    }

    cleanSelection() {
        this.setState({
            selectedVerses: new Array<string>(),
            showTagger: false
        })
    }

    onSelectVerse(id: string) {

        let selected = this.state.selectedVerses.slice()
        const index = selected.indexOf(id, 0)
        if (index > -1)
            selected.splice(index, 1)
        else
            selected.push(id)

        let showTag = selected.length > 0

        this.setState({
            selectedVerses: selected,
            showTagger: showTag
        })
    }

    setShowTagger() {
        const show = this.state.showTagger
        this.setState({
            showTagger: !show
        })
    }



}