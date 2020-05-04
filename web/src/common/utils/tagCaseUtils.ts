
import { Tag } from "../generated/services/tag/tag_pb";


export class TagCaseUtils {


    public static getStringName(tagcase: Tag.TagCase): string {
        switch (+tagcase) {

            case Tag.TagCase.WHATTAG:
                return "what";
            case Tag.TagCase.WHENTAG:
                return "when";
            case Tag.TagCase.WHERETAG:
                return "where";
            case Tag.TagCase.WHOTAG:
                return "who";
            case Tag.TagCase.HOWTAG:
                return "how";
            default:
                return "";
        }
    }
}