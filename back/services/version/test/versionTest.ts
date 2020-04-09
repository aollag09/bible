import { Version } from "../version_pb";
import { VersionDAL } from "../versionDAL";
import { Database } from "../../database/database";
import { VersionSchema } from "../versionSchema";
import { Message } from "google-protobuf";
import chaiHttp from "chai-http";
import chai from 'chai';

chai.use(chaiHttp);
var assert = require('assert');

describe('Version Protobuf object', function () {
    describe('#buildVersion', function () {
        it('Build Version', function () {
            var version: Version = new Version()
            assert.equal((version != null), true)
        });
    });
    describe('#getId', function () {
        it('Get & Set Version Id', function () {
            var version: Version = new Version()
            assert.equal((version.getId() == 0), true)
            version.setId(42)
            assert.equal(version.getId(), 42)
        });
    });
    describe('#getLanguage', function () {
        it('Get & Set Version Language', function () {
            var version: Version = new Version()
            assert.equal((version.getLanguage() == ""), true)
            version.setLanguage("French")
            assert.equal(version.getLanguage(), "French")
        });
    });
});

describe('Versions Data Access Layer Tests', function () {
    describe('#listVersions', function () {
        it('List all existing versions in the database', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let list = await versionDAL.list();
            assert.equal(7, list.length)
        });
    });

    describe('#withId', function () {

        it('get 1', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.withId(1);
            assert.equal("ASV", version?.getAbbreviation())
        });

        it('get 2', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.withId(2);
            assert.equal("BBE", version?.getAbbreviation())
        });

        it('get 0 non existing', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.withId(0);
            assert.equal(undefined, version)
        });

    });


    describe('#withLanguage', function () {

        it('get English', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let versions = await versionDAL.withLanguage("english");
            assert.equal(7, versions.length)
        });

        it('get French', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let versions = await versionDAL.withLanguage("french");
            assert.equal(0, versions.length)
        });

    });


    describe('#withAbbreviation', function () {

        it('get ASV', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.withAbbreviation("ASV");
            assert.equal("ASV", version!.getAbbreviation())
        });

        it('get TOTO', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.withAbbreviation("TOTO");
            assert.equal(undefined, version)
        });

    });


    describe('#getDefault', function () {

        it('get Default Version : ASV', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.getDefault();
            assert.equal("ASV", version!.getAbbreviation())
        });

    });
});


describe('Version Schema', function () {
    describe('#getTableName', function () {
        it('Build Version', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.getDefault();
            assert.equal("t_asv", VersionSchema.getTableName(version))
        });
    });
});


describe('Versions REST Services', function () {

    let application = require('../../../server');
    let path = "/bible/v1/version"

    describe('#/bible/v1/version/:id', function () {

        it('Get versions by id 1', async function () {
            let id = 1

            chai.request(application)
                .get(path + "/" + id)
                .then(res => {
                    assert.equal(200, res.status)
                    let version = Version.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(id, version.getId())
                });

        });
    });
    /*
        describe('#/bible/v1/version/', function () {
    
            it('Get all versions', async function () {
                let id = 1
    
                chai.request(application)
                    .get(path)
                    .then(res => {
                        assert.equal(200, res.status)
                        let versions = Vers.deserializeBinary(Message.bytesAsU8(res.text))
                        assert.equal(66, versions.getBooksList().length)
                        let book = versions.getBooksList()[0]
                        assert.equal(1, book.getId())
                    });
    
            });
        });
        */
});