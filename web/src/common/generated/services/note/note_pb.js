/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bible.Note', null, global);
goog.exportSymbol('proto.bible.Notes', null, global);

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
proto.bible.Note = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bible.Note, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.bible.Note.displayName = 'proto.bible.Note';
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
    proto.bible.Note.prototype.toObject = function (opt_includeInstance) {
        return proto.bible.Note.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.bible.Note} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.bible.Note.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0),
            owner: jspb.Message.getFieldWithDefault(msg, 2, 0),
            created: jspb.Message.getFieldWithDefault(msg, 4, 0),
            modified: jspb.Message.getFieldWithDefault(msg, 5, 0),
            start: jspb.Message.getFieldWithDefault(msg, 6, ""),
            end: jspb.Message.getFieldWithDefault(msg, 7, ""),
            book: jspb.Message.getFieldWithDefault(msg, 8, 0),
            chapter: jspb.Message.getFieldWithDefault(msg, 9, 0),
            type: jspb.Message.getFieldWithDefault(msg, 10, ""),
            note: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.bible.Note}
 */
proto.bible.Note.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bible.Note;
    return proto.bible.Note.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bible.Note} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bible.Note}
 */
proto.bible.Note.deserializeBinaryFromReader = function (msg, reader) {
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
                var value = /** @type {number} */ (reader.readInt32());
                msg.setOwner(value);
                break;
            case 4:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setCreated(value);
                break;
            case 5:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setModified(value);
                break;
            case 6:
                var value = /** @type {string} */ (reader.readString());
                msg.setStart(value);
                break;
            case 7:
                var value = /** @type {string} */ (reader.readString());
                msg.setEnd(value);
                break;
            case 8:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setBook(value);
                break;
            case 9:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setChapter(value);
                break;
            case 10:
                var value = /** @type {string} */ (reader.readString());
                msg.setType(value);
                break;
            case 11:
                var value = /** @type {string} */ (reader.readString());
                msg.setNote(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bible.Note.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.bible.Note.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bible.Note} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bible.Note.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(
            1,
            f
        );
    }
    f = message.getOwner();
    if (f !== 0) {
        writer.writeInt32(
            2,
            f
        );
    }
    f = message.getCreated();
    if (f !== 0) {
        writer.writeInt64(
            4,
            f
        );
    }
    f = message.getModified();
    if (f !== 0) {
        writer.writeInt64(
            5,
            f
        );
    }
    f = message.getStart();
    if (f.length > 0) {
        writer.writeString(
            6,
            f
        );
    }
    f = message.getEnd();
    if (f.length > 0) {
        writer.writeString(
            7,
            f
        );
    }
    f = message.getBook();
    if (f !== 0) {
        writer.writeInt32(
            8,
            f
        );
    }
    f = message.getChapter();
    if (f !== 0) {
        writer.writeInt32(
            9,
            f
        );
    }
    f = message.getType();
    if (f.length > 0) {
        writer.writeString(
            10,
            f
        );
    }
    f = message.getNote();
    if (f.length > 0) {
        writer.writeString(
            11,
            f
        );
    }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.bible.Note.prototype.getId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.bible.Note.prototype.setId = function (value) {
    jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 owner = 2;
 * @return {number}
 */
proto.bible.Note.prototype.getOwner = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bible.Note.prototype.setOwner = function (value) {
    jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 created = 4;
 * @return {number}
 */
proto.bible.Note.prototype.getCreated = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.bible.Note.prototype.setCreated = function (value) {
    jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 modified = 5;
 * @return {number}
 */
proto.bible.Note.prototype.getModified = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.bible.Note.prototype.setModified = function (value) {
    jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string start = 6;
 * @return {string}
 */
proto.bible.Note.prototype.getStart = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.bible.Note.prototype.setStart = function (value) {
    jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string end = 7;
 * @return {string}
 */
proto.bible.Note.prototype.getEnd = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.bible.Note.prototype.setEnd = function (value) {
    jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 book = 8;
 * @return {number}
 */
proto.bible.Note.prototype.getBook = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.bible.Note.prototype.setBook = function (value) {
    jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 chapter = 9;
 * @return {number}
 */
proto.bible.Note.prototype.getChapter = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.bible.Note.prototype.setChapter = function (value) {
    jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string type = 10;
 * @return {string}
 */
proto.bible.Note.prototype.getType = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.bible.Note.prototype.setType = function (value) {
    jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string note = 11;
 * @return {string}
 */
proto.bible.Note.prototype.getNote = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.bible.Note.prototype.setNote = function (value) {
    jspb.Message.setProto3StringField(this, 11, value);
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
proto.bible.Notes = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.bible.Notes.repeatedFields_, null);
};
goog.inherits(proto.bible.Notes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.bible.Notes.displayName = 'proto.bible.Notes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bible.Notes.repeatedFields_ = [1];


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
    proto.bible.Notes.prototype.toObject = function (opt_includeInstance) {
        return proto.bible.Notes.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.bible.Notes} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.bible.Notes.toObject = function (includeInstance, msg) {
        var f, obj = {
            notesList: jspb.Message.toObjectList(msg.getNotesList(),
                proto.bible.Note.toObject, includeInstance)
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
 * @return {!proto.bible.Notes}
 */
proto.bible.Notes.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bible.Notes;
    return proto.bible.Notes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bible.Notes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bible.Notes}
 */
proto.bible.Notes.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.bible.Note;
                reader.readMessage(value, proto.bible.Note.deserializeBinaryFromReader);
                msg.addNotes(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bible.Notes.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.bible.Notes.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bible.Notes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bible.Notes.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getNotesList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(
            1,
            f,
            proto.bible.Note.serializeBinaryToWriter
        );
    }
};


/**
 * repeated Note notes = 1;
 * @return {!Array<!proto.bible.Note>}
 */
proto.bible.Notes.prototype.getNotesList = function () {
    return /** @type{!Array<!proto.bible.Note>} */ (
        jspb.Message.getRepeatedWrapperField(this, proto.bible.Note, 1));
};


/** @param {!Array<!proto.bible.Note>} value */
proto.bible.Notes.prototype.setNotesList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bible.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bible.Note}
 */
proto.bible.Notes.prototype.addNotes = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bible.Note, opt_index);
};


proto.bible.Notes.prototype.clearNotesList = function () {
    this.setNotesList([]);
};


goog.object.extend(exports, proto.bible);
