import { NextFunction, Request, Response } from "express";
import { RouteUtils } from "../../utils/RouteUtils";
import { checkIdParams, checkChapterIdParams, checkBookIdParams, checkStartIdParams, checkEndIdParams } from "../../middleware/check";
import { Tag } from "./tag_pb";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { Database } from "../database/database";
import { TagDAL } from "./TagDal";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { Route } from "../../utils";


let routes: Route[] = []
let cases = [Tag.TagCase.WHATTAG, Tag.TagCase.WHOTAG, Tag.TagCase.WHERETAG, Tag.TagCase.WHENTAG, Tag.TagCase.HOWTAG]
let paths = ["what", "who", "where", "when", "how"]

// Generate roots for all the tag cases within this loop
for (let i = 0; i < cases.length; i++) {

    routes.push({
        // Get a specific tag from its idany
        path: RouteUtils.BASE_PATH + "tag/" + paths[i] + "/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let tagId: number = parseInt(req.params.id);
                if (isNaN(tagId))
                    clientError(new Error("Input tag identifier is not a number : " + tagId), res, next);

                let database = Database.get()
                let tagDAL = new TagDAL(database)
                let tag = await tagDAL.withId(tagId, cases[i])

                if (tag) {
                    res.status(200)
                        .send(ProtoUtils.serialize(tag, req))
                } else {
                    notFoundErrorMessage("Tag " + paths[i] + "has not been found with input id : " + tagId)
                }
            }
        ]
    })

    routes.push({
        // Get all the tags of a chapter in a book
        path: RouteUtils.BASE_PATH + "tag/" + paths[i] + "/book/:bookId/chapter/:chapterId",
        method: "get",
        responseType: "arrayBuffer",
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkBookIdParams,
            checkChapterIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let bookId = parseInt(req.params.bookId)
                if (isNaN(bookId))
                    clientError(new Error("Input book identifier is not a number : " + bookId), res, next)

                let chapterId = parseInt(req.params.chapterId)
                if (isNaN(chapterId))
                    clientError(new Error("Input chapter identifier is not a number : " + chapterId), res, next)


                let database = Database.get()
                let tagDAL = new TagDAL(database)
                let tags = await tagDAL.withBookChapter(bookId, chapterId, cases[i])

                res.status(200)
                    .send(ProtoUtils.serialize(tags, req))
            }
        ]
    })

    routes.push({
        // Get all the tags within start & end verse id
        path: RouteUtils.BASE_PATH + "tag/" + paths[i] + "/start/:startId/end/:endId",
        method: "get",
        responseType: "arrayBuffer",
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkStartIdParams,
            checkEndIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let startId = req.params.startId
                let endId = req.params.endId

                let database = Database.get()
                let tagDAL = new TagDAL(database)
                let tags = await tagDAL.within(startId, endId, cases[i])

                res.status(200)
                    .send(ProtoUtils.serialize(tags, req))
            }
        ]
    })

    routes.push({
        // Get all the tags of a chapter in a book
        path: RouteUtils.BASE_PATH + "tag/" + paths[i] + "/book/:bookId/chapter/:chapterId/start/:startId/end/:endId",
        method: "get",
        responseType: "arrayBuffer",
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkBookIdParams,
            checkChapterIdParams,
            checkStartIdParams,
            checkEndIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let bookId = parseInt(req.params.bookId)
                if (isNaN(bookId))
                    clientError(new Error("Input book identifier is not a number : " + bookId), res, next)

                let chapterId = parseInt(req.params.chapterId)
                if (isNaN(chapterId))
                    clientError(new Error("Input chapter identifier is not a number : " + chapterId), res, next)

                let startId = req.params.startId
                let endId = req.params.endId


                let database = Database.get()
                let tagDAL = new TagDAL(database)
                let tags = await tagDAL.withBookChapterStartEnd(bookId, chapterId, startId, endId, cases[i])

                res.status(200)
                    .send(ProtoUtils.serialize(tags, req))
            }
        ]
    })

}

export default routes;