import useFetch from 'fetch-suspense';
import { Message } from 'google-protobuf';
import React from "react";
import { Book, Books } from "../../../common/generated/services/book/book_pb";
import { BibleAPI } from "../../../common/utils/bibleAPI";
import { Key } from '../../../common/utils/key';

type ScriptureSelectBookProp = {
    version: number,
    book: number,
    chapter: number,
    read: (version: number, book: number, chapter: number) => void
}


export class ScriptureSelectBook extends React.Component<ScriptureSelectBookProp>{

    private books: Books;

    constructor(props: ScriptureSelectBookProp) {
        super(props);
        this.books = this.fetchBooks()
    }

    render() {

        let options: JSX.Element[] = []
        this.books.getBooksList().forEach(book => {
            options.push(
                <option
                    key={Key.getKey("version", book.getId())}
                    className="scripture-select-option"
                    value={book.getId()} >  {this.getOptionName(book)}
                </option>)
        })

        return (
            <div className="scripture-select scripture-book-select">
                <select
                    onChange={this.handleChange}
                    value={this.props.book} >
                    {options}
                </select>

            </div>
        )
    }

    private getOptionName(book: Book): string {
        return book.getName()
    }


    private handleChange = (selection: any) => {
        if (selection.target.value) {
            const newBook = selection.target.value;
            if (newBook !== this.props.book)
                this.props.read(this.props.version, selection.target.value, 1 /* Start new book at chapter 1 */)
        }
    }

    private fetchBooks(): Books {
        const response = useFetch(BibleAPI.url + "book/")
        return Books.deserializeBinary(Message.bytesAsU8(response.toString()))
    }

}
