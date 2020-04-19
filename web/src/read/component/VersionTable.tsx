import React, { Component } from "react";
import '../resources/style/read.css'
import { Message } from "google-protobuf";
import { API } from "../../common/utils/api";
import { Versions } from "../../common/generated/services/version/version_pb";
import { VersionSplash } from "./VersionSplash";


export class VersionTable extends Component {

    state = {
        versions: []
    }

    render() {
        return (
            <div className="version-table">
                <ul>
                    {this.renderVersions()}
                </ul>>
            </div>
        );
    }

    renderVersions = async () => {
        let versions = await this.fetchVersions()
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

    fetchVersions = async () => {
        let result = await fetch(API.url + "version/")
        let versions = Versions.deserializeBinary(Message.bytesAsU8(result.text.toString()))
        console.log(JSON.stringify(versions))
        return versions;
    }

}