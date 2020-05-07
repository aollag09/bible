import React, { Suspense, useState } from "react";
import ErrorBoundary from "react-error-boundary";
import { Loading } from "../../common/utils/component/Loading";
import { ReaderTagger } from "./reader/ReaderTagger";
import { Selector } from "./selector/Selector";
import Cookies from 'universal-cookie';
import Axios from "axios";
import { Read } from "../../common/generated/services/read/read_pb";
import { DateTimeUtils } from "../../common/utils/dateTimeUtils";
import { LoginUtils } from "../../common/utils/loginUtils";
import { BibleAPI } from "../../common/utils/bibleAPI";
import { ProtoUtils } from "../../common/utils/protoUtils";

export class ReaderSelectorConst {

    public static SWITCH_SELECTOR = "selector"
    public static SWITCH_READER = "reader"
}

export function ReaderSelector() {

    const cookies = new Cookies()

    let defaultSwitch = ReaderSelectorConst.SWITCH_SELECTOR
    if (cookies.get("reader-selector-switch"))
        defaultSwitch = cookies.get("reader-selector-switch")

    const [readerSelectorSwitch, setSwitch] = useState(defaultSwitch);
    const [version, setVersion] = useState(cookies.get("version"));
    const [book, setBook] = useState(cookies.get("book"));
    const [chapter, setChapter] = useState(cookies.get("chapter"));


    const read = (version: number, book: number, chapter: number) => {

        // update cookies
        cookies.set("reader-selector-switch", ReaderSelectorConst.SWITCH_READER, { path: '/' })
        cookies.set("version", version, { path: '/' })
        cookies.set("book", book, { path: '/' })
        cookies.set("chapter", chapter, { path: '/' })

        // update state
        setSwitch(ReaderSelectorConst.SWITCH_READER)
        setVersion(version)
        setBook(book)
        setChapter(chapter)

        // Log read in db
        const read = new Read()
        read.setVersion(version)
        read.setBook(book)
        read.setChapter(chapter)
        read.setCreated(DateTimeUtils.current())
        read.setOwner(LoginUtils.getOwner())
        Axios.post(BibleAPI.url + "read", {
            readbuff: ProtoUtils.serialize(read)
        })
    }

    const showReaderSelector = () => {
        cookies.set("reader-selector-switch", ReaderSelectorConst.SWITCH_SELECTOR, { path: '/' })
        cookies.remove("version")
        cookies.remove("book")
        cookies.remove("chapter")

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