// package: bible
// file: services/note/note.proto

import * as jspb from "google-protobuf";

export class Note extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Note): Note.AsObject;

    static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Note;

    static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;

    getId(): number;

    setId(value: number): void;

    getOwner(): number;

    setOwner(value: number): void;

    getCreated(): number;

    setCreated(value: number): void;

    getModified(): number;

    setModified(value: number): void;

    getStart(): string;

    setStart(value: string): void;

    getEnd(): string;

    setEnd(value: string): void;

    getBook(): number;

    setBook(value: number): void;

    getChapter(): number;

    setChapter(value: number): void;

    getType(): string;

    setType(value: string): void;

    getNote(): string;

    setNote(value: string): void;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Note.AsObject;
}

export namespace Note {
    export type AsObject = {
        id: number,
        owner: number,
        created: number,
        modified: number,
        start: string,
        end: string,
        book: number,
        chapter: number,
        type: string,
        note: string,
    }
}

export class Notes extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Notes): Notes.AsObject;

    static serializeBinaryToWriter(message: Notes, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Notes;

    static deserializeBinaryFromReader(message: Notes, reader: jspb.BinaryReader): Notes;

    clearNotesList(): void;

    getNotesList(): Array<Note>;

    setNotesList(value: Array<Note>): void;

    addNotes(value?: Note, index?: number): Note;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Notes.AsObject;
}

export namespace Notes {
    export type AsObject = {
        notesList: Array<Note.AsObject>,
    }
}

