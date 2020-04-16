import { Index } from "../index";

var assert = require('assert');


describe('Index Data Access Layer', function () {

    describe('#getClient()', function () {
        it('Check index js client connection', function () {
            let index = new Index()
            let client = index.getClient()
            assert.equal(true, client != null && client != undefined)
        });
    });

    describe('#search()', function () {
        it('Search Jésus in French bible', async function () {
            let index = new Index()
            let res = await index.searchScripture("bible_fr_apee", "Jésus")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("Jésus"))
            });
        });

        it('Search Pilate in French bible', async function () {
            let index = new Index()
            let res = await index.searchScripture("bible_fr_apee", "Pilate")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("Pilate"))
            });
        });
    });


    describe('#searchAll()', function () {
        it('Search God in all bible', async function () {
            let index = new Index()
            let res = await index.searchAllScriputure("God")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("God"))
            });
        });

        it('Search gospel in all bible', async function () {
            let index = new Index()
            let res = await index.searchAllScriputure("gospel")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("Gospel") || verse.getScripture().includes("gospel"))
            });
        });
    });

});