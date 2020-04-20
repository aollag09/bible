import React, { Component } from "react";


type VersionSplashProps = {
    key: number,
    name: string,
    abbreviation: string,
}


export class VersionSplash extends Component<VersionSplashProps> {

    render() {
        return (
            <div className="version-splash-box" >

                    <span className="version-splash-abbreviation">{this.props.abbreviation}</span>
                    <br />
                    <span className="version-splash-name">{this.props.name}</span>

            </div>
        );
    }

}