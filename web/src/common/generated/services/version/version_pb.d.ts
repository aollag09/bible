// package: bible
// file: services/version/version.proto

import * as jspb from "google-protobuf";

export class Version extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;

    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Version;

    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;

    getId(): number;

    setId(value: number): void;

    getTable(): string;

    setTable(value: string): void;

    getAbbreviation(): string;

    setAbbreviation(value: string): void;

    getLanguage(): string;

    setLanguage(value: string): void;

    getVersion(): string;

    setVersion(value: string): void;

    getInfoText(): string;

    setInfoText(value: string): void;

    getInfoUrl(): string;

    setInfoUrl(value: string): void;

    getPublisher(): string;

    setPublisher(value: string): void;

    getCopyright(): string;

    setCopyright(value: string): void;

    getCopyrightInfo(): string;

    setCopyrightInfo(value: string): void;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Version.AsObject;
}

export namespace Version {
    export type AsObject = {
        id: number,
        table: string,
        abbreviation: string,
        language: string,
        version: string,
        infoText: string,
        infoUrl: string,
        publisher: string,
        copyright: string,
        copyrightInfo: string,
    }
}

export class Versions extends jspb.Message {
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };

    static toObject(includeInstance: boolean, msg: Versions): Versions.AsObject;

    static serializeBinaryToWriter(message: Versions, writer: jspb.BinaryWriter): void;

    static deserializeBinary(bytes: Uint8Array): Versions;

    static deserializeBinaryFromReader(message: Versions, reader: jspb.BinaryReader): Versions;

    clearVersionsList(): void;

    getVersionsList(): Array<Version>;

    setVersionsList(value: Array<Version>): void;

    addVersions(value?: Version, index?: number): Version;

    serializeBinary(): Uint8Array;

    toObject(includeInstance?: boolean): Versions.AsObject;
}

export namespace Versions {
    export type AsObject = {
        versionsList: Array<Version.AsObject>,
    }
}

