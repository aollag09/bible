import React, { Component } from "react";
import loadingGif from '../resources/image/loading.gif'

type LoadingProp = {
    text: string
}

export class Loading extends Component<LoadingProp>{

    render() {
        return (
            <div className="loading">
                <img alt="loading gif" src={loadingGif}></img>
                <div className="loading-text">
                    <p> {this.props.text}</p>
                </div>
            </div>
        );
    }
}