import { Index } from "../../index/index";
import { SearchDAL } from "../searchDAL";

var assert = require('assert');


describe('Index Data Access Layer', function () {

    let index = new Index()
    let search = new SearchDAL(index)

    describe('#search()', function () {

        it('Search Jésus in French bible', async function () {

            let res = await search.searchScripture("bible_fr_apee", "Jésus")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("Jésus"))
            });
        });

        it('Search Pilate in French bible', async function () {
            let index = new Index()
            let res = await search.searchScripture("bible_fr_apee", "Pilate")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("Pilate"))
            });
        });
    });


    describe('#searchAll()', function () {
        it('Search God in all bible', async function () {
            let index = new Index()
            let res = await search.searchAllScriputure("God")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("God"))
            });
        });

        it('Search gospel in all bible', async function () {
            let index = new Index()
            let res = await search.searchAllScriputure("gospel")
            res.getScripturesList().forEach(verse => {
                assert.equal(true, verse.getScripture().includes("Gospel") || verse.getScripture().includes("gospel"))
            });
        });
    });

});