import { BookDAL } from "../bookDAL";
import { Database } from "../../database/database";

var assert = require('assert');


describe('Books Data Access Layer Tests', function () {

    describe('#listBooks', function () {
        it('List all existing books in the database', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let list = await bookDAL.list();
            assert.equal(66, list.length)
        });
    });

    describe('#withId', function () {
        it('get book in the database with id', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withId(12);
            assert.equal(12, book?.getId())
            assert.equal("2 Kings", book?.getName())
        });
    });
});


