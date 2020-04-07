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

    describe('#getById', function () {

        it('get 1', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.get(1);
            assert.equal("ASV",version?.getAbbreviation())
        });

        it('get 2', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.get(2);
            assert.equal("BBE",version?.getAbbreviation())
        });

        it('get 0 non existing', async function () {
            let versionDAL: VersionDAL = new VersionDAL(new Database());
            let version = await versionDAL.get(0);
            assert.equal(undefined,version)
        });

    });
});
