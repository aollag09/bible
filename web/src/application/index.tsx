import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Explore} from '../explore';
import {Home} from '../home';
import {Map} from '../map';
import {People} from '../people';
import {Read} from '../read';
import {Search} from '../search';
import './resources/style/application.css';

export function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );


    return (

        <ThemeProvider theme={theme}>
            <Router>

                <div className="bible-site-container">

                    <header className="header">
                    </header>

                    <div className="content">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/read' component={Read}/>
                            <Route exact path='/search' component={Search}/>
                            <Route exact path='/explore' component={Explore}/>
                            <Route exact path='/people' component={People}/>
                            <Route exact path='/map' component={Map}/>
                        </Switch>
                    </div>

                    <footer className="footer">
                    </footer>

                </div>
            </Router>
        </ThemeProvider>

    );

}