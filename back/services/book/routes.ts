import { Request, Response } from "express";

export default [
    {
        path: "/books",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello world from the books!");
        }
    }
];