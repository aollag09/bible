



export class Key {


    public static getKey(prefix: string, value: string): string {
        return "key-" + prefix + "-" + value;
    }

}