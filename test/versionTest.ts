import { Version } from "../back/version/version_pb";

describe('Version Protobuf object', function () {
    describe('#buildVersion', function () {
        it('Build Version', function () {
            var version: Version = new Version()
            console.log(version)
        });
    });
});

describe('Versions Data Access Layer Tests', function () {
    describe('#listVersions', function () {
        it('should return -1 when the value is not present', function () {
        });
    });
});
