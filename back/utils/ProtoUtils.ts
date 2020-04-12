import { Request } from "express";
import { Message } from "google-protobuf";
import { clientError } from "./ErrorHandler";
import { read } from "fs";

export class ProtoUtils {

    public static serialize(message: Message, req: Request | undefined = undefined): string {
        if (req != undefined && !!req.query.format)
            return this.serializeFormat(message, req.query.format)
        else
            return this.serializeFormat(message)
    }

    private static serializeFormat(message: Message, format: string = "proto"): string {
        if (format.startsWith("proto"))
            return Message.bytesAsB64(message.serializeBinary());
        else if (format.startsWith("json"))
            return JSON.stringify(message)
        else
            throw new Error("Format is not valid : " + format)
    }

}