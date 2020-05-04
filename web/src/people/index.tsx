import React from 'react';
import { Navbar } from '../navbar';
import { PeopleList } from './PeopleList';

export class People extends React.Component {

  render() {
    return (
      <div className="bible-content people">
        <Navbar />
        <h1> Characters in the Bible </h1>
        <PeopleList handlePeopleSelect={(id) => console.log(id)} />
      </div>
    );
  }

}
