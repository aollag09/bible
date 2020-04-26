import useFetch from 'fetch-suspense';
import { Message } from "google-protobuf";
import React, { Component } from "react";
import { Versions } from "../../../common/generated/services/version/version_pb";
import { BibleAPI } from "../../../common/utils/bibleAPI";
import '../../resources/style/selector.css';
import { VersionBox } from "./VersionBox";


type VersionFetcherProp = {
    handleVersionSelect: (id: number) => void
}

export class VersionFetcher extends Component<VersionFetcherProp> {

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
                <td key={this.getKey("language", language)} className="version-language-td">
                    <span className="version-language">
                        {language}
                    </span>
                </td>)

            let listVersion: JSX.Element[] = []
            versions.getVersionsList().forEach(version => {
                if (version.getLanguage() === language) {
                    listVersion.push(<li key={version.getId()}>
                        <VersionBox
                            key={version.getId()}
                            name={version.getVersion()}
                            abbreviation={version.getAbbreviation()}
                            onClick={() => this.props.handleVersionSelect(version.getId())} />
                    </li>)
                }
            });
            column.push(<td key={this.getKey("language-list", language)} className="version-list-language"><ul>{listVersion}</ul></td>)
            tableLanguages.push(<tr key={this.getKey("language-table", language)}>{column}</tr>)
        })

        return (
            <div>
                <table className="version-table">
                    <tbody>
                        {tableLanguages}
                    </tbody>
                </table>
            </div>
        );
    }

    private getKey(prefix: string, value: string): string {
        return "key-" + prefix + "-" + value;
    }

};