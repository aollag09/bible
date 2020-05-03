import { NextFunction, Request, Response } from "express";
import { RouteUtils } from "../../utils/RouteUtils";
import { checkIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { LanguageDAL } from "./languageDAL";
import { Database } from "../database/database";
import { ProtoUtils } from "../../utils/ProtoUtils";



export default [

    {
        // Get a specific language from its id
        path: RouteUtils.BASE_PATH + "language/:id",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let id = parseInt(req.params.id)
                if (isNaN(id))
                    clientError(new Error("Input language identifier is not a number : " + id), res, next);

                let languageDAL = new LanguageDAL(Database.get())
                let language = await languageDAL.withId(id)

                if (language == undefined)
                    notFoundErrorMessage("Language has not been found with input id " + id)
                else {
                    res.status(200)
                        .send(ProtoUtils.serialize(language, req))
                }
            }
        ]
    },

    {
        // List all languages
        path: RouteUtils.BASE_PATH + "language/",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                let languageDAL = new LanguageDAL(Database.get())
                let languages = await languageDAL.list()
                res.status(200)
                    .send(ProtoUtils.serialize(languages, req))
            }
        ]
    }
]