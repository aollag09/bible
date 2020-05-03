import assert from "assert";
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Message } from "google-protobuf";
import { Database } from "../../database/database";
import { LanguageDAL } from "../../language/languageDAL";
import { Language } from "../../language/language_pb";
import { PeopleDAL } from "../peopleDAL";
import { People, Peoples } from "../people_pb";
chai.use(chaiHttp);


describe('People Data Access Layer Tests', async function () {

    const language: Language = await new LanguageDAL(Database.get()).english()

    describe('#listPeoples', function () {
        it('List all existing peoples in the database', async function () {
            let peopleDAL: PeopleDAL = new PeopleDAL(Database.get(), language);
            let list = await peopleDAL.list();
            expect(list.getPeoplesList().length).to.be.eq(760)
        });
    });

    describe('#listPrefixPeoples', function () {
        it('List all existing peoples in the database with prefix Th', async function () {
            let peopleDAL: PeopleDAL = new PeopleDAL(Database.get(), language);
            let list = await peopleDAL.listPrefix("Th")
            list.getPeoplesList().forEach(people => {
                expect(people.getName().toLocaleLowerCase().startsWith("th")).to.be.true
            })
        });

        it('List all existing peoples in the database with prefix I', async function () {
            let peopleDAL: PeopleDAL = new PeopleDAL(Database.get(), language);
            let list = await peopleDAL.listPrefix("I")
            list.getPeoplesList().forEach(people => {
                expect(people.getName().toUpperCase().startsWith("I")).to.be.true
            })
        });
    });


    describe('#withId', function () {
        it('With Id 1 ', async function () {
            let peopleDAL: PeopleDAL = new PeopleDAL(Database.get(), language);
        });
    });

});



describe('People REST Services', function () {

    let application = require('../../../server');
    let path = "/bible/v1/people"

    describe('#/bible/v1/people/:id/language/:lid', function () {

        it('Get lagnuage by id 1', async function () {
            let id = 1

            chai.request(application)
                .get(path + "/" + id + "/language/1")
                .then(res => {
                    assert.equal(200, res.status)
                    let people = People.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(id, people.getId())
                    assert.equal("Aaron", people.getName())
                });

        });
    });

    describe('#/bible/v1/people/', function () {

        it('Get all peoples', async function () {
            let id = 1

            chai.request(application)
                .get(path + "/language/1")
                .then(res => {
                    assert.equal(res.status, 200)
                    let peoples = Peoples.deserializeBinary(Message.bytesAsU8(res.text))
                    assert.equal(760, peoples.getPeoplesList().length)
                    let book = peoples.getPeoplesList()[0]
                    assert.equal(1, book.getId())
                });

        });
    });
});