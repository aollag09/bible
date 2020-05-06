import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { Database } from "../../database/database"
import { NoteDAL } from "../noteDAL";



describe('Note Data Access Layer Tests', async function () {

    let database = Database.get()
    let noteDAL = new NoteDAL(database)

    describe('#withId', async function () {

        it('get -1 non existing', async function () {
            let id = -1
            let tag = await noteDAL.withId(id)!
            expect(tag).to.be.undefined;
        });
    });

    describe('#withBookChapter', async function () {

        it('with Book -1000 Chapter -1000 non existing', async function () {
            let book = -1000
            let chapter = -1000
            let notes = await noteDAL.withBookChapter(book, chapter)
            expect(notes.getNotesList().length).to.be.eq(0);
        });

    });

})