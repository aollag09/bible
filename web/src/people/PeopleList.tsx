import {List, ListItem, ListItemText} from "@material-ui/core";
import Axios from "axios";
import {Message} from "google-protobuf";
import React, {useEffect, useState} from "react";
import {Peoples} from "../common/generated/services/people/people_pb";
import {BibleAPI} from "../common/utils/bibleAPI";

type PeopleListProp = {
    handlePeopleSelect: (peopleid: number) => void,
}

/**
 * Simple list selector for mobile
 * @param props
 */
export const PeopleList: React.FunctionComponent<PeopleListProp> = (props) => {

    const [peoples, setPeoples] = useState<Peoples>();

    useEffect(() => {
        if (!peoples) {
            fetchPeoples()
        }
    }, [peoples]);


    const fetchPeoples = async () => {
        const res = await Axios.get<string>(BibleAPI.url + "people/language/1")
        setPeoples(Peoples.deserializeBinary(Message.bytesAsU8(res.data)))
    }

    const peopleList: JSX.Element[] = []

    if (peoples) {
        peoples.getPeoplesList().forEach(people => {
            peopleList.push(
                <ListItem button
                          key={"list-item-people" + people.getId()}
                          onClick={() => props.handlePeopleSelect(people.getId())}
                          style={{maxWidth: 600}}>
                    <ListItemText key={"list-item-text-people-" + people.getId()}
                                  primary={people.getId() + " - " + people.getName() + " - " + people.getDescription()}/>
                </ListItem>
            )
        })
    }

    return (

        <div className="people-list-selector">
            <List>
                {peopleList}
            </List>

        </div>);
}