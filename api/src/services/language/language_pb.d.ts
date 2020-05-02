// package: bible
// file: services/language/language.proto

import * as jspb from "google-protobuf";

export class Language extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Language.AsObject;
  static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Language;
  static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class Languages extends jspb.Message {
  clearLanguagesList(): void;
  getLanguagesList(): Array<Language>;
  setLanguagesList(value: Array<Language>): void;
  addLanguages(value?: Language, index?: number): Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Languages.AsObject;
  static toObject(includeInstance: boolean, msg: Languages): Languages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Languages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Languages;
  static deserializeBinaryFromReader(message: Languages, reader: jspb.BinaryReader): Languages;
}

export namespace Languages {
  export type AsObject = {
    languagesList: Array<Language.AsObject>,
  }
}

