import { Request, Response, NextFunction } from "express";
import { BookDAL } from "./bookDAL";
import { Database } from "../database/database";
import { Book } from "./book_pb";
import { notFoundError, serverError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { checkIdParams } from "../../middleware/check";
import { Message } from "google-protobuf";
import { RouteUtils } from "../../utils/RouteUtils";
import { ProtoUtils } from "../../utils/ProtoUtils";

export default [
    {
        // Get a specific book with its id
        path: RouteUtils.BASE_PATH + "book/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                let bookid: number = parseInt(req.params.id)
                if (isNaN(bookid))
                    serverError(new Error("Input book identifier is not a number : " + bookid), res, next);

                let bookDAL = new BookDAL(new Database())
                let book: Book | undefined = await bookDAL.withId(bookid)

                if (book == undefined) {
                    notFoundErrorMessage("Book has not been found with input id : " + bookid)
                } else {
                    res.status(200)
                        .send(ProtoUtils.serialize(book))
                }
            }
        ]
    },

    {
        // List all existing books
        path: RouteUtils.BASE_PATH + "book/",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                let bookDAL = new BookDAL(new Database())
                let books = await bookDAL.list()
                res.status(200)
                    .send(ProtoUtils.serialize(books))
            }
        ]
    },
];