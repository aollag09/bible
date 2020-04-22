// package: bible
// file: services/tag/tag.proto

import * as jspb from "google-protobuf";

export class Tag extends jspb.Message {
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

  getType(): string;
  setType(value: string): void;

  getSubtype(): string;
  setSubtype(value: string): void;

  hasWhattag(): boolean;
  clearWhattag(): void;
  getWhattag(): WhatTag | undefined;
  setWhattag(value?: WhatTag): void;

  hasWhotag(): boolean;
  clearWhotag(): void;
  getWhotag(): WhoTag | undefined;
  setWhotag(value?: WhoTag): void;

  hasWheretag(): boolean;
  clearWheretag(): void;
  getWheretag(): WhereTag | undefined;
  setWheretag(value?: WhereTag): void;

  hasWhentag(): boolean;
  clearWhentag(): void;
  getWhentag(): WhenTag | undefined;
  setWhentag(value?: WhenTag): void;

  hasHowtag(): boolean;
  clearHowtag(): void;
  getHowtag(): HowTag | undefined;
  setHowtag(value?: HowTag): void;

  getTagCase(): Tag.TagCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    id: number,
    owner: number,
    created: number,
    modified: number,
    start: string,
    end: string,
    type: string,
    subtype: string,
    whattag?: WhatTag.AsObject,
    whotag?: WhoTag.AsObject,
    wheretag?: WhereTag.AsObject,
    whentag?: WhenTag.AsObject,
    howtag?: HowTag.AsObject,
  }

  export enum TagCase {
    TAG_NOT_SET = 0,
    WHATTAG = 10,
    WHOTAG = 12,
    WHERETAG = 13,
    WHENTAG = 14,
    HOWTAG = 15,
  }
}

export class Tags extends jspb.Message {
  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tags.AsObject;
  static toObject(includeInstance: boolean, msg: Tags): Tags.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tags, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tags;
  static deserializeBinaryFromReader(message: Tags, reader: jspb.BinaryReader): Tags;
}

export namespace Tags {
  export type AsObject = {
    tagsList: Array<Tag.AsObject>,
  }
}

export class WhatTag extends jspb.Message {
  getWhat(): string;
  setWhat(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhatTag.AsObject;
  static toObject(includeInstance: boolean, msg: WhatTag): WhatTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhatTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhatTag;
  static deserializeBinaryFromReader(message: WhatTag, reader: jspb.BinaryReader): WhatTag;
}

export namespace WhatTag {
  export type AsObject = {
    what: string,
    details: string,
  }
}

export class WhoTag extends jspb.Message {
  getWho(): number;
  setWho(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoTag.AsObject;
  static toObject(includeInstance: boolean, msg: WhoTag): WhoTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhoTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoTag;
  static deserializeBinaryFromReader(message: WhoTag, reader: jspb.BinaryReader): WhoTag;
}

export namespace WhoTag {
  export type AsObject = {
    who: number,
  }
}

export class WhereTag extends jspb.Message {
  getWhere(): string;
  setWhere(value: string): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhereTag.AsObject;
  static toObject(includeInstance: boolean, msg: WhereTag): WhereTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhereTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhereTag;
  static deserializeBinaryFromReader(message: WhereTag, reader: jspb.BinaryReader): WhereTag;
}

export namespace WhereTag {
  export type AsObject = {
    where: string,
    latitude: number,
    longitude: number,
  }
}

export class WhenTag extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhenTag.AsObject;
  static toObject(includeInstance: boolean, msg: WhenTag): WhenTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhenTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhenTag;
  static deserializeBinaryFromReader(message: WhenTag, reader: jspb.BinaryReader): WhenTag;
}

export namespace WhenTag {
  export type AsObject = {
    year: number,
  }
}

export class HowTag extends jspb.Message {
  getHow(): string;
  setHow(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HowTag.AsObject;
  static toObject(includeInstance: boolean, msg: HowTag): HowTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HowTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HowTag;
  static deserializeBinaryFromReader(message: HowTag, reader: jspb.BinaryReader): HowTag;
}

export namespace HowTag {
  export type AsObject = {
    how: string,
    details: string,
  }
}

