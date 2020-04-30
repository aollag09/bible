

export class BibleAPI {

    private static protocol = "http"
    private static host = "192.168.1.15"
    private static port = "3301"
    private static path = "bible/v1/"

    static url = BibleAPI.protocol + "://" + BibleAPI.host + ":" + BibleAPI.port + "/" + BibleAPI.path

}