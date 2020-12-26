export class DateTimeUtils {

    public static current(): number {
        return Math.round((new Date()).getTime() / 1000);
    }

    public static toDateTime(secs: number): Date {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}