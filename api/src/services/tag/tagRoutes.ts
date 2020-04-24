import { NextFunction, Request, Response } from "express";
import { RouteUtils } from "../../utils/RouteUtils";
import { checkIdParams, checkChapterIdParams, checkBookIdParams, checkStartIdParams, checkEndIdParams } from "../../middleware/check";
import { Tag, WhatTag, WhoTag, WhereTag, WhenTag, HowTag } from "./tag_pb";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { Database } from "../database/database";
import { TagDAL } from "./TagDal";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { Route } from "../../utils";
import { TagChecks } from "./tagCheck";
import { DateTime } from "../../utils/dateTime";
import { Message } from "google-protobuf";


let routes: Route[] = []
let cases = [Tag.TagCase.WHATTAG, Tag.TagCase.WHOTAG, Tag.TagCase.WHERETAG, Tag.TagCase.WHENTAG, Tag.TagCase.HOWTAG]
let paths = ["what", "who", "where", "when", "how"]

// Generate roots for all the tag cases within this loop
for (let i = 0; i < cases.length; i++) {

    routes.push({
        // Get a specific tag from its id
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


    routes.push({
        // Delete a specific tag from its id
        path: RouteUtils.BASE_PATH + "tag/" + paths[i] + "/:id",
        method: "delete",
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
                await tagDAL.deleteTag(tagId, cases[i])

                res.status(200).send("succeeded")
            }
        ]
    })


    routes.push({
        // POST a new Tag
        path: RouteUtils.BASE_PATH + "tag/" + paths[i] +"/",
        method: "post",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {

                let database = Database.get()
                let tagDAL = new TagDAL(database)

                if (req.body.tagbuff) {
                    // Create tag from input proto
                    let tag = Tag.deserializeBinary(Message.bytesAsU8(req.body.tagbuff))

                    console.log(JSON.stringify(tag, null, 2))

                    if (tag) {
                        await tagDAL.putTag(tag)
                        res.status(200).send("succeeded")
                    }
                    else
                        clientError(new Error("Invalid input tag buff " + req.body.tagbuff), res, next)
                } else {

                    // Create tag from seperated fields
                    let error = TagChecks.checkCreateInputs(req, res, next, cases[i])
                    if (error.length > 1) {
                        clientError(new Error(error), res, next)
                    }
                    else {
                        let tag = new Tag()

                        if (req.body.id)
                            tag.setId(req.body.id)
                        tag.setOwner(parseInt(req.body.owner))

                        tag.setCreated(DateTime.current())
                        tag.setModified(DateTime.current())

                        tag.setStart(req.body.start)
                        tag.setEnd(req.body.end)

                        tag.setBook(parseInt(req.body.book))
                        tag.setChapter(parseInt(req.body.chapter))

                        if (req.body.type)
                            tag.setType(req.body.type)
                        if (req.body.subtype)
                            tag.setSubtype(req.body.subtype)

                        switch (+cases[i]) {

                            case Tag.TagCase.WHATTAG:
                                let what = new WhatTag()
                                what.setWhat(req.body.what)
                                if (req.body.details)
                                    what.setDetails(req.body.details)
                                tag.setWhattag(what)
                                break;

                            case Tag.TagCase.WHOTAG:
                                let who = new WhoTag()
                                who.setWho(parseInt(req.body.who))
                                tag.setWhotag(who)
                                break;

                            case Tag.TagCase.WHERETAG:
                                let where = new WhereTag()
                                where.setWhere(req.body.where)
                                if (req.body.longitude)
                                    where.setLongitude(parseInt(req.body.longitude))
                                if (req.body.latitude)
                                    where.setLatitude(parseInt(req.body.latitude))
                                tag.setWheretag(where)
                                break;

                            case Tag.TagCase.WHENTAG:
                                let when = new WhenTag()
                                when.setYear(parseInt(req.body.year))
                                tag.setWhentag(when)
                                break;

                            case Tag.TagCase.HOWTAG:
                                let how = new HowTag()
                                how.setHow(req.body.how)
                                if (req.body.details)
                                    how.setDetails(req.body.details)
                                tag.setHowtag(how)
                                break;
                        }

                        await tagDAL.putTag(tag)
                        res.status(200).send("succeeded")
                    }
                }
            }
        ]
    })

}

export default routes;