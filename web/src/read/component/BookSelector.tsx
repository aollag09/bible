import React from "react";
import { PeriodicTable } from "./PeriodicTable";
import { SelectorStepProp } from "./Selector";


export class BookSelector extends React.Component<SelectorStepProp> {

    render() {
        if (this.props.step === 2) {
            return (
                <div className="books">
                    <h2>Books</h2>
                    <PeriodicTable />
                </div>
            );
        } else {
            return null;
        }
    }

}