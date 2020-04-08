
import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkIdParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.id) {
        throw new HTTP400Error("Missing id parameter");
    } else {
        next();
    }
};

export const checkIdOrNameParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.id && !req.query.name) {
        throw new HTTP400Error("Missing id or name parameter");
    } else {
        next();
    }
};