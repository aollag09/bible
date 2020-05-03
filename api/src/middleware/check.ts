
import { NextFunction, Request, Response } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.id) {
        throw new HTTP400Error("Missing id parameter");
    } else {
        next();
    }
};

export const checkLanguageIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.lid) {
        throw new HTTP400Error("Missing language parameter");
    } else {
        next();
    }
};


export const checkVersionIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.versionId) {
        throw new HTTP400Error("Missing version id parameter");
    } else {
        next();
    }
};


export const checkVerseIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.versionId) {
        throw new HTTP400Error("Missing verse id parameter");
    } else {
        next();
    }
};

export const checkChapterIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.chapterId) {
        throw new HTTP400Error("Missing book id parameter");
    } else {
        next();
    }
};

export const checkBookIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.bookId) {
        throw new HTTP400Error("Missing book id parameter");
    } else {
        next();
    }
};


export const checkStartIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.startId) {
        throw new HTTP400Error("Missing start id parameter");
    } else {
        next();
    }
};


export const checkEndIdParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.params.endId) {
        throw new HTTP400Error("Missing end id parameter");
    } else {
        next();
    }
};

export const checkQueryQueryParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.query.q) {
        throw new HTTP400Error("Missing query parameter");
    } else {
        next();
    }
};

export const checkNameQueryParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.query.name) {
        throw new HTTP400Error("Missing name parameter");
    } else {
        next();
    }
};

export const checkIdOrNameQueryParams = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.query.id && !req.query.name) {
        throw new HTTP400Error("Missing id or name parameter");
    } else {
        next();
    }
};