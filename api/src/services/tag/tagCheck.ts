import { Tag } from "./tag_pb";
import { Request, Response, NextFunction } from "express";
import { clientError } from "../../utils/ErrorHandler";

export class TagChecks {


    public static checkCreateInputs(req: Request,
        res: Response,
        next: NextFunction,
        tagCase: Tag.TagCase): string {

        if (req.body.owner)
            if (isNaN(parseInt(req.body.owner)))
                return "Tag owner is not a number"
            else
                return "Missing tag owner"


        if (!req.body.start)
            return "Missing tag start"

        if (!req.body.end)
            return "Missing tag end"


        if (req.body.book)
            if (isNaN(parseInt(req.body.book)))
                return "Tag book is not a number"
            else
                return "Missing tag book"


        if (req.body.chapter)
            if (isNaN(parseInt(req.body.chapter)))
                return "Tag chapter is not a number"
            else
                return "Missing tag chapter"


        switch (+tagCase) {

            case Tag.TagCase.WHATTAG:
                if (!req.body.what)
                    return "Missing tag what"
                break;

            case Tag.TagCase.WHOTAG:
                if (req.body.who)
                    if (isNaN(parseInt(req.body.who)))
                        return "Tag who is not a number"
                    else
                        return "Missing tag who"
                break;

            case Tag.TagCase.WHERETAG:

                if (!req.body.where)
                    return "Missing tag where"

                if (req.body.latitude)
                    if (isNaN(parseInt(req.body.latitude)))
                        return "Tag latitude is not a number"

                if (req.body.longitude)
                    if (isNaN(parseInt(req.body.longitude)))
                        return "Tag longitude is not a number"

                break;

            case Tag.TagCase.WHENTAG:
                if (req.body.year)
                    if (isNaN(parseInt(req.body.year)))
                        return "Tag year is not a number"
                    else
                        return "Missing tag year"

                break;


            case Tag.TagCase.HOWTAG:
                if (!req.body.what)
                    return "Missing tag what"

                break;
        }

        return "";
    }
}