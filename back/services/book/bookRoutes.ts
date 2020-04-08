import { Request, Response } from "express";
import { BookDAL } from "./bookDAL";
import { Database } from "../database/database";
import { checkIdParams } from "../../middleware/check";
import { Book } from "./book_pb";
import { notFoundError } from "../../utils/ErrorHandler";

export default [
    {
        path: "/bible/v1/book",
        method: "get",
        handler: [
            checkIdParams,
            async (req: Request, res: Response) => {
                let bookid = req.params.id
                let bookDAL = new BookDAL(new Database())
                let book: Book | undefined = await bookDAL.withId(parseInt(bookid))
                if (book == undefined) {
                    notFoundError()
                } else {
                    res.status(200)
                        .send(JSON.stringify(book, null, 2))
                }
            }
        ]
    }
];