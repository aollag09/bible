import React, { Component, Suspense } from "react";
import '../resources/style/read.css';
import { FetchingVersions } from "./VersionFetcher";

type VersionTableProp = {
    handleVersionSelect: (id: number) => void
}

export class VersionTable extends Component<VersionTableProp> {

    render() {
        return (
            <div className="version-table" >
                <Suspense fallback={<div>Loading versions ... </div>} >
                    <FetchingVersions handleVersionSelect={this.props.handleVersionSelect} />
                </Suspense>
            </div>
        );
    }
}


