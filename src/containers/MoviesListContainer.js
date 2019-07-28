import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store/configureStore";
import { MoviesList } from "../components/MoviesList";
import { getMoviesAction } from "../actions/getMovies";
// import { getGenresAction } from "../actions/getGenres";

export class MoviesListContainer extends Component {
    // async getGenresListAsync() {
    //     const { getGenres } = this.props;

    //     return new Promise(resolve => {
    //         getGenres();
    //         resolve(true);
    //     }).catch(error => console.error(error));
    // }

    getMoviesData() {
        store.dispatch(getMoviesAction());
    }

    async componentDidMount() {
        await this.getMoviesData();

        console.log("props", this.props);

        // const { getMovies } = this.props;

        // await getMovies();

        // this.getGenresListAsync().then(getMovies());
    }

    render() {
        const { movies, page } = this.props;

        console.log("props", this.props);

        return movies && page ? (
            <MoviesList
                isFetching={movies.isFetching}
                movies={movies.moviesData}
                page={page}
            ></MoviesList>
        ) : (
            ""
        );
    }
}

const mapStateToProps = store => {
    console.log("store", store);
    return {
        page: store.page,
        movies: store.movies
        // genres: store.genres
    };
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return {
        // getGenres: () => dispatch(getGenresAction()),
        getMovies: page => dispatch(getMoviesAction(page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesListContainer);
