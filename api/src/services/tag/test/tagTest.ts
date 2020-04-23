


import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { Message } from 'google-protobuf';
import { RouteUtils } from '../../../utils/RouteUtils';
import { Database } from "../../database/database";
import { TagDAL } from '../TagDal';
import { Tag } from '../tag_pb';

chai.use(chaiHttp);


describe('Tag Data Access Layer Tests', async function () {

    let database = Database.get()
    let tagDAL = new TagDAL(database)

    describe('#withId', async function () {

        it('get -1 non existing', async function () {
            let id = -1
            let tag = await tagDAL.withId(id, Tag.TagCase.WHATTAG)!
            expect(tag).to.be.undefined;
        });

    });

    describe('#withBookChapter', async function () {

        it('with Book -1 Chapter -1 non existing', async function () {
            let book = -1
            let chapter = -1
            let tags = await tagDAL.withBookChapter(book, chapter, Tag.TagCase.WHATTAG)!
            expect(tags.getTagsList().length).to.be.eq(0);
        });

    });


    describe('#within', async function () {

        it('with start 0 and to 1 not existing', async function () {
            let tags = await tagDAL.within("0", "1", Tag.TagCase.WHATTAG)!
            expect(tags.getTagsList().length).to.be.eq(0);
        });

    });


    describe('#withBookChapterStartEnd', async function () {

        it('with Book -1 Chapter -1 non existing', async function () {
            let book = -1
            let chapter = -1
            let tags = await tagDAL.withBookChapterStartEnd(book, chapter, "0", "1", Tag.TagCase.WHATTAG)!
            expect(tags.getTagsList().length).to.be.eq(0);
        });

    });


    describe('#withBookChapterStartEndAll', async function () {

        it('with Book -1 Chapter -1 non existing', async function () {
            let book = -1
            let chapter = -1
            let tags = await tagDAL.withBookChapterStartEndAll(book, chapter, "0", "1")!
            expect(tags.getTagsList().length).to.be.eq(0);
        });

    });
});


