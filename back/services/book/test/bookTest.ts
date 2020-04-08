import { BookDAL } from "../bookDAL";
import { Database } from "../../database/database";
import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
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
            assert.equal(12, book!.getId())
            assert.equal("2 Kings", book!.getName())
        });

        it('get book in the database with id test 2', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withId(2);
            assert.equal(2, book!.getId())
        });

        it('get book with non existing id', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withId(-5);
            assert.equal(undefined, book)
        });

    });

    describe('#withName', function () {

        it('get book in the database with name', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("2 Kings");
            assert.equal(12, book!.getId())
            assert.equal("2 Kings", book!.getName())
        });

        it('get book in the database with name lower case', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("2 kings");
            assert.equal(12, book!.getId())
        });

        it('get book in the database with abbreviation', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("2K");
            assert.equal(12, book!.getId())
        });

        it('get book in the database with abbreviation lower case', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("2k");
            assert.equal(12, book!.getId())
        });

        it('get book in the database with abbreviation and space', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("2 Kings");
            assert.equal(12, book!.getId())
        });

        it('get book in the database with abbreviation and space no number', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("Second Kings");
            assert.equal(12, book!.getId())
        });

        it('get book with non existing name', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("toto");
            assert.equal(undefined, book)
        });

        it('get book with non existing name 2', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let book = await bookDAL.withName("2");
            assert.equal(undefined, book)
        });

    });
});


describe('Books REST Services', function () {

    let application = require('../../../server');
    let path = "/bible/v1/book"


    describe('#GET', function () {
        it('Get book by id 1', async function () {
            let id = 1

            chai.request(application)
                .get(path + "/" + id)
                .then(res => {
                    res.should.have.status(200);
                });
        });
    });
});

