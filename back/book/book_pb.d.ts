// package: bible
// file: book/book.proto

import * as jspb from "google-protobuf";

export class Book extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Group | undefined;
  setGroup(value?: Group): void;

  getGenre(): GenreMap[keyof GenreMap];
  setGenre(value: GenreMap[keyof GenreMap]): void;

  clearAbbreviationsList(): void;
  getAbbreviationsList(): Array<string>;
  setAbbreviationsList(value: Array<string>): void;
  addAbbreviations(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    id: number,
    name: string,
    group?: Group.AsObject,
    genre: GenreMap[keyof GenreMap],
    abbreviationsList: Array<string>,
  }
}

export class Group extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getIsnewtestament(): boolean;
  setIsnewtestament(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: number,
    isnewtestament: boolean,
  }
}

export interface GenreMap {
  UNKNOWN: 0;
  LAW: 1;
  HISTORY: 2;
  WISDOM: 3;
  PROPHETS: 4;
  GOSPELS: 5;
  ACTS: 6;
  EPISTLES: 7;
  APOCALYPTIC: 8;
}

export const Genre: GenreMap;

