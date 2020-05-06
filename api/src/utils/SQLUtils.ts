
export class SQLUtils {


    public static sanetize(word: string): string {
        word.replace("\'", "\'\'")
        return word
    }


    public static quote(word: string) {
        return "\'" + SQLUtils.sanetize(word) + "\'"
    }

    public static doubleQuote(word: string) {
        return "\"" + SQLUtils.sanetize(word) + "\""
    }

    public static backTics(word: string) {
        return "\`" + SQLUtils.sanetize(word) + "\`"
    }

    public static buildSQLCreate(table: string, values: Map<string, string>): string {
        let sql: string = 'insert into ' + table + ' ('
        let i = 0
        values.forEach((value: string, key: string) => {
            if (i == values.size - 1)
                sql += SQLUtils.backTics(key) + ") "
            else
                sql += SQLUtils.backTics(key) + ", "
            i++;
        })
        sql += "values ("
        i = 0
        values.forEach((value: string, key: string) => {
            if (i == values.size - 1)
                sql += SQLUtils.quote(value) + ") "
            else
                sql += SQLUtils.quote(value) + ", "
            i++;
        })
        return sql;
    }
}