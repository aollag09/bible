
import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkIdParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.params.id) {
        throw new HTTP400Error("Missing id parameter");
    } else {
        next();
    }
};

export const checkQueryQueryParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.q) {
        throw new HTTP400Error("Missing id parameter");
    } else {
        next();
    }
};

export const checkNameQueryParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.name) {
        throw new HTTP400Error("Missing id parameter");
    } else {
        next();
    }
};

export const checkIdOrNameQueryParams = (
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