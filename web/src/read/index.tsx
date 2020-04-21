import React from 'react';
import { Navbar } from '../navbar';
import { ReaderSelector } from './component/ReaderSelector';
import './resources/style/selector.css';

export class Read extends React.Component {

  render() {
    return (
      <div className="bible-content read">
        <Navbar />

        <ReaderSelector />
      </div>
    );
  }

}
