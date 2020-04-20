import React from "react";
import { PeriodicTable } from "./PeriodicTable";

type BookSelectorProp = {
    step: number,
    handleBookSelect: (bookid: number) => void,
}

export class BookSelector extends React.Component<BookSelectorProp> {

    render() {
        if (this.props.step === 2) {
            return (
                <div className="books">
                    <h2>Books</h2>
                    <PeriodicTable handleBookSelect={this.props.handleBookSelect} />
                </div>
            );
        } else {
            return null;
        }
    }

}