/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bible.Book', null, global);
goog.exportSymbol('proto.bible.Genre', null, global);
goog.exportSymbol('proto.bible.Group', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bible.Book = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bible.Book.repeatedFields_, null);
};
goog.inherits(proto.bible.Book, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bible.Book.displayName = 'proto.bible.Book';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bible.Book.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bible.Book.prototype.toObject = function(opt_includeInstance) {
  return proto.bible.Book.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bible.Book} msg The msg instance to transform.
 * @return {!Object}
 */
proto.bible.Book.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    name: msg.getName(),
    group: (f = msg.getGroup()) && proto.bible.Group.toObject(includeInstance, f),
    genre: msg.getGenre(),
    abbreviationsList: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bible.Book}
 */
proto.bible.Book.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bible.Book;
  return proto.bible.Book.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bible.Book} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bible.Book}
 */
proto.bible.Book.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.bible.Group;
      reader.readMessage(value,proto.bible.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 4:
      var value = /** @type {!proto.bible.Genre} */ (reader.readEnum());
      msg.setGenre(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.getAbbreviationsList().push(value);
      msg.setAbbreviationsList(msg.getAbbreviationsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.bible.Book} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.bible.Book.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bible.Book.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.bible.Book.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getGroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bible.Group.serializeBinaryToWriter
    );
  }
  f = this.getGenre();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = this.getAbbreviationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.bible.Book} The clone.
 */
proto.bible.Book.prototype.cloneMessage = function() {
  return /** @type {!proto.bible.Book} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.bible.Book.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.bible.Book.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bible.Book.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.bible.Book.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Group group = 3;
 * @return {proto.bible.Group}
 */
proto.bible.Book.prototype.getGroup = function() {
  return /** @type{proto.bible.Group} */ (
    jspb.Message.getWrapperField(this, proto.bible.Group, 3));
};


/** @param {proto.bible.Group|undefined} value  */
proto.bible.Book.prototype.setGroup = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.bible.Book.prototype.clearGroup = function() {
  this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.bible.Book.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Genre genre = 4;
 * @return {!proto.bible.Genre}
 */
proto.bible.Book.prototype.getGenre = function() {
  return /** @type {!proto.bible.Genre} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {!proto.bible.Genre} value  */
proto.bible.Book.prototype.setGenre = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated string abbreviations = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.bible.Book.prototype.getAbbreviationsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 5));
};


/** @param {Array.<string>} value  */
proto.bible.Book.prototype.setAbbreviationsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


proto.bible.Book.prototype.clearAbbreviationsList = function() {
  jspb.Message.setField(this, 5, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bible.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bible.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bible.Group.displayName = 'proto.bible.Group';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bible.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.bible.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bible.Group} msg The msg instance to transform.
 * @return {!Object}
 */
proto.bible.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    isnewtestament: msg.getIsnewtestament()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bible.Group}
 */
proto.bible.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bible.Group;
  return proto.bible.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bible.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bible.Group}
 */
proto.bible.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsnewtestament(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.bible.Group} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.bible.Group.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bible.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.bible.Group.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getIsnewtestament();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.bible.Group} The clone.
 */
proto.bible.Group.prototype.cloneMessage = function() {
  return /** @type {!proto.bible.Group} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.bible.Group.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.bible.Group.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool isNewTestament = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.bible.Group.prototype.getIsnewtestament = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 2, false));
};


/** @param {boolean} value  */
proto.bible.Group.prototype.setIsnewtestament = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.bible.Genre = {
  UNKNOWN: 0,
  LAW: 1,
  HISTORY: 2,
  WISDOM: 3,
  PROPHETS: 4,
  GOSPELS: 5,
  ACTS: 6,
  EPISTLES: 7,
  APOCALYPTIC: 8
};

goog.object.extend(exports, proto.bible);
