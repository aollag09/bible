import React, { Component } from "react";
import { VersionSelector } from "./VersionSelector";
import { BookSelector } from "./BookSelector";
import { ChapterSelector } from "./ChapterSelector";
import { ReaderSelectorConst } from "../ReaderSelector"

type SelectorProp = {
    switch: string,
    read: (version: number, book: number, chapter: number) => void
}

type SelectorState = {
    step: number,
    version: number,
    book: number,
    chapter: number
}

export class Selector extends Component<SelectorProp, SelectorState> {

    constructor(props: SelectorProp) {
        super(props)
        this.state = {
            step: 1,
            version: 0,
            book: 0,
            chapter: 0,
        }
    }

    handleVersionSelect(newVersion: number) {
        this.setState({
            version: newVersion
        })
        this.next()
    }

    handleBookSelect(newBook: number) {
        this.setState({
            book: newBook
        })
        this.next()
    }

    handleChapterSelect(newChapter: number) {
        this.setState({ chapter: newChapter }, this.handleSubmit)
    }

    next = () => {
        let step = this.state.step
        step = step >= 2 ? 3 : step + 1
        this.setState({
            step: step
        })

    }

    prev = () => {
        let step = this.state.step
        step = step <= 1 ? 1 : step - 1
        this.setState({
            step: step
        })
    }

    prevButton() {
        let step = this.state.step;
        if (step !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    handleSubmit = () => {
        const { version, book, chapter } = this.state
        // Reset state
        this.setState({
            step: 1
        })
        this.props.read(version, book, chapter)
    }

    render() {
        if (this.props.switch === ReaderSelectorConst.SWITCH_SELECTOR) {
            return (
                <div className="selector">
                    <VersionSelector
                        step={this.state.step}
                        handleVersionSelect={(id) => this.handleVersionSelect(id)} />

                    <BookSelector
                        step={this.state.step}
                        handleBookSelect={(id) => this.handleBookSelect(id)} />

                    <ChapterSelector
                        step={this.state.step}
                        book={this.state.book}
                        handleChapterSelect={(id) => this.handleChapterSelect(id)} />

                    {this.prevButton()}
                </div>
            );
        } else {
            return null;
        }
    }
}