import React from "react";
import { VersionSelector } from "./VersionSelector";
import { BookSelector } from "./BookSelector";


export type StepProp = {
    step: number
}

type SelectorState = {
    step: number,
    version: number,
    book: number,
    chapter: number
}

export class Selector extends React.Component<{}, SelectorState> {

    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            step: 1,
            version: 0,
            book: 0,
            chapter: 1,
        }
    }

    handleChangeVersion(newVersion: number) {
        this.setState({
            version: newVersion
        })
    }

    handleChangeBook(newBook: number) {
        this.setState({
            book: newBook
        })
    }

    handleChangeChapter(newChapter: number) {
        this.setState({
            chapter: newChapter
        })
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
                    type="button" onClick={this.prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let step = this.state.step;
        if (step < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this.next}>
                    Next
                </button>
            )
        }
        return null;
    }


    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const { version, book, chapter } = this.state
        alert(`Your registration detail: \n 
               Version: ${version} \n 
               book: ${book} \n
               chapter: ${chapter}`)
    }


    render() {
        return (
            <div className="selector">
                <VersionSelector step={this.state.step} />
                <BookSelector step={this.state.step} />
                {this.prevButton()}
                {this.nextButton()}
            </div>
        );
    }
}