import { expect } from 'chai';
import { Database } from "../../database/database";
import { ReadDAL } from '../readDAL';



describe('Read Data Access Layer Tests', async function () {

    let database = Database.get()
    let readDAL = new ReadDAL(database)

    describe('#withId', async function () {

        it('get -1 non existing', async function () {
            let id = -1
            let tag = await readDAL.withId(id)!
            expect(tag).to.be.undefined;
        });
    });

    describe('#withBookChapter', async function () {

        it('with Book -1000 Chapter -1000 non existing', async function () {
            let book = -1000
            let chapter = -1000
            let notes = await readDAL.withBookChapter(book, chapter)
            expect(notes.getReadsList().length).to.be.eq(0);
        });

    });



    describe('#withOwner', async function () {

        it('with Book -1000 Chapter -1000 non existing', async function () {
            let owner = -1000
            let chapter = -1000
            let notes = await readDAL.withOwner(owner)
            expect(notes.getReadsList().length).to.be.eq(0);
        });

    });

})