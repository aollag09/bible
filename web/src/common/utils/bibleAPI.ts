

export class BibleAPI {

    static protocol = "http"
    static host = "192.168.1.15"
    static port = "3301"
    static path = "bible/v1/"

    static url = BibleAPI.protocol + "://" + BibleAPI.host + ":" + BibleAPI.port + "/" + BibleAPI.path

}