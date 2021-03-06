import React, {Suspense} from "react";
import {ChapterFecther} from "./ChapterFetcher";
import ErrorBoundary from "react-error-boundary";


type ChapterSelectorProp = {
    step: number,
    book: number,
    handleChapterSelect: (id: number) => void,
}

export class ChapterSelector extends React.Component<ChapterSelectorProp> {

    render() {
        if (this.props.step === 3) {
            return (
                <div className="chapter-selector">
                    <h2> Chapters </h2>
                    <Suspense fallback={<div>Loading chapters ... </div>}>
                        <ErrorBoundary>
                            <ChapterFecther book={this.props.book}
                                            handleChapterSelect={this.props.handleChapterSelect}/>
                        </ErrorBoundary>
                    </Suspense>
                </div>
            );
        } else {
            return null
        }
    }
}