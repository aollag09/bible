
export class SQLUtils{

    public static quote( word:string){
        return "\'" + word + "\'"
    }

    public static doubleQuote( word:string){
        return "\"" + word + "\""
    }

    public static backTics( word:string){
        return "\`" + word + "\`"
    }
}