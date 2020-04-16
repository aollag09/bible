import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Explore } from '../explore';
import { Home } from '../home';
import { Map } from '../map';
import { People } from '../people';
import { Read } from '../read';
import { Search } from '../search';
import './resources/style/application.css';

export class App extends React.Component {

  render() {
    return (

      <Router>

        <div className="bible-site-container">

          <header className="header">
          </header>

          <div className="content">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/read' component={Read} />
              <Route path='/search' component={Search} />
              <Route path='/explore' component={Explore} />
              <Route path='/map' component={Map} />
              <Route path='/people' component={People} />
            </Switch>
          </div>

          <footer className="footer">
          </footer>

        </div>
      </Router>

    );
  }

}