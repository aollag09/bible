import React from "react";
import {VersionTable} from "./VersionTable";

type VersionSelectorProp = {
    step: number,
    handleVersionSelect: (id: number) => void,
}

export class VersionSelector extends React.Component<VersionSelectorProp> {

    render() {
        if (this.props.step === 1) {
            return (
                <div className="version-selector">
                    <h2>Versions</h2>
                    <VersionTable handleVersionSelect={this.props.handleVersionSelect}/>
                </div>
            );
        } else {
            return null
        }
    }

}