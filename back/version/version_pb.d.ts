// package: bible
// file: version/version.proto

import * as jspb from "google-protobuf";

export class Version extends jspb.Message {
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
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
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

