import React from 'react';
import { Navbar } from '../navbar';
import { PeriodicTable } from './component/PeriodicTable';
import './resources/style/read.css';
import { VersionTable } from './component/VersionTable';

export class Read extends React.Component {

  render() {
    return (
      <div className="Read">
        <Navbar />
        <h2>Versions</h2>
        <VersionTable />
        <h2>Books</h2>
        <PeriodicTable />
      </div>
    );
  }

}
