import { NextFunction, Request, Response } from "express";
import { checkIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { RouteUtils } from "../../utils/RouteUtils";
import { Database } from "../database/database";
import { VersionDAL } from "./versionDAL";
import { Version } from "./version_pb";

export default [

    {
        // Get a specific version with its id
        path: RouteUtils.BASE_PATH + "version/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {
                let versionId: number = parseInt(req.params.id)
                if (isNaN(versionId))
                    clientError(new Error("Input version identifier is not a number : " + versionId), res, next);

                let database = Database.get()
                let versionDAL = new VersionDAL(database)
                let version: Version | undefined = await versionDAL.withId(versionId)

                if (version == undefined) {
                    notFoundErrorMessage("Version has not been found with input id : " + versionId)
                } else {
                    res.status(200)
                        .send(ProtoUtils.serialize(version, req))
                }
            }
        ]
    },

    {
        // List all existing versions
        path: RouteUtils.BASE_PATH + "version/",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                let database = Database.get()
                let versionsDAL = new VersionDAL(database)
                let versions = await versionsDAL.list()
                res.status(200)
                    .send(ProtoUtils.serialize(versions, req))
            }
        ]
    },
]