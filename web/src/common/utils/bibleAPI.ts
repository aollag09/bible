export class BibleAPI {


    private static protocol = "http"
    private static host = BibleAPI.getHost()
    private static port = "3301"
    private static path = "bible/v1/"

    static url = BibleAPI.protocol + "://" + BibleAPI.host + ":" + BibleAPI.port + "/" + BibleAPI.path

    private static getHost() {
        if (process.env.NODE_ENV === "production") {
            return "localhost"//"api"
        } else {
            return "localhost"
        }
    }
}