import React, { Component } from "react";
import '../resources/style/read.css'

type PeriodicBookProps = {
    id: number,
    bigramme: string,
    name: string
}

export class PeriodicBook extends Component<PeriodicBookProps>{

    render() {
        return (
            <div className="periodic-book" >
                <div className="periodic-book-box" >
                    <span className="periodic-book-bigramme">{this.props.bigramme}</span>
                    <p className="periodoc-book-name">{this.props.name}</p>
                </div>

            </div>
        );
    }

}