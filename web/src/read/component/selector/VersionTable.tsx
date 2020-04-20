import React, { Component, Suspense } from "react";
import '../../resources/style/selector.css';
import { VersionFetcher } from "./VersionFetcher";
import { Loading } from "../../../common/utils/component/Loading";

type VersionTableProp = {
    handleVersionSelect: (id: number) => void
}

export class VersionTable extends Component<VersionTableProp> {

    render() {
        return (
            <div className="version-table" >
                <Suspense fallback={<Loading text="Loading versions ..." />} >
                    <VersionFetcher handleVersionSelect={this.props.handleVersionSelect} />
                </Suspense>
            </div>
        );
    }
}


