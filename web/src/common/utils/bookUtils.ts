import Axios from "axios";
import { BibleAPI } from "./bibleAPI";
import { Book } from "../generated/services/book/book_pb";
import { Message } from "google-protobuf";



export class BookUtils {

    public static async getBookName(id: number): Promise<string> {
        const res = await Axios.get(BibleAPI.url + "/book/" + id)
        const book = Book.deserializeBinary(Message.bytesAsU8(res.data))
        return book.getName()
    }
}