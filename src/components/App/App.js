import React, { Component } from "react";
import { connect } from "react-redux";
import { MoviesList } from "../MoviesList";
import { Header } from "../Header";
import { getMoviesAction } from "../../actions/getMovies";
import "./App.scss";

export class App extends Component {
    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    render() {
        const { movies, page } = this.props;
        console.log("movies", movies);
        return (
            <div className="App">
                <Header></Header>
                <main className="main">
                    <MoviesList
                        // error={movies.error}
                        isFetching={movies.isFetching}
                        movies={movies.moviesData}
                        page={page}
                    ></MoviesList>
                </main>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
        movies: store.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovies: page => dispatch(getMoviesAction(page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
