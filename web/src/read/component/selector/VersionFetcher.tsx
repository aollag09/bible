import useFetch from 'fetch-suspense';
import { Message } from "google-protobuf";
import React, { Component } from "react";
import { Versions } from "../../../common/generated/services/version/version_pb";
import { BibleAPI } from "../../../common/utils/bibleAPI";
import '../../resources/style/read.css';
import { VersionBox } from "./VersionBox";


type FetchingVersionsProp = {
    handleVersionSelect: (id: number) => void
}

export class FetchingVersions extends Component<FetchingVersionsProp> {

    getLanguages(versions: Versions): Array<string> {
        let languages = new Array<string>()
        versions.getVersionsList().forEach(version => {
            let language = version.getLanguage()
            if (!languages.includes(language))
                languages.push(language)
        })
        return languages;
    }


    render() {
        const response = useFetch(BibleAPI.url + "version/");
        const versions = Versions.deserializeBinary(Message.bytesAsU8(response.toString()))

        let languages = this.getLanguages(versions);
        let tableLanguages: JSX.Element[] = []
        languages.forEach(language => {
            let column: JSX.Element[] = []

            column.push(
                <thead className="version-language-td">
                    <span className="version-language">
                        {language}
                    </span>
                </thead>)

            let listVersion: JSX.Element[] = []
            versions.getVersionsList().forEach(version => {
                if (version.getLanguage() === language) {
                    listVersion.push(<li>
                        <VersionBox
                            key={version.getId()}
                            name={version.getVersion()}
                            abbreviation={version.getAbbreviation()}
                            onClick={() => this.props.handleVersionSelect(version.getId())} />
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