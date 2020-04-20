import { Message } from "google-protobuf";
import React, { Component, Suspense } from "react";
import useFetch from 'fetch-suspense';
import { Versions, Version } from "../../common/generated/services/version/version_pb";
import { API } from "../../common/utils/api";
import '../resources/style/read.css';
import { VersionSplash } from "./VersionSplash";

export class VersionTable extends Component {

    constructor(props: any) {
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
                <Suspense fallback={<div>Loading versions ... </div>} >
                    <FetchingVersions />
                </Suspense>
            </div>
        );
    }


}


export class FetchingVersions extends Component {

    render() {
        const response = useFetch(API.url + "version/");
        const versions = Versions.deserializeBinary(Message.bytesAsU8(response.toString()))
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

};
