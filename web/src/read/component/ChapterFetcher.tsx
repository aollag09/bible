import React, { Component } from "react";
import useFetch from 'fetch-suspense'
import { BibleAPI } from "../../common/utils/bibleAPI";
import { ChapterBox } from "./ChapterBox";

type ChapterFetcherProp = {
    book: number,
    handleChapterSelect: (id: number) => void,
}


export class ChapterFecther extends Component<ChapterFetcherProp> {

    render() {
        const response = useFetch(BibleAPI.url + "book/" + this.props.book + "/chapters/count");
        if (response) {
            const nbChapter = parseInt(response.toString())

            let chapters: JSX.Element[] = []
            for (let i = 1; i <= nbChapter; i++) {
                chapters.push(
                    <li className="chapter-item">
                        <ChapterBox chapter={i} onClick={() => this.props.handleChapterSelect(i)} />
                    </li>)
            }

            return (
                <div className="chapter-list">
                    <ul >
                        {chapters}
                    </ul>
                </div>
            );
        } else {
            return (<p> No chapter associated to book number {this.props.book} </p>)
        }

    };
}
