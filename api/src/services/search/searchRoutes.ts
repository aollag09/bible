import { NextFunction, Request, Response } from "express";
import { checkIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { RouteUtils } from "../../utils/RouteUtils";
import { Database } from "../database/database";
import { Index } from "../index/index";
import { VersionDAL } from "../version/versionDAL";
import { Version } from "../version/version_pb";
import { SearchDAL } from "./searchDAL";


export default [
    {
        // Search scriptures for a specific version
        path: RouteUtils.BASE_PATH + "version/:id/_search",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                let versionId: number = parseInt(req.params.id)
                if (isNaN(versionId))
                    clientError(new Error("Input version identifier is not a number : " + versionId), res, next);

                let versionDAL = new VersionDAL(new Database())
                let version: Version | undefined = await versionDAL.withId(versionId)
                if (version == undefined) {
                    notFoundErrorMessage("Version has not been found with input id : " + versionId)
                } else {
                    // Perform query on index
                    let query = req.query.q
                    if (query == null || query == undefined)
                        query = "*"
                    let searchDAL = new SearchDAL(new Index())
                    let scriptures = await searchDAL.searchScripture(version, query.toString())
                    res.status(200)
                        .send(ProtoUtils.serialize(scriptures, req))
                }
            }
        ]
    },

    {
        // Search in all scriptures
        path: RouteUtils.BASE_PATH + "_search",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                // Perform query on index
                let query = req.query.q
                if (query == null || query == undefined)
                    query = "*"
                let searchDAL = new SearchDAL(new Index())
                let scriptures = await searchDAL.searchAllScriputure(query.toString())
                res.status(200)
                    .send(ProtoUtils.serialize(scriptures, req))
            }
        ]
    }
];