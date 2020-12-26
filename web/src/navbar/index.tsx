import React from 'react';
import {Link} from 'react-router-dom';
import './resources/style/navbar.css'
import home from './resources/image/logo-home.png'
import read from './resources/image/logo-read.png'
import search from './resources/image/logo-search.png'
import explore from './resources/image/logo-explore.png'
import people from './resources/image/logo-people.png'
import map from './resources/image/logo-map.png'


export class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li>
                        <Link to={'/'} className="nav-link">
                            <img className="nav-bar-item" alt="home" src={home}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/read'} className="nav-link">
                            <img className="nav-bar-item" alt="read" src={read}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/search'} className="nav-link">
                            <img className="nav-bar-item" alt="search" src={search}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/explore'} className="nav-link">
                            <img className="nav-bar-item" alt="explore" src={explore}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/people'} className="nav-link">
                            <img className="nav-bar-item" alt="people" src={people}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/map'} className="nav-link">
                            <img className="nav-bar-item" alt="map" src={map}/>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

