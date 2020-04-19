import React from 'react';
import { Navbar } from '../navbar';
import { PeriodicTable } from './component/PeriodicTable';
import './resources/style/read.css';

export class Read extends React.Component {

  render() {
    return (
      <div className="Read">
        <Navbar />
        <PeriodicTable />
      </div>
    );
  }

}
