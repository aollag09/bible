import { NextFunction, Request, Response } from "express";
import { Message } from "google-protobuf";
import { checkBookIdParams, checkChapterIdParams, checkIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { RouteUtils } from "../../utils/RouteUtils";
import { Database } from "../database/database";
import { ReadDAL } from "./readDAL";
import { Read, Reads } from "./read_pb";


export default [

    {
        // Get a specific note with its id
        path: RouteUtils.BASE_PATH + "read/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                const id: number = parseInt(req.params.id)
                if (isNaN(id))
                    clientError(new Error("Input read identifier is not a number : " + id), res, next);

                const database = Database.get()
                const readDAL = new ReadDAL(database)
                const read: Read | undefined = await readDAL.withId(id)

                if (read == undefined) {
                    notFoundErrorMessage("Read has not been found with input id : " + id)
                } else {
                    res.status(200)
                        .send(ProtoUtils.serialize(read, req))
                }
            }
        ]
    },

    {
        // Get notes of an owner
        path: RouteUtils.BASE_PATH + "read/owner/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                const id: number = parseInt(req.params.id)
                if (isNaN(id))
                    clientError(new Error("Input owner identifier is not a number : " + id), res, next);

                const database = Database.get()
                const readDAL = new ReadDAL(database)
                const reads: Reads = await readDAL.withOwner(id)

                res.status(200)
                    .send(ProtoUtils.serialize(reads, req))
            }
        ]
    },

    {
        // Get all the notes of a chapter in a book
        path: RouteUtils.BASE_PATH + "read/book/:bookId/chapter/:chapterId",
        method: "get",
        responseType: "arrayBuffer",
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkBookIdParams,
            checkChapterIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                const bookId = parseInt(req.params.bookId)
                if (isNaN(bookId))
                    clientError(new Error("Input book identifier is not a number : " + bookId), res, next)

                const chapterId = parseInt(req.params.chapterId)
                if (isNaN(chapterId))
                    clientError(new Error("Input chapter identifier is not a number : " + chapterId), res, next)


                const database = Database.get()
                const readDAL = new ReadDAL(database)
                const reads = await readDAL.withBookChapter(bookId, chapterId)

                res.status(200)
                    .send(ProtoUtils.serialize(reads, req))
            }
        ]
    },

    {
        // Create a read 
        path: RouteUtils.BASE_PATH + "read",
        method: "post",
        responseType: '',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {

                const database = Database.get()
                const readDAL = new ReadDAL(database)

                if (req.body.readbuff) {
                    // Create tag from input proto
                    const read = Read.deserializeBinary(Message.bytesAsU8(req.body.readbuff))

                    if (read) {
                        await readDAL.putRead(read)
                        res.status(200).send("succeeded")
                    }
                    else
                        clientError(new Error("Invalid input readbuff " + req.body.readbuff), res, next)
                } else {
                    clientError(new Error("readbuff parameter is missing on request body"), res, next)
                }
            }
        ]
    },

]