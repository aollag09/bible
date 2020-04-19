import { Message } from "google-protobuf";
import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { Versions, Version } from "../../common/generated/services/version/version_pb";
import { API } from "../../common/utils/api";
import '../resources/style/read.css';
import { VersionSplash } from "./VersionSplash";

export class VersionTable extends Component {

    constructor(props:any){
        super(props)
        this.state = {
            selectedVersion: undefined
        }
    }

    onVersionClick(version: Version) {
        this.setState({
            selectedVersion: version,
        })
    }

    render() {
        return (
            <div className="version-table" >
                <Suspense fallback={<div>Loading ... </div>} >
                    <ul>
                        {this.renderVersions()}
                    </ul> >
                </Suspense>
            </div>
        );
    }

    fetcher = unstable_createResource(() =>
        fetch(API.url + "version/")
            .then(result => Versions.deserializeBinary(Message.bytesAsU8(result.text.toString())))
    );

    listVersions = () => this.fetcher.read(null);

    renderVersions = () => {
        let versions = this.listVersions()
        let versionsSplash: JSX.Element[] = []
        versions.getVersionsList().forEach(version => {

            versionsSplash.push(
                <li>
                    <VersionSplash
                        key={version.getId()}
                        name={version.getVersion()}
                        abbreviation={version.getAbbreviation()}
                        language={version.getLanguage()} />
                </li>)
        });

        return versionsSplash
    }


}