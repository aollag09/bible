import React from 'react';
import { Navbar } from '../navbar';
import { BibleSearchBar } from './component/BibleSearchBar';
import './resources/style/search.css'

export class Search extends React.Component {

  render() {
    return (
      <div className="bible-content search">
        <Navbar />
        <BibleSearchBar/>
      </div>
    );
  }

}

