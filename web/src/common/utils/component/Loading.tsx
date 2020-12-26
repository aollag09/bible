import React, {Component} from "react";
import loadingGif from '../resources/image/loading.gif'
import '../resources/style/loading.css'

type LoadingProp = {
    text: string
}

export class Loading extends Component<LoadingProp> {

    render() {
        return (
            <div className="loading">
                <div className="loading-image">
                    <img alt="loading gif" src={loadingGif}></img>
                </div>
                <div className="loading-text">
                    <p> {this.props.text}</p>
                </div>
            </div>
        );
    }
}