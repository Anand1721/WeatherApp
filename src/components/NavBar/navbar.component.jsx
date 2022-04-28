import { Component } from "react";
import './navbar.component.styles.css';

class NavBar extends Component {
    render () {
        return (
            <nav className="nav">
                <h1 className="brand">Weather App</h1>
            </nav>
        )
    }
}

export default NavBar;