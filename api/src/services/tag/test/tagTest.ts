


import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { Message } from 'google-protobuf';
import { RouteUtils } from '../../../utils/RouteUtils';
import { Database } from "../../database/database";
import { TagDAL } from '../TagDal';
import { Tag, WhatTag } from '../tag_pb';
import { DateTime } from '../../../utils/dateTime';

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


    describe('#addTag', async function () {

        it('add  & delte What Tag', async function () {

            let tag = new Tag()
            let testType = "test"

            tag.setOwner(1)
            tag.setCreated(DateTime.current())
            tag.setModified(DateTime.current())
            tag.setStart('5')
            tag.setEnd('15')
            tag.setBook(-4)
            tag.setChapter(2)
            tag.setType(testType)
            let what = new WhatTag()
            what.setWhat("Say what !?")
            what.setDetails("Details")
            tag.setWhattag(what)

            // FIXME, no await available on this method
            //await tagDAL.putTag(tag)

            let tags = await tagDAL.withType(testType, Tag.TagCase.WHATTAG)
            //expect(tags.getTagsList().length).equals(1)   

            tags.getTagsList().forEach(tag => {
                console.log("TAG ID " + tag.getId())
                tagDAL.deleteTag(tag.getId(), Tag.TagCase.WHATTAG)
            })

            tags = await tagDAL.withType(testType, Tag.TagCase.WHATTAG)
            //            expect(tags.getTagsList().length).equals(0)

        });



    });
});


