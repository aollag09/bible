import React, { Component } from "react";
import '../resources/style/read.css'

type PeriodicBookProps = {
    key: number,
    bigramme: string,
    author: string,
    author2?: string,
    nbChapter: number
}

export class PeriodicBook extends Component<PeriodicBookProps>{

    render() {
        return (
            <div className="periodic-book" >
                <div className="periodic-book-box" >
                    <div className="periodic-book-wrapper">

                        <span className="periodic-book-chapter">{this.props.nbChapter} chp</span>
                        <br />
                        <span className="periodic-book-bigramme">{this.props.bigramme}</span>
                        
                        <p>
                            <span className="periodic-book-author">{this.props.author}</span>
                            <br />
                            <span className="periodic-book-author">{this.props.author2}</span>
                        </p>

                    </div>
                </div>

            </div>
        );
    }

}