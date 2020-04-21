import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Message } from 'google-protobuf';
import { Database } from "../../database/database";
import { Index } from "../../index/index";
import { Scriptures } from '../../scriptures/scriptures_pb';
import { VersionDAL } from "../../version/versionDAL";
import { SearchDAL } from "../searchDAL";
chai.use(chaiHttp);
var assert = require('assert');

describe('Index Data Access Layer', function () {

    let index = Index.get()
    let search = new SearchDAL(index)

    describe('#search()', async function () {
        let version = await new VersionDAL(Database.get()).getFrenchDefault()
        it('Search Jésus in French bible', async function () {

            let res = await search.searchScripture(version, "Jésus")
            res.getScripturesList().forEach(verse => {
                expect(verse.getScripture()).to.have.string('Jésus');
            });
        });

        it('Search Pilate in French bible', async function () {
            let index = Index.get()
            let res = await search.searchScripture(version, "Pilate")
            res.getScripturesList().forEach(verse => {
                expect(verse.getScripture()).to.have.string('Pilate');
            });
        });
    });


    describe('#searchAll()', function () {
        it('Search God in all bible', async function () {
            let index = Index.get()
            let res = await search.searchAllScriputure("God")
            res.getScripturesList().forEach(verse => {
                expect(verse.getScripture()).to.have.string('God');
            });
        });

        it('Search gospel in all bible', async function () {
            let index = Index.get()
            let res = await search.searchAllScriputure("gospel")
            res.getScripturesList().forEach(verse => {
                expect(verse.getScripture().toLowerCase()).to.have.string('gospel')
            });
        });
    });

});



describe('Index REST Services', function () {

    let application = require('../../../server');


    describe('#/bible/v1/_search', function () {

        let path = "/bible/v1/_search"

        it('Search in all scriptures God', async function () {
            chai.request(application)
                .get(path + "?q=God")
                .then(res => {
                    assert.equal(200, res.status)
                    let scriptures = Scriptures.deserializeBinary(Message.bytesAsU8(res.text))
                    scriptures.getScripturesList().forEach(verse => {
                        expect(verse.getScripture().toLowerCase()).to.have.string('god')
                    });
                });
        });

        it('Search in all scriptures Jesus', async function () {
            chai.request(application)
                .get(path + "?q=Jesus")
                .then(res => {
                    assert.equal(200, res.status)
                    let scriptures = Scriptures.deserializeBinary(Message.bytesAsU8(res.text))
                    scriptures.getScripturesList().forEach(verse => {
                        expect(verse.getScripture().toLowerCase()).to.have.string('jesus')
                    });
                });
        });
    });


    describe('#/bible/v1/version/:id/_search', async function () {

        let version = await new VersionDAL(Database.get()).getFrenchDefault()
        let path = "/bible/v1/version/" + version.getId() + "/_search"

        it('Search in french scripture Dieu', async function () {
            chai.request(application)
                .get(path + "/?q=Dieu")
                .then(res => {
                    assert.equal(200, res.status)
                    let scriptures = Scriptures.deserializeBinary(Message.bytesAsU8(res.text))
                    scriptures.getScripturesList().forEach(verse => {
                        expect(verse.getScripture().toLowerCase()).to.have.string('dieu');
                    });
                });
        });

        it('Search in french scriptures Jésus', async function () {
            chai.request(application)
                .get(path + "?q=Jésus")
                .then(res => {
                    assert.equal(200, res.status)
                    let scriptures = Scriptures.deserializeBinary(Message.bytesAsU8(res.text))
                    scriptures.getScripturesList().forEach(verse => {
                        expect(verse.getScripture().toLowerCase()).to.have.string("jésus")
                    });
                });
        });
    });

});
