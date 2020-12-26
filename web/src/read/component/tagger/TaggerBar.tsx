import CloseIcon from '@material-ui/icons/Close';
import React, {Component} from "react";
import {TaggerForm} from "./TaggerForm";
import {TaggerSelection} from "./TaggerSelection";
import {VerseSelection} from '../reader/VerseSelection';

type TaggerBarProp = {
    showTagger: boolean,
    book: number,
    chapter: number,
    verseSelections: Array<VerseSelection>,
    cleanSelection: () => void
}


export class TaggerBar extends Component<TaggerBarProp> {

    render() {
        return (
            <div className={this.getClassName(this.props.showTagger)}>
                <button
                    className="tagger-close-button"
                    onClick={this.props.cleanSelection}>
                    <CloseIcon
                        aria-label="close tagger bar"
                        fontSize="large"
                        className="tagger-close-button-image">
                    </CloseIcon>
                </button>

                <TaggerSelection
                    book={this.props.book}
                    chapter={this.props.chapter}
                    verseSelections={this.props.verseSelections}
                />

                <TaggerForm
                    book={this.props.book}
                    chapter={this.props.chapter}
                    verseSelections={this.props.verseSelections}
                    cleanSelection={this.props.cleanSelection}/>
            </div>
        );
    }

    getClassName(showTagger: boolean) {
        if (showTagger)
            return "tagger-sidebar tagger-sidebar-opened"
        else
            return "tagger-sidebar tagger-sidebar-closed"
    }

}