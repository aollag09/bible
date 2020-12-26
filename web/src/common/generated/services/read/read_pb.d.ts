// package: bible
// file: services/read/read.proto

import * as jspb from "google-protobuf";

export class Read extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Read): Read.AsObject;

    static serializeBinaryToWriter(message: Read, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Read;

    static deserializeBinaryFromReader(message: Read, reader: jspb.BinaryReader): Read;

    getId(): number;

    setId(value: number): void;

    getOwner(): number;

    setOwner(value: number): void;

    getVersion(): number;

    setVersion(value: number): void;

    getBook(): number;

    setBook(value: number): void;

    getChapter(): number;

    setChapter(value: number): void;

    getCreated(): number;

    setCreated(value: number): void;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Read.AsObject;
}

export namespace Read {
    export type AsObject = {
        id: number,
        owner: number,
        version: number,
        book: number,
        chapter: number,
        created: number,
    }
}

export class Reads extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Reads): Reads.AsObject;

    static serializeBinaryToWriter(message: Reads, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Reads;

    static deserializeBinaryFromReader(message: Reads, reader: jspb.BinaryReader): Reads;

    clearReadsList(): void;

    getReadsList(): Array<Read>;

    setReadsList(value: Array<Read>): void;

    addReads(value?: Read, index?: number): Read;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Reads.AsObject;
}

export namespace Reads {
    export type AsObject = {
        readsList: Array<Read.AsObject>,
    }
}

