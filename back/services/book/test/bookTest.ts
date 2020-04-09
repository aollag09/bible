import chai from 'chai';
import chaiHttp from 'chai-http';
import { Message } from "google-protobuf";
import { Database } from "../../database/database";
import { BookDAL } from "../bookDAL";
import { Book, Books } from "../book_pb";
chai.use(chaiHttp);
var assert = require('assert');

describe('Books Data Access Layer Tests', function () {

    describe('#listBooks', function () {
        it('List all existing books in the database', async function () {
            let bookDAL: BookDAL = new BookDAL(new Database());
            let list = await bookDAL.list();
            assert.equal(66, list.getBooksList().length)
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

    describe('#/bible/v1/book/:id', function () {

        it('Get book by id 1', async function () {
            let id = 1

            chai.request(application)
                .get(path + "/" + id)
                .then(res => {
                    assert.equal(200, res.status)
                    let book = Book.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(id, book.getId())
                    assert.equal("Genesis", book.getName())
                });

        });
    });

    describe('#/bible/v1/book/', function () {

        it('Get all books', async function () {
            let id = 1

            chai.request(application)
                .get(path)
                .then(res => {
                    assert.equal(res.status, 200)
                    let books = Books.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(66, books.getBooksList().length)
                    let book = books.getBooksList()[0]
                    assert.equal(1, book.getId())
                });

        });
    });
});

