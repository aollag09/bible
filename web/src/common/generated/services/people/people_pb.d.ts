// package: bible
// file: services/people/people.proto

import * as jspb from "google-protobuf";

export class People extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: People): People.AsObject;

    static serializeBinaryToWriter(message: People, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): People;

    static deserializeBinaryFromReader(message: People, reader: jspb.BinaryReader): People;

    getId(): number;

    setId(value: number): void;

    getLanguage(): number;

    setLanguage(value: number): void;

    getName(): string;

    setName(value: string): void;

    getDescription(): string;

    setDescription(value: string): void;

    getGender(): string;

    setGender(value: string): void;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): People.AsObject;
}

export namespace People {
    export type AsObject = {
        id: number,
        language: number,
        name: string,
        description: string,
        gender: string,
    }
}

export class Peoples extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Peoples): Peoples.AsObject;

    static serializeBinaryToWriter(message: Peoples, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Peoples;

    static deserializeBinaryFromReader(message: Peoples, reader: jspb.BinaryReader): Peoples;

    clearPeoplesList(): void;

    getPeoplesList(): Array<People>;

    setPeoplesList(value: Array<People>): void;

    addPeoples(value?: People, index?: number): People;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Peoples.AsObject;
}

export namespace Peoples {
    export type AsObject = {
        peoplesList: Array<People.AsObject>,
    }
}

