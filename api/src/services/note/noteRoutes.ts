import { Request, Response, NextFunction } from "express";
import { RouteUtils } from "../../utils/RouteUtils";
import { checkIdParams, checkBookIdParams, checkChapterIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { Database } from "../database/database";
import { Note, Notes } from "./note_pb";
import { NoteDAL } from "./noteDAL";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { Message } from "google-protobuf";


export default [

    {
        // Get a specific note with its id
        path: RouteUtils.BASE_PATH + "note/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                const id: number = parseInt(req.params.id)
                if (isNaN(id))
                    clientError(new Error("Input note identifier is not a number : " + id), res, next);

                const database = Database.get()
                const noteDAL = new NoteDAL(database)
                const note: Note | undefined = await noteDAL.withId(id)

                if (note == undefined) {
                    notFoundErrorMessage("Note has not been found with input id : " + id)
                } else {
                    res.status(200)
                        .send(ProtoUtils.serialize(note, req))
                }
            }
        ]
    },


    {
        // Get all the notes of a chapter in a book
        path: RouteUtils.BASE_PATH + "note/book/:bookId/chapter/:chapterId",
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
                const noteDAL = new NoteDAL(database)
                const notes = await noteDAL.withBookChapter(bookId, chapterId)

                res.status(200)
                    .send(ProtoUtils.serialize(notes, req))
            }
        ]
    },


    {
        // Create a note 
        path: RouteUtils.BASE_PATH + "note",
        method: "post",
        responseType: '',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {

                const database = Database.get()
                const noteDAL = new NoteDAL(database)

                if (req.body.notebuff) {
                    // Create tag from input proto
                    const note = Note.deserializeBinary(Message.bytesAsU8(req.body.notebuff))

                    if (note) {
                        await noteDAL.putNote(note)
                        res.status(200).send("succeeded")
                    }
                    else
                        clientError(new Error("Invalid input notebuff " + req.body.notebuff), res, next)
                } else {
                    clientError(new Error("notebuff parameter is missing on request body"), res, next)
                }
            }
        ]
    },

    {
        // Create notes 
        path: RouteUtils.BASE_PATH + "notes",
        method: "post",
        responseType: '',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {

                const database = Database.get()
                const noteDAL = new NoteDAL(database)

                if (req.body.notebuff) {
                    // Create tag from input proto
                    const notes = Notes.deserializeBinary(Message.bytesAsU8(req.body.notebuff))

                    if (notes) {
                        await noteDAL.putNotes(notes)
                        res.status(200).send("succeeded")
                    }
                    else
                        clientError(new Error("Invalid input notebuff " + req.body.notebuff), res, next)
                } else {
                    clientError(new Error("notebuff parameter is missing on request body"), res, next)
                }
            }
        ]
    },

    {
        // Delete a specific note from its id
        path: RouteUtils.BASE_PATH + "note/:id",
        method: "delete",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                const id: number = parseInt(req.params.id);
                if (isNaN(id))
                    clientError(new Error("Input note identifier is not a number : " + id), res, next);

                const database = Database.get()
                const noteDAL = new NoteDAL(database)
                await noteDAL.deleteNote(id)

                res.status(200).send("succeeded")
            }
        ]
    }
]