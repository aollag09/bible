import React, { Component } from "react";


type VersionSplashProps = {
    key: number,
    name: string,
    abbreviation: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}


export class VersionSplash extends Component<VersionSplashProps> {

    render() {
        return (
            <button className="version-splash-box" onClick={this.props.onClick}>
                    <span className="version-splash-abbreviation">{this.props.abbreviation}</span>
                    <br />
                    <span className="version-splash-name">{this.props.name}</span>
            </button>
        );
    }

}