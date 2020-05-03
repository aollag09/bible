import { NextFunction, Request, Response } from "express";
import { RouteUtils } from "../../utils/RouteUtils";
import { checkIdParams, checkLanguageIdParams } from "../../middleware/check";
import { clientError, notFoundErrorMessage } from "../../utils/ErrorHandler";
import { Database } from "../database/database";
import { ProtoUtils } from "../../utils/ProtoUtils";
import { PeopleDAL } from "./peopleDAL";
import { LanguageDAL } from "../language/languageDAL";



export default [

    {
        // Get a specific people from its id
        path: RouteUtils.BASE_PATH + "people/:id/language/:lid",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            checkIdParams,
            checkLanguageIdParams,
            async (req: Request, res: Response, next: NextFunction) => {

                let id = parseInt(req.params.id)
                if (isNaN(id))
                    clientError(new Error("Input people identifier is not a number : " + id), res, next);

                let lid = parseInt(req.params.lid)
                if (isNaN(lid))
                    clientError(new Error("Input language identifier is not a number : " + lid), res, next);

                let language = await new LanguageDAL(Database.get()).withId(lid)
                if (language == undefined)
                    notFoundErrorMessage("Language has not been found with input id " + lid)
                else {
                    let peopleDAL = new PeopleDAL(Database.get(), language)
                    let people = await peopleDAL.withId(id)

                    if (people == undefined)
                        notFoundErrorMessage("People has not been found with input id " + id)
                    else {
                        res.status(200)
                            .send(ProtoUtils.serialize(people, req))
                    }
                }
            }
        ]
    },

    {
        // List all peoples
        path: RouteUtils.BASE_PATH + "people/language/:lid",
        method: "get",
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/protobuf' },
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                let lid = parseInt(req.params.lid)
                if (isNaN(lid))
                    clientError(new Error("Input language identifier is not a number : " + lid), res, next);

                let language = await new LanguageDAL(Database.get()).withId(lid)
                if (language == undefined)
                    notFoundErrorMessage("Language has not been found with input id " + lid)
                else {
                    let peopleDAL = new PeopleDAL(Database.get(), language)
                    let peoples = await peopleDAL.list()
                    res.status(200)
                        .send(ProtoUtils.serialize(peoples, req))
                }
            }
        ]
    }
]