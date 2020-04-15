import { NextFunction, Response } from "express";
import { HTTP404Error, HTTPClientError } from "../utils/httpErrors";

export const notFoundError = () => {
  throw new HTTP404Error("Resource not found.\n");
};

export const notFoundErrorMessage = (message: string) => {
  throw new HTTP404Error(message + "\n");
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    console.warn(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  console.error(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
}

