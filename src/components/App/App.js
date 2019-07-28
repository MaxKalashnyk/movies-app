import React, { Component } from "react";
import { MoviesListContainer } from "../../containers/MoviesListContainer";
import { Header } from "../Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../../utils/routes";
import { About } from "../About";
import { MovieFullDescription } from "../MovieFullDescription";
import { NotFound } from "../NotFound";
import "./App.scss";

export class App extends Component {
    renderSwitchContent() {
        return (
            <Switch>
                {routes.map(route => {
                    const component = route.component;
                    return (
                        <Route
                            key={route.path}
                            exact={route.isExact}
                            path={route.path}
                            component={component}
                        />
                    );
                })}
            </Switch>
        );
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header
                        routes={routes.filter(route => route.isNavBar)}
                    ></Header>
                    <main className="main">
                        <Switch>
                            <Route
                                key="/list"
                                path="/list"
                                component={MoviesListContainer}
                            />
                            <Route
                                key="/about"
                                path="/about"
                                component={About}
                            />
                            <Route
                                key="/movie/:id"
                                path="/movie/:id"
                                component={MovieFullDescription}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
