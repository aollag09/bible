import React from 'react';
import { Navbar } from '../navbar';
import { Selector } from './component/Selector';
import './resources/style/read.css';

export class Read extends React.Component {

  render() {
    return (
      <div className="read">
        <Navbar />

        <Selector />

      </div>
    );
  }

}
