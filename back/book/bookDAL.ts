
export class BookDAL {


    private sqlSelectBook(): String {
        return `
        select
            ke.b,
            ke.n,
            ke.t,
            kae.a,
            kae.p,
            kge.n
        from
            key_english ke
        left join 
            key_abbreviations_english kae on ke.b = kae.b
        left join 
            key_genre_english kge on ke.g = kge.g
        `
    }
}