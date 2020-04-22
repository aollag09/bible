import React from "react";
import { Versions, Version } from "../../../common/generated/services/version/version_pb";
import { Message } from "google-protobuf";
import useFetch from 'fetch-suspense'
import { BibleAPI } from "../../../common/utils/bibleAPI";

type ScriptureSelectVersionProp = {
    version: number,
    read: (version: number, book: number, chapter: number) => void
}

type ScriptureSelectVersionState = {
    versions: Versions
}

export class ScriptureSelectVersion
    extends React.Component<ScriptureSelectVersionProp, ScriptureSelectVersionState>{

    constructor(props: ScriptureSelectVersionProp) {
        super(props)

        this.state = {
            versions: this.fetchVersions()
        }
    }

    render() {

        let options: JSX.Element[] = []
        this.state.versions.getVersionsList().forEach(v => {
            options.push(<option value={v.getId()}> {this.getOptionName(v)} </option>)
        })

        return (
            <div className="scripture-version-select" >
                <select
                    onChange={this.handleChange}
                    value={this.props.version} >

                </select>

            </div>
        )
    }

    private getOptionName(version: Version): string {
        return version.getLanguage() + " - " + version.getAbbreviation()
    }


    private getVersion(id: number): Version | undefined {
        let version: Version | undefined = undefined;
        this.state.versions.getVersionsList().forEach(v => {
            if (v.getId() === id)
                version = v
        });
        return version;
    }

    private fetchVersions(): Versions {
        const response = useFetch(BibleAPI.url + "version/");
        return Versions.deserializeBinary(Message.bytesAsU8(response.toString()))
    }

    private handleChange() {

    }




}





