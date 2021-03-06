import { Request, Response, NextFunction } from "express";
import { BookDAL } from "./bookDAL";
import { Database } from "../database/database";
import { Book } from "./book_pb";
import { notFoundErrorMessage, clientError } from "../../utils/ErrorHandler";
import { checkIdParams } from "../../middleware/check";
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
                    clientError(new Error("Input book identifier is not a number : " + bookid), res, next);

                let database = Database.get()
                let bookDAL = new BookDAL(database)
                let book: Book | undefined = await bookDAL.withId(bookid)

                if (book == undefined) {
                    notFoundErrorMessage("Book has not been found with input id : " + bookid)
                } else {
                    res.status(200)
                        .send(ProtoUtils.serialize(book, req))
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
                let bookDAL = new BookDAL(Database.get())
                let books = await bookDAL.list()
                res.status(200)
                    .send(ProtoUtils.serialize(books, req))
            }
        ]
    },


    {
        // Get the number of chapters in a specific book
        path: RouteUtils.BASE_PATH + "book/:id/chapters/count",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                let bookid: number = parseInt(req.params.id)
                if (isNaN(bookid))
                    clientError(new Error("Input book identifier is not a number : " + bookid), res, next);
                let database = Database.get()
                let bookDAL = new BookDAL(database)

                let nbChapters = await bookDAL.getNbChapters(bookid)
                res.status(200)
                    .send(nbChapters)
            }
        ]
    },
];