import React from 'react';
import {PeriodicTable} from './component/PeriodicTable'
import './resources/style/read.css'

export class Read extends React.Component {

  render() {
    return (
      <div className="Read">
        <PeriodicTable />
      </div>
    );
  }

}
