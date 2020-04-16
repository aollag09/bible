import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {

    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/read'} className="nav-link">Read</Link></li>
                        <li><Link to={'/search'} className="nav-link">Search</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

