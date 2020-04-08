import { Request, Response } from "express";
import { BookDAL } from "./bookDAL";
import { Database } from "../database/database";
import { checkIdParams } from "../../middleware/check";

export default [
    {
        path: "/bible/v1/book",
        method: "get",
        handler: [
            checkIdParams,
            async ({ query }: Request, res: Response) => {
                let bookDAL = new BookDAL(new Database())
                let book = await bookDAL.withId(query.id)
                res.status(200)
                    .send("Hello world from the books!" + "The book is : " + JSON.stringify(book, null, 3))
            }
        ]
    }
];