import React, { Component } from "react";
import '../resources/style/home.css'
import { Link } from "react-router-dom";


type SplashProps = {
    link: string,
    title: string,
    subtitle: string,
    image: string
}

export class Splash extends Component<SplashProps>{

    render() {
        return (
            <span className="splash">
                <Link to={this.props.link} >
                    <img className="splash-image" alt={this.props.title} src={this.props.image} />
                    <h3 className="splash-title"> {this.props.title}</h3>
                    <p className="splash-subtitle">{this.props.subtitle}</p>
                </Link>
            </span>
        );
    }
}
