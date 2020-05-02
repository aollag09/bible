import { LanguageDAL } from "../languageDal";
import { expect } from "chai"
import { Database } from "../../database/database";



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