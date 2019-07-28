import React, { Component } from "react";
import { connect } from "react-redux";
import { MoviesList } from "../components/MoviesList";
import { getMoviesAction } from "../actions/getMovies";
import { withRouter } from "react-router-dom";
// import { getGenresAction } from "../actions/getGenres";

export class MoviesListContainer extends Component {
    // async getGenresListAsync() {
    //     const { getGenres } = this.props;

    //     return new Promise(resolve => {
    //         getGenres();
    //         resolve(true);
    //     }).catch(error => console.error(error));
    // }

    async componentDidMount() {
        const { getMovies } = this.props;

        await getMovies();

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

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MoviesListContainer)
);
