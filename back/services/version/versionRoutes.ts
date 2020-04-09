import { RouteUtils } from "../../utils/RouteUtils";
import { checkIdParams } from "../../middleware/check";
import { Request, Response, NextFunction } from "express";
import { serverError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { VersionDAL } from "./versionDAL";
import { Database } from "../database/database";
import { Version } from "./version_pb";
import { Message } from "google-protobuf";

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
                    serverError(new Error("Input version identifier is not a number : " + versionId), res, next);

                let versionDAL = new VersionDAL(new Database())
                let version: Version | undefined = await versionDAL.withId(versionId)

                if (version == undefined) {
                    notFoundErrorMessage("Versions has not been found with input id : " + versionId)
                } else {
                    res.status(200)
                        .send(Message.bytesAsB64(version.serializeBinary()))
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
                let versionsDAL = new VersionDAL(new Database())
                let versions = await versionsDAL.list()
                res.status(200)
                    .send(Message.bytesAsB64(versions.serializeBinary()))
            }
        ]
    },
]