// package: bible
// file: scriptures/scriptures.proto

import * as jspb from "google-protobuf";

export class Scripture extends jspb.Message {
  getId(): number;
  setId(value: number): void;

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
  static toObject(includeInstance: boolean, msg: Scripture): Scripture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scripture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scripture;
  static deserializeBinaryFromReader(message: Scripture, reader: jspb.BinaryReader): Scripture;
}

export namespace Scripture {
  export type AsObject = {
    id: number,
    book: number,
    chapter: number,
    verse: number,
    scripture: string,
  }
}

export class Scriptures extends jspb.Message {
  getScripturesMap(): jspb.Map<number, string>;
  clearScripturesMap(): void;
  getBook(): number;
  setBook(value: number): void;

  getChapter(): number;
  setChapter(value: number): void;

  getVerse(): number;
  setVerse(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scriptures.AsObject;
  static toObject(includeInstance: boolean, msg: Scriptures): Scriptures.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scriptures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scriptures;
  static deserializeBinaryFromReader(message: Scriptures, reader: jspb.BinaryReader): Scriptures;
}

export namespace Scriptures {
  export type AsObject = {
    scripturesMap: Array<[number, string]>,
    book: number,
    chapter: number,
    verse: number,
  }
}

export class ScriptureList extends jspb.Message {
  clearScripturelistList(): void;
  getScripturelistList(): Array<Scripture>;
  setScripturelistList(value: Array<Scripture>): void;
  addScripturelist(value?: Scripture, index?: number): Scripture;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScriptureList.AsObject;
  static toObject(includeInstance: boolean, msg: ScriptureList): ScriptureList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScriptureList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScriptureList;
  static deserializeBinaryFromReader(message: ScriptureList, reader: jspb.BinaryReader): ScriptureList;
}

export namespace ScriptureList {
  export type AsObject = {
    scripturelistList: Array<Scripture.AsObject>,
  }
}

export class ScripturesList extends jspb.Message {
  clearScriptureslistList(): void;
  getScriptureslistList(): Array<Scriptures>;
  setScriptureslistList(value: Array<Scriptures>): void;
  addScriptureslist(value?: Scriptures, index?: number): Scriptures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScripturesList.AsObject;
  static toObject(includeInstance: boolean, msg: ScripturesList): ScripturesList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScripturesList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScripturesList;
  static deserializeBinaryFromReader(message: ScripturesList, reader: jspb.BinaryReader): ScripturesList;
}

export namespace ScripturesList {
  export type AsObject = {
    scriptureslistList: Array<Scriptures.AsObject>,
  }
}

