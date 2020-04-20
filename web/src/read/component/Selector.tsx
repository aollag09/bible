import React from "react";
import { VersionSelector } from "./VersionSelector";
import { BookSelector } from "./BookSelector";


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
        alert("Selector update book with id " + newBook)
        this.next()
    }

    handleChapterSelect(newChapter: number) {
        this.setState({
            chapter: newChapter
        })
        this.next()
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
                <VersionSelector
                    step={this.state.step}
                    handleVersionSelect={(id) => this.handleVersionSelect(id)} />

                <BookSelector
                    step={this.state.step}
                    handleBookSelect={(id) => this.handleBookSelect(id)} />

                {this.prevButton()}
            </div>
        );
    }
}