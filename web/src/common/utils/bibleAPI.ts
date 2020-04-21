

export class BibleAPI {

    static protocol = "http"
    static host = "localhost"
    static port = "3301"
    static path = "bible/v1/"

    static url = BibleAPI.protocol + "://" + BibleAPI.host + ":" + BibleAPI.port + "/" + BibleAPI.path

}