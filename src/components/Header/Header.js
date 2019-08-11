import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { generateID } from "../../utils/constants";
import "./Header.scss";

export class Header extends Component {
    renderNavigationMenuList() {
        const { routes } = this.props;

        return routes.map(route => (
            <li className="nav-item" key={generateID()}>
                <NavLink
                    exact={route.isExact}
                    activeClassName="active"
                    className="nav-link"
                    to={route.path}
                >
                    {route.name}
                </NavLink>
            </li>
        ));
    }

    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="/" className="navbar-brand">
                        Movies app
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            {this.renderNavigationMenuList()}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;

Header.propTypes = {
    routes: PropTypes.array
};
