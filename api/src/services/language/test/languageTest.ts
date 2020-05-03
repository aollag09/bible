import assert from "assert";
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Message } from "google-protobuf";
import { Database } from "../../database/database";
import { LanguageDAL } from "../languageDAL";
import { Language, Languages } from "../language_pb";
chai.use(chaiHttp);

describe('Language Data Access Layer Tests', function () {

    describe('#listLanguages', function () {
        it('List all existing languages in the database', async function () {
            const languageDAL: LanguageDAL = new LanguageDAL(Database.get());
            const list = await languageDAL.list();
            expect(list.getLanguagesList().length).to.be.eq(14)
        });
    });

    describe('#DirectLanguage', function () {
        it('English', async function () {
            const languageDAL: LanguageDAL = new LanguageDAL(Database.get());
            const english = languageDAL.english()
            expect((await english).getName()).to.be.eq("english")
        });

        it('French', async function () {
            const languageDAL: LanguageDAL = new LanguageDAL(Database.get());
            const french = languageDAL.french()
            expect((await french).getName()).to.be.eq("french")
        });
    });


});


describe('Language REST Services', function () {

    let application = require('../../../server');
    let path = "/bible/v1/language"

    describe('#/bible/v1/language/:id', function () {

        it('Get lagnuage by id 1', async function () {
            let id = 1

            chai.request(application)
                .get(path + "/" + id)
                .then(res => {
                    assert.equal(200, res.status)
                    let language = Language.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(id, language.getId())
                    assert.equal("english", language.getName())
                });

        });
    });

    describe('#/bible/v1/language/', function () {

        it('Get all languages', async function () {
            let id = 1

            chai.request(application)
                .get(path)
                .then(res => {
                    assert.equal(res.status, 200)
                    let languages = Languages.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(14, languages.getLanguagesList().length)
                    let book = languages.getLanguagesList()[0]
                    assert.equal(1, book.getId())
                });

        });
    });
});
