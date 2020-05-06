import { PeopleDAL } from "../peopleDAL";
import { Database } from "../../database/database";
import { LanguageDAL } from "../../language/languageDAL";
import { TagDAL } from "../../tag/tagDAL";
import { ScriptureDAL } from "../../scriptures/scriptureDAL";
import { VersionDAL } from "../../version/versionDAL";
import { DateTime } from "../../../utils/dateTime";
import { WhoTag, Tag } from "../../tag/tag_pb";

export class Generator {
    static async generate() {
        const generate = true;
        if (generate) {

            let peoples = await new PeopleDAL(Database.get(), (await new LanguageDAL(Database.get()).withId(1))!).list()

            let tagDAL = new TagDAL(Database.get())

            for (let book = 1; book <= 66; book++) {
                console.log("")
                console.log(" =====> Book " + book)
                let scriptures = await new ScriptureDAL(Database.get(), await new VersionDAL(Database.get()).getDefault()).withBook(book)
                scriptures.getScripturesList().forEach(scripture => {
                    peoples.getPeoplesList().forEach(people => {
                        if (scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + " ")) ||
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + ".")) ||
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + ":")) || 
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + ",")) || 
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + ";")) || 
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + "?")) ||
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + "!")) ||
                        scripture.getScripture().toLowerCase().includes(("\'" + people.getName().toLowerCase() + "\'")) || 
                        scripture.getScripture().toLowerCase().includes(("\"" + people.getName().toLowerCase() + "\"")) || 
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + "\"")) || 
                        scripture.getScripture().toLowerCase().includes((" " + people.getName().toLowerCase() + "\'"))) {
                            console.log("MATCH : " + scripture.getScripture() + " WITH " + people.getName())
                            let tag = new Tag()

                            tag.setOwner(1)
                            tag.setCreated(DateTime.current())
                            tag.setModified(DateTime.current())

                            tag.setType("hit")
                            tag.setSubtype("generated")

                            tag.setStart(scripture.getId())
                            tag.setEnd(scripture.getId())
                            tag.setBook(scripture.getBook())
                            tag.setChapter(scripture.getChapter())

                            let who = new WhoTag()
                            who.setWho(people.getId())
                            tag.setWhotag(who)

                            tagDAL.putTag(tag);
                        }
                    })
                })
            }

            console.log("JOB DONE")
        }
    }
}


Generator.generate()