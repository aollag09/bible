
import { List, ListItem, ListItemText } from "@material-ui/core";
import Axios from "axios";
import { Message } from "google-protobuf";
import React, { useEffect, useState } from "react";
import { Books } from "../../../common/generated/services/book/book_pb";
import { BibleAPI } from "../../../common/utils/bibleAPI";

type BookListSelectorProp = {
    handleBookSelect: (bookid: number) => void,
}

/**
 * Simple list selector for mobile
 * @param props 
 */
export const BookListSelector: React.FunctionComponent<BookListSelectorProp> = (props) => {

    const [books, setBooks] = useState<Books>();

    useEffect(() => {
        if (!books) {
            fetchBooks()
        }
    }, [books]);


    const fetchBooks = async () => {
        const res = await Axios.get<string>(BibleAPI.url + "book")
        setBooks(Books.deserializeBinary(Message.bytesAsU8(res.data)))
    }

    const bookList: JSX.Element[] = []

    if (books) {
        books.getBooksList().forEach(book => {
            bookList.push(
                <ListItem button key={"list-item-book" + book.getId()} onClick={() => props.handleBookSelect(book.getId())}>
                    <ListItemText key={"list-item-text-book-" + book.getId()} primary={book.getName()} />
                </ListItem>
            )
        })
    }

    return (

        <div className="book-list-selector">
            <List>
                {bookList}
            </List>

        </div>);
}