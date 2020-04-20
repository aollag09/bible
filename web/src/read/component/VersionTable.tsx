import useFetch from 'fetch-suspense';
import { Message } from "google-protobuf";
import React, { Component, Suspense } from "react";
import { Version, Versions } from "../../common/generated/services/version/version_pb";
import { API } from "../../common/utils/api";
import '../resources/style/read.css';
import { VersionSplash } from "./VersionSplash";

export class VersionTable extends Component {

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

    getLanguages(versions: Versions): Array<string> {
        let languages = new Array<string>()
        versions.getVersionsList().forEach(version => {
            let language = version.getLanguage()
            if (!languages.includes(language))
                languages.push(language)
        })
        return languages;
    }

    handleClick(id: number) {
        alert("Click on " + id)
    }

    render() {
        const response = useFetch(API.url + "version/");
        const versions = Versions.deserializeBinary(Message.bytesAsU8(response.toString()))

        let languages = this.getLanguages(versions);
        let tableLanguages: JSX.Element[] = []
        languages.forEach(language => {
            let column: JSX.Element[] = []

            column.push(
                <td className="version-language-td">
                    <span className="version-language">
                        {language}
                    </span>
                </td>)

            let listVersion: JSX.Element[] = []
            versions.getVersionsList().forEach(version => {
                if (version.getLanguage() === language) {
                    listVersion.push(<li>
                        <VersionSplash
                            key={version.getId()}
                            name={version.getVersion()}
                            abbreviation={version.getAbbreviation()}
                            onClick={() => this.handleClick(version.getId())} />
                    </li>)
                }
            });
            column.push(<td className="version-list-language"><ul>{listVersion}</ul></td>)
            tableLanguages.push(<tr>{column}</tr>)
        })

        return (
            <div>
                <table className="version-table">
                    {tableLanguages}
                </table>
            </div>
        );
    }

};
