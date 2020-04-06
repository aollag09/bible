var assert = require('assert');

import { Version } from "../back/version/version_pb";
import { VersionDAL } from "../back/version/versionDAL";

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
        it('List all existing versions in the database', function () {
            let versionDAL: VersionDAL = new VersionDAL();
            let list = versionDAL.list();
        });
        it('Try', function () {
            let versionDAL: VersionDAL = new VersionDAL();
            //versionDAL.try(0);
        });
    });
});
