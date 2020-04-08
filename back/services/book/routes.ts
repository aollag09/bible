import { Request, Response } from "express";
import { BookDAL } from "./bookDAL";
import { Database } from "../database/database";

export default [
    {
        path: "/bible/v1/books",
        method: "get",
        handler: async ({ query }: Request, res: Response) => {
            let bookDAL = new BookDAL(new Database())
            let book = await bookDAL.withId(query.id)
            res.send("Hello world from the books!" + "The book is : " + JSON.stringify(book, null, 3))
        }
    }
];