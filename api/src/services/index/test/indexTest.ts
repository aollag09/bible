import { Index } from "../index";

var assert = require('assert');



describe('Index', function () {

    describe('#getClient()', function () {
        it('Check index js client connection', function () {
            let index = new Index()
            let client = index.getClient()
            assert.equal(true, client != null && client != undefined)
        });
    });



    describe('#searchVerse()', function () {
        it('Search Jésus in French bible', async function () {
            let index = new Index()
            let res = await index.search("bible_fr_apee", "Jésus")
            res.body.hits.hits.forEach(hit => {
                assert.equal(true, hit._source.t.includes("Jésus"))
            });
        });
    });


});