



export class Key {


    public static getKey(prefix: string, value: { toString: () => string; }): string {
        return "key-" + prefix + "-" + value.toString();
    }

}