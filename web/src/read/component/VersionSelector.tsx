import React from "react";
import { VersionTable } from "./VersionTable";
import { SelectorStepProp } from "./Selector";

export class VersionSelector extends React.Component<SelectorStepProp> {

    render() {
        if (this.props.step === 1) {
            return (
                <div className="version-selector">
                    <h2>Versions</h2>
                    <VersionTable />
                </div>
            );
        } else {
            return null
        }
    }

}