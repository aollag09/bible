import React, { Suspense } from "react";
import { ScriptureSelectVersion } from "./ScriptureSelectVersion";


type ScriptureSelectorProp = {
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}

export class ScriptureSelector extends React.Component<ScriptureSelectorProp>{

    render() {
        return (
            <div className="scripture-selector" >
                <Suspense fallback="Loading versions..." >
                    <ScriptureSelectVersion 
                        version={this.props.version}
                        read={this.props.read}
                        />
                </Suspense>
            </div>
        )
    }

}