import React from "react";

type ChapterBoxProp = {
    chapter: number,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export class ChapterBox extends React.Component<ChapterBoxProp>{

    render() {
        return (
            <div className="chapter-box">
                <button className="chapter-button" onClick={this.props.onClick}>
                    <div className="chapter-box-wrapper">
                        <span className="chapter-id">
                            {this.props.chapter}
                        </span>
                    </div>
                </button>
            </div>
        );
    }

}