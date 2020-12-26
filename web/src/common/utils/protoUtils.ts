import {Message} from "google-protobuf";

export class ProtoUtils {

    public static serialize(message: Message): string {
        return Message.bytesAsB64(message.serializeBinary());
    }

}