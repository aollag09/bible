import { Index } from "../index";

var assert = require('assert');



describe('Index', function () {

    describe('#getClient()', function () {
        it('Check index js client connection', function () {
            let index = new Index()
            let client = index.getClient()
            console.log(JSON.stringify(client))
        });
    });

});