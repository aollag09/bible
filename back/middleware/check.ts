
import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkIdParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.id) {
        throw new HTTP400Error("Missing q parameter");
    } else {
        next();
    }
};