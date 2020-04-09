import chai from 'chai';
import chaiHttp from "chai-http";
import { Message } from 'google-protobuf';
import { RouteUtils } from '../../../utils/RouteUtils';
import { Database } from "../../database/database";
import { VersionDAL } from "../../version/versionDAL";
import { ScriptureDAL } from "../scriptureDAL";
import { Scripture, Scriptures } from '../scriptures_pb';

chai.use(chaiHttp);
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
            assert.equal(20, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(from, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get within 1001020 and 1001001 (reverse order)', async function () {
            let to = 1001001
            let from = 1001020
            let scriptures = await scriptureDAL.withinId(from, to)
            assert.equal(0, scriptures?.getScripturesList().length)
        });


        it('get within 1001001 and 1001001 (one item)', async function () {
            let to = 1001001
            let from = 1001001
            let scriptures = await scriptureDAL.withinId(from, to)
            assert.equal(1, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(from, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get within 1001001 and 02001005 (larget query)', async function () {
            let from = "1001001"
            let to = "02001005"
            let scriptures = await scriptureDAL.withinIdS(from, to)
            assert.equal(1538, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(from, scripture?.getId())
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

    });

    describe('#withBook', async function () {
        it('get book 1', async function () {
            let scriptures = await scriptureDAL.withBook(1)
            assert.equal(1533, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get book 23', async function () {
            let scriptures = await scriptureDAL.withBook(23)
            assert.equal(1292, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(23, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });
    });


    describe('#withBookAndChapter', async function () {
        it('get book 1 chap 1', async function () {
            let scriptures = await scriptureDAL.withBookAndChapter(1, 1)
            assert.equal(31, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(1, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });

        it('get book 23 chapt 1', async function () {
            let scriptures = await scriptureDAL.withBookAndChapter(23, 1)
            assert.equal(31, scriptures?.getScripturesList().length)
            let scripture = scriptures.getScripturesList()[0]
            assert.equal(23, scripture?.getBook())
            assert.equal(1, scripture?.getChapter())
            assert.equal(1, scripture?.getVerse())
        });
    });
});

describe('Scriptures REST Services', function () {

    let application = require('../../../server');
    let path = RouteUtils.BASE_PATH + "scriptures/"

    describe('#' + path + ":versionId/:verseId", function () {

        it('Get verse by id 1001001', async function () {
            let versionId = 1
            let verseId = '1001001'
            chai.request(application)
                .get(path + versionId + "/" + verseId)
                .then(res => {
                    assert.equal(200, res.status)
                    let verse = Scripture.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(verseId, verse.getId())
                });
        });
    });


    describe('#' + path + ":versionId/book/:bookId", function () {

        it('Get verse by book id 1', async function () {
            let versionId = 1
            let bookId = 1
            chai.request(application)
                .get(path + versionId + "/book/" + bookId)
                .then(res => {
                    assert.equal(200, res.status)
                    let verses = Scriptures.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(1533, verses.getScripturesList().length)
                });
        });
    });


});
