var assert = require('assert');

import { Version } from "../back/version/version_pb";
import { VersionDAL } from "../back/version/versionDAL";
import { Database } from "../back/database/database";

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
