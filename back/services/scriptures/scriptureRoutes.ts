import { NextFunction, Request, Response } from "express";
import { checkVerseIdParams, checkVersionIdParams, checkBookIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { RouteUtils } from "../../utils/RouteUtils";
import { Database } from "../database/database";
import { VersionDAL } from "../version/versionDAL";
import { ScriptureDAL } from "./scriptureDAL";
import { Scripture } from "./scriptures_pb";
import { Message } from "google-protobuf";

export default [

    {
        // Get a specific scripture verse 
        path: RouteUtils.BASE_PATH + "scriptures/:versionId/:verseId",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkVersionIdParams,
            checkVerseIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let versionId: number = parseInt(req.params.versionId)
                if (isNaN(versionId))
                    clientError(new Error("Input version identifier is not a number : " + versionId), res, next);

                let database = new Database()
                let versionDAL = new VersionDAL(database)
                let version = await versionDAL.withId(versionId)

                if (version == undefined) {
                    notFoundErrorMessage("Version has not been found with input id : " + versionId)
                } else {
                    let verseId = req.params.verseId
                    let scriptureDAL = new ScriptureDAL(database, version)
                    let verse = await scriptureDAL.withIdS(verseId)

                    if (verse == undefined) {
                        notFoundErrorMessage("Scripture Verse has not been found with input id : " + verseId)
                    } else {
                        res.status(200)
                            .send(ProtoUtils.serialize(verse))
                    }
                }
            }
        ]
    },

    
    {
        // Get all scripture verses of a book 
        path: RouteUtils.BASE_PATH + "scriptures/:versionId/book/:bookId",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkVersionIdParams,
            checkBookIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let versionId: number = parseInt(req.params.versionId)
                if (isNaN(versionId))
                    clientError(new Error("Input version identifier is not a number : " + versionId), res, next)

                let database = new Database()
                let versionDAL = new VersionDAL(database)
                let version = await versionDAL.withId(versionId)

                if (version == undefined) {
                    notFoundErrorMessage("Version has not been found with input id : " + versionId)
                } else {
                    let bookId = parseInt(req.params.bookId)
                    if (isNaN(bookId))
                        clientError(new Error("Input book identifier is not a number : " + bookId), res, next)

                    let scriptureDAL = new ScriptureDAL(database, version)
                    let verses = await scriptureDAL.withBook(bookId)

                    res.status(200)
                        .send(ProtoUtils.serialize(verses))
                }
            }
        ]

    }

]