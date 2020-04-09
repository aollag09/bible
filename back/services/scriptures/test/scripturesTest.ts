import { ScriptureDAL } from "../scriptureDAL";
import { Database } from "../../database/database";
import { VersionDAL } from "../../version/versionDAL";

var assert = require('assert');

describe('Scriptures Data Access Layer Tests', async function () {

    let database = new Database()
    let version = await new VersionDAL(database).getDefault()
    let scriptureDAL = new ScriptureDAL(database, version)

    describe('#withId', async function () {

        it('get 1001001', async function () {
            let id = 1001001
            let scripture = await scriptureDAL.withId(id)!
            assert.equal(id, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get 11022021', async function () {
            let id = 11022021
            let scripture = await scriptureDAL.withId(id)!
            assert.equal(id, scripture?.getId())
            assert.equal(11, scripture?.getBook())
            assert.equal(22, scripture?.getChapter())
            assert.equal(21, scripture?.getVerse())
        });

    });

    describe('#withIdS', async function () {

        it('get 1001001', async function () {
            let id = "1001001"
            let scripture = await scriptureDAL.withIdS(id)!
            assert.equal(id, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get 11022021', async function () {
            let id = "11022021"
            let scripture = await scriptureDAL.withIdS(id)!
            assert.equal(id, scripture?.getId())
            assert.equal(11, scripture?.getBook())
            assert.equal(22, scripture?.getChapter())
            assert.equal(21, scripture?.getVerse())
        });

    });



    describe('#withinId', async function () {

        it('get within 1001001 and 1001020', async function () {
            let from = 1001001
            let to = 1001020
            let scriptures = await scriptureDAL.withinId(from, to)
            assert.equal(20, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(from, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get within 1001020 and 1001001 (reverse order)', async function () {
            let to = 1001001
            let from = 1001020
            let scriptures = await scriptureDAL.withinId(from, to)
            assert.equal(0, scriptures?.getScripturelistList().length)
        });


        it('get within 1001001 and 1001001 (one item)', async function () {
            let to = 1001001
            let from = 1001001
            let scriptures = await scriptureDAL.withinId(from, to)
            assert.equal(1, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(from, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get within 1001001 and 02001005 (larget query)', async function () {
            let from = "1001001"
            let to = "02001005"
            let scriptures = await scriptureDAL.withinIdS(from, to)
            assert.equal(1538, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(from, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

    });

    describe('#withBook', async function () {
        it('get book 1', async function () {
            let scriptures = await scriptureDAL.withBook(1)
            assert.equal(1533, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get book 23', async function () {
            let scriptures = await scriptureDAL.withBook(23)
            assert.equal(1292, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(23, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });
    });


    describe('#withBookAndChapter', async function () {
        it('get book 1 chap 1', async function () {
            let scriptures = await scriptureDAL.withBookAndChapter(1, 1)
            assert.equal(31, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get book 23 chapt 1', async function () {
            let scriptures = await scriptureDAL.withBookAndChapter(23, 1)
            assert.equal(31, scriptures?.getScripturelistList().length)
            let scripture = scriptures.getScripturelistList()[0]
            assert.equal(23, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });
    });
});