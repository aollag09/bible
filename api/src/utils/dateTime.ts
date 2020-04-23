

export class DateTime {

    public static current(): number {
        return Math.round((new Date()).getTime() / 1000);
    }
}