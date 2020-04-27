import React, { Suspense, useState } from "react";
import ErrorBoundary from "react-error-boundary";
import { Loading } from "../../common/utils/component/Loading";
import { ReaderTagger } from "./reader/ReaderTagger";
import { Selector } from "./selector/Selector";

export class ReaderSelectorConst {

    public static SWITCH_SELECTOR = "selector"
    public static SWITCH_READER = "reader"
}

export function ReaderSelector() {

    const [readerSelectorSwitch, setSwitch] = useState(ReaderSelectorConst.SWITCH_SELECTOR);
    const [version, setVersion] = useState(1);
    const [book, setBook] = useState(1);
    const [chapter, setChapter] = useState(1);


    const read = (version: number, book: number, chapter: number) => {
        setSwitch(ReaderSelectorConst.SWITCH_READER)
        setVersion(version)
        setBook(book)
        setChapter(chapter)
    }

    const showReaderSelector = () => {
        setSwitch(ReaderSelectorConst.SWITCH_SELECTOR)
    }

    return (
        <Suspense fallback={<Loading text="Loading ..." />}>
            <ErrorBoundary>
                <div className="reader-selector">

                    <Selector
                        read={read}
                        switch={readerSelectorSwitch} />
                    <ReaderTagger
                        showReaderSelector={showReaderSelector}
                        read={read}
                        switch={readerSelectorSwitch}
                        book={book}
                        chapter={chapter}
                        version={version} />
                </div>
            </ErrorBoundary>
        </Suspense>
    );
}