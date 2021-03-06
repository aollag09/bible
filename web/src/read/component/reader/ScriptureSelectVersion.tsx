import React from "react";
import {Version, Versions} from "../../../common/generated/services/version/version_pb";
import {Message} from "google-protobuf";
import useFetch from 'fetch-suspense'
import {BibleAPI} from "../../../common/utils/bibleAPI";
import {Key} from "../../../common/utils/key";
import {StringUtils} from "../../../common/utils/stringUtils";

type ScriptureSelectVersionProp = {
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}


export class ScriptureSelectVersion
    extends React.Component<ScriptureSelectVersionProp> {

    private versions: Versions;

    constructor(props: ScriptureSelectVersionProp) {
        super(props)
        this.versions = this.fetchVersions()
    }

    render() {

        let options: JSX.Element[] = []
        this.versions.getVersionsList().forEach(v => {
            options.push(<option
                key={Key.getKey("version", v.getId())}
                className="scripture-select-option"
                value={v.getId()}> {this.getOptionName(v)}
            </option>)
        })

        return (
            <div className="scripture-select scripture-version-select">
                <select
                    onChange={this.handleChange}
                    value={this.props.version}>
                    {options}
                </select>

            </div>
        )
    }

    private getOptionName(version: Version): string {
        return StringUtils.capitalize(version.getLanguage()) + " - " + version.getAbbreviation()
    }

    private fetchVersions(): Versions {
        const response = useFetch(BibleAPI.url + "version/");
        return Versions.deserializeBinary(Message.bytesAsU8(response.toString()))
    }

    private handleChange = (selection: any) => {
        if (selection.target.value)
            this.props.read(selection.target.value, this.props.book, this.props.chapter)
    }

}





