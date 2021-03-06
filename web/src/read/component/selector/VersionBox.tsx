import React, {Component} from "react";


type VersionBoxProps = {
    key: number,
    name: string,
    abbreviation: string,
    onClick: () => void
}


export class VersionBox extends Component<VersionBoxProps> {

    render() {
        return (
            <div
                className="version-box-box"
                onClick={this.props.onClick}>
                <span className="version-box-abbreviation">{this.props.abbreviation}</span>
                <br/>
                <span className="version-box-name">{this.props.name}</span>
            </div>
        );
    }

}