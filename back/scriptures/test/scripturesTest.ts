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
});
