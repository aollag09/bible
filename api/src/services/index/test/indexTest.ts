import { Index } from "../index";
import { VersionDAL } from "../../version/versionDAL";
import { Database } from "../../database/database";

var assert = require('assert');


describe('Index', function () {

    describe('#getClient()', function () {
        it('Check index js client connection', function () {
            let index = new Index()
            let client = index.getClient()
            assert.equal(true, client != null && client != undefined)
        });
    });


    describe('#getIndex()', function () {
        it('Check index name is valid', async function () {
            let index = new Index()
            let version = await new VersionDAL(new Database()).getDefault()
            assert.equal("bible_en_asv", index.getIndex(version))
        });
    });
});