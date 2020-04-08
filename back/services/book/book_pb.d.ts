// package: bible
// file: services/book/book.proto

import * as jspb from "google-protobuf";

export class Book extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getIsnt(): boolean;
  setIsnt(value: boolean): void;

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
    isnt: boolean,
    genre: GenreMap[keyof GenreMap],
    abbreviationsList: Array<string>,
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

