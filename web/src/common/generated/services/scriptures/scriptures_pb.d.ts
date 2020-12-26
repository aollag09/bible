// package: bible
// file: services/scriptures/scriptures.proto

import * as jspb from "google-protobuf";

export class Scripture extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Scripture): Scripture.AsObject;

    static serializeBinaryToWriter(message: Scripture, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Scripture;

    static deserializeBinaryFromReader(message: Scripture, reader: jspb.BinaryReader): Scripture;

    getId(): string;

    setId(value: string): void;

    getBook(): number;

    setBook(value: number): void;

    getChapter(): number;

    setChapter(value: number): void;

    getVerse(): number;

    setVerse(value: number): void;

    getScripture(): string;

    setScripture(value: string): void;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Scripture.AsObject;
}

export namespace Scripture {
    export type AsObject = {
        id: string,
        book: number,
        chapter: number,
        verse: number,
        scripture: string,
    }
}

export class Scriptures extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Scriptures): Scriptures.AsObject;

    static serializeBinaryToWriter(message: Scriptures, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Scriptures;

    static deserializeBinaryFromReader(message: Scriptures, reader: jspb.BinaryReader): Scriptures;

    clearScripturesList(): void;

    getScripturesList(): Array<Scripture>;

    setScripturesList(value: Array<Scripture>): void;

    addScriptures(value?: Scripture, index?: number): Scripture;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Scriptures.AsObject;
}

export namespace Scriptures {
    export type AsObject = {
        scripturesList: Array<Scripture.AsObject>,
    }
}

