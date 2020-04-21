import { Database } from "../../database/database";
import { VersionDAL } from "../../version/versionDAL";
import { Index } from "../index";

var assert = require('assert');


describe('Index', function () {

    describe('#getClient()', function () {
        it('Check index js client connection', function () {
            let index = Index.get()
            let client = index.getClient()
            assert.equal(true, client != null && client != undefined)
        });
    });


    describe('#getIndex()', function () {
        it('Check index name is valid', async function () {
            let index = Index.get()
            let version = await new VersionDAL(Database.get()).getDefault()
            assert.equal("bible_en_asv", index.getIndexName(version))
        });
    });
});