import React, { Component, Suspense } from "react";
import ErrorBoundary from "react-error-boundary";
import { Loading } from "../../../common/utils/component/Loading";
import '../../resources/style/selector.css';
import { VersionFetcher } from "./VersionFetcher";

type VersionTableProp = {
    handleVersionSelect: (id: number) => void
}

export class VersionTable extends Component<VersionTableProp> {

    render() {
        return (
            <div className="version-table" >
                <Suspense fallback={<Loading text="Loading versions ..." />} >
                    <ErrorBoundary>
                        <VersionFetcher handleVersionSelect={this.props.handleVersionSelect} />
                    </ErrorBoundary>
                </Suspense>
            </div>
        );
    }
}


