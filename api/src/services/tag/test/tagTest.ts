
import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { DateTime } from '../../../utils/dateTime';
import { ProtoUtils } from '../../../utils/ProtoUtils';
import { RouteUtils } from '../../../utils/RouteUtils';
import { Database } from "../../database/database";
import { TagDAL } from '../TagDAL';
import { Tag, WhatTag } from '../tag_pb';

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

        it('with Book -1000 Chapter -1000 non existing', async function () {
            let book = -1000
            let chapter = -1000
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
                tagDAL.deleteTag(tag.getId(), Tag.TagCase.WHATTAG)
            })

            tags = await tagDAL.withType(testType, Tag.TagCase.WHATTAG)
            //expect(tags.getTagsList().length).equals(0)

        });



    });
});


describe('Tag REST Services', function () {

    let application = require('../../../server');
    let path = RouteUtils.BASE_PATH + "tag/"



    describe('#' + path + "what", function () {

        it('GET tags in book 1 & chapter 1', async function () {
            let book = -2
            let chapter = 4

            chai.request(application)
                .get(path + "what/book/" + book + "/chapter/" + chapter)
                .then(res => {
                    expect(res.status).equals(200)
                });
        });

        it('POST new what tag', async function () {

            let tag = new Tag()
            let testType = "test"

            tag.setOwner(1)
            tag.setCreated(DateTime.current())
            tag.setModified(DateTime.current())
            tag.setStart('5')
            tag.setEnd('15')
            tag.setBook(-1)
            tag.setChapter(-1)
            tag.setType(testType)
            let what = new WhatTag()
            what.setWhat("Say what !?")
            what.setDetails("Details")
            tag.setWhattag(what)

            let serial = ProtoUtils.serialize(tag)

            chai.request(application)
                .post(path + "what")
                .type("json")
                .send({ tagbuff: serial })
                .then(res => {
                    expect(res.status).equals(200)
                });
        });
    });

});



