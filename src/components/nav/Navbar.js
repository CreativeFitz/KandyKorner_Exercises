import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
    render () {
        return (
            <nav ClassName="navbarContainer">
            <ul className="navbarList">
            <li className="nav-item">
                <Link className="nav-link" to="/">Stores</Link>
            </li>
            <li ClassName="nav-item">
                <Link className="nav-link" to="/employees">Employees</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/candyTypes">Candy Types</Link>
            </li>
            <li ClassName="nav-item">
                <Link className="nav-link" to="/candiesList">Candies</Link>
            </li>
            </ul>
            </nav>
        )
    }
}

export default NavBar;