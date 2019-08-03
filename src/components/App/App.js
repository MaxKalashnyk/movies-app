import React, { Component } from "react";
import { connect } from "react-redux";
import { MoviesList } from "../MoviesList";
import { Header } from "../Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../../utils/routes";
import { About } from "../About";
import { MovieFullDescription } from "../MovieFullDescription";
import { NotFound } from "../NotFound";
import { getMoviesAction } from "../../actions/getMovies";
import { getGenresAction } from "../../actions/getGenres";
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
    getGenresListAsync() {
        const { getGenres } = this.props;

        return new Promise(resolve => {
            getGenres();
            resolve(true);
        }).catch(error => console.error(error));
    }

    componentDidMount() {
        const { getMovies } = this.props;

        this.getGenresListAsync().then(getMovies());
    }

    render() {
        const { movies, page } = this.props;

        return (
            <Router>
                <React.Fragment>
                    <Header
                        routes={routes.filter(route => route.isNavBar)}
                    ></Header>
                    <main className="main">
                        <Switch>
                            <Route
                                key="/"
                                path="/"
                                render={() => (
                                    <MoviesList
                                        isFetching={movies.isFetching}
                                        movies={movies.moviesData}
                                        page={page}
                                    />
                                )}
                                exact
                            />
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

const mapStateToProps = store => {
    return {
        page: store.page,
        movies: store.movies,
        genres: store.genres
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenresAction()),
        getMovies: page => dispatch(getMoviesAction(page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
