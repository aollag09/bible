import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Explore } from '../explore';
import { Home } from '../home';
import { Map } from '../map';
import { People } from '../people';
import { Read } from '../read';
import { Search } from '../search';
import logo from './resources/image/logo.svg';
import './resources/style/App.css';

export class App extends React.Component {

  render() {
    return (



      <Router>
        <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p> Edit <code>src/App.tsx</code> and save to reload.</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React </a>
          </header>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/read' component={Read} />
            <Route path='/search' component={Search} />
            <Route path='/explore' component={Explore} />
            <Route path='/map' component={Map} />
            <Route path='/people' component={People} />

          </Switch>

        </div>
      </Router>

    );
  }

}