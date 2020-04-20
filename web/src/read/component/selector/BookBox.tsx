import React, { Component } from "react";
import '../../resources/style/selector.css'

type BookBoxProp = {
    key: number,
    bigramme: string,
    author: string,
    author2?: string,
    nbChapter: number,
    onClick: () => void
}

export class BookBox extends Component<BookBoxProp>{

    render() {
        return (
            <div className="periodic-book" >
                <div className="periodic-book-box" onClick={this.props.onClick}>
                    <div className="periodic-book-wrapper">

                        <span className="periodic-book-chapter">
                            {this.props.nbChapter} chp
                        </span>
                        <br />
                        <span className="periodic-book-bigramme">
                            {this.props.bigramme}
                        </span>

                        <br />
                        <span className="periodic-book-author">
                            {this.props.author}
                        </span>
                        <br />
                        <span className="periodic-book-author">
                            {this.props.author2}
                        </span>

                    </div>
                </div>

            </div >
        );
    }

}