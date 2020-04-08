import { Request, Response } from "express";
import { BookDAL } from "./bookDAL";
import { Database } from "../database/database";
import { checkIdOrNameParams } from "../../middleware/check";
import { Book } from "./book_pb";

export default [
    {
        path: "/bible/v1/book",
        method: "get",
        handler: [
            checkIdOrNameParams,
            async ({ query }: Request, res: Response) => {
                let bookDAL = new BookDAL(new Database())
                let book: Book | undefined = undefined
                if (!!query.id) {
                    book = await bookDAL.withId(query.id)
                } else if (!!query.name) {
                    book = await bookDAL.withName(query.name)
                }
                if (book == undefined) {
                    res.status(404)
                } else {
                    res.status(200)
                        .send(JSON.stringify(book, null, 2))
                }
            }
        ]
    }
];