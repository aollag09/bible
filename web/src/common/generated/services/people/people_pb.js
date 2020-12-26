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

goog.exportSymbol('proto.bible.People', null, global);
goog.exportSymbol('proto.bible.Peoples', null, global);

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
proto.bible.People = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bible.People, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.bible.People.displayName = 'proto.bible.People';
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
    proto.bible.People.prototype.toObject = function (opt_includeInstance) {
        return proto.bible.People.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.bible.People} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.bible.People.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0),
            language: jspb.Message.getFieldWithDefault(msg, 2, 0),
            name: jspb.Message.getFieldWithDefault(msg, 3, ""),
            description: jspb.Message.getFieldWithDefault(msg, 4, ""),
            gender: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bible.People}
 */
proto.bible.People.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bible.People;
    return proto.bible.People.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bible.People} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bible.People}
 */
proto.bible.People.deserializeBinaryFromReader = function (msg, reader) {
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
                msg.setLanguage(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setName(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setDescription(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.setGender(value);
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
proto.bible.People.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.bible.People.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bible.People} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bible.People.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(
            1,
            f
        );
    }
    f = message.getLanguage();
    if (f !== 0) {
        writer.writeInt32(
            2,
            f
        );
    }
    f = message.getName();
    if (f.length > 0) {
        writer.writeString(
            3,
            f
        );
    }
    f = message.getDescription();
    if (f.length > 0) {
        writer.writeString(
            4,
            f
        );
    }
    f = message.getGender();
    if (f.length > 0) {
        writer.writeString(
            5,
            f
        );
    }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.bible.People.prototype.getId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.bible.People.prototype.setId = function (value) {
    jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 language = 2;
 * @return {number}
 */
proto.bible.People.prototype.getLanguage = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bible.People.prototype.setLanguage = function (value) {
    jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.bible.People.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bible.People.prototype.setName = function (value) {
    jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.bible.People.prototype.getDescription = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.bible.People.prototype.setDescription = function (value) {
    jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string gender = 5;
 * @return {string}
 */
proto.bible.People.prototype.getGender = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.bible.People.prototype.setGender = function (value) {
    jspb.Message.setProto3StringField(this, 5, value);
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
proto.bible.Peoples = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.bible.Peoples.repeatedFields_, null);
};
goog.inherits(proto.bible.Peoples, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.bible.Peoples.displayName = 'proto.bible.Peoples';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bible.Peoples.repeatedFields_ = [1];


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
    proto.bible.Peoples.prototype.toObject = function (opt_includeInstance) {
        return proto.bible.Peoples.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.bible.Peoples} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.bible.Peoples.toObject = function (includeInstance, msg) {
        var f, obj = {
            peoplesList: jspb.Message.toObjectList(msg.getPeoplesList(),
                proto.bible.People.toObject, includeInstance)
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
 * @return {!proto.bible.Peoples}
 */
proto.bible.Peoples.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bible.Peoples;
    return proto.bible.Peoples.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bible.Peoples} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bible.Peoples}
 */
proto.bible.Peoples.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.bible.People;
                reader.readMessage(value, proto.bible.People.deserializeBinaryFromReader);
                msg.addPeoples(value);
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
proto.bible.Peoples.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.bible.Peoples.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bible.Peoples} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bible.Peoples.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getPeoplesList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(
            1,
            f,
            proto.bible.People.serializeBinaryToWriter
        );
    }
};


/**
 * repeated People peoples = 1;
 * @return {!Array<!proto.bible.People>}
 */
proto.bible.Peoples.prototype.getPeoplesList = function () {
    return /** @type{!Array<!proto.bible.People>} */ (
        jspb.Message.getRepeatedWrapperField(this, proto.bible.People, 1));
};


/** @param {!Array<!proto.bible.People>} value */
proto.bible.Peoples.prototype.setPeoplesList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bible.People=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bible.People}
 */
proto.bible.Peoples.prototype.addPeoples = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bible.People, opt_index);
};


proto.bible.Peoples.prototype.clearPeoplesList = function () {
    this.setPeoplesList([]);
};


goog.object.extend(exports, proto.bible);
