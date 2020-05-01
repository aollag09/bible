


export class VerseSelection {

    private book: number;
    private chapter: number;
    private start: number;
    private end: number;
    private startId: string;
    private endId: string;

    constructor(book: number, chapter: number, startId: string, endId: string) {
        this.book = book;
        this.chapter = chapter;
        this.startId = startId;
        this.endId = endId;
        this.start = parseInt(startId.slice(-3))
        this.end = parseInt(endId.slice(-3))
    }


    getStartId(): string {
        return this.startId;
    }

    getEndId(): string {
        return this.endId;
    }

    public toString(): string {
        if (this.start === this.end) {
            return "{ " + this.start + " }"
        } else {
            return "[ " + this.start + ", " + this.end + "]"
        }
    }
}


export class VerseSelectionBuilder {

    /**
     * Split continuous selections
     * @param selectedVerses 
     */
    public static build(book: number, chapter: number, selectedVerses: Array<string>): Array<VerseSelection> {
        let selections = new Array<VerseSelection>()

        // Ensure all verse are in order
        selectedVerses.sort()

        let currentSelection = -1;
        let start = ""
        let end = ""
        let idx = 0

        selectedVerses.forEach(selectedVerse => {
            let currentId = parseInt(selectedVerse.slice(-3))
            if (currentSelection === -1) {
                // new verse selection
                start = selectedVerse
                end = selectedVerse
                currentSelection = currentId
            }
            else {
                if (currentId === currentSelection + 1) {
                    // continous selection
                    currentSelection = currentId
                    end = selectedVerse
                } else {
                    // discontinous selection, create new Verse Selection
                    selections.push(new VerseSelection(book, chapter, start, end))
                    currentSelection = currentId
                    start = selectedVerse
                    end = selectedVerse
                }
            }

            idx++;
            if (idx === selectedVerses.length) {
                // last verse, create Verse Selection
                selections.push(new VerseSelection(book, chapter, start, selectedVerse))
            }


        })

        return selections;
    }


}