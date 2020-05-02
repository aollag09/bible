import { PeopleDAL } from "../peopleDal";
import { Database } from "../../database/database";
import { expect } from "chai"
import { LanguageDAL } from "../../language/languageDal";
import { Language } from "../../language/language_pb";

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