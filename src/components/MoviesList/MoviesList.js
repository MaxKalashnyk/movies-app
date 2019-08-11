import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/configureStore";
import { MovieItem } from "../MovieItem";
import { generateID } from "../../utils/constants";
import { Pagination } from "../Pagination";
import { getMoviesAction } from "../../actions/getMovies";
import { getGenresAction } from "../../actions/getGenres";
import { getMoviesSearchAction } from "../../actions/searchMovies";
import { setSearchPhrase } from "../../actions/setSearchPhrase";
import { debounce } from "debounce";
import "./MoviesList.scss";

export class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onPageChanged = this.onPageChanged.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    renderMoviesList(data) {
        if (data) {
            return data.results.map(item => (
                <MovieItem content={item} key={generateID()}></MovieItem>
            ));
        } else {
            return <div>There are no movies...</div>;
        }
    }

    onPageChanged() {
        const { getMovies, page, searchPhrase, searchMovies } = this.props;

        if (searchPhrase) {
            searchMovies(page, searchPhrase);
        } else {
            getMovies(page);
        }
    }

    renderTemplate() {
        const { movies, isFetching } = this.props;

        if (isFetching) {
            return <p className="loading">Loading...</p>;
        } else {
            return (
                <div className="row movies-row">
                    {this.renderMoviesList(movies)}
                    <Pagination
                        totalRecords={20}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged}
                        totalPages={movies ? movies.total_pages : 0}
                    />
                </div>
            );
        }
    }

    performSearch() {
        const inputValue = this.inputRef.current.value;
        const { searchMovies, getMovies } = this.props;
        if (inputValue.length > 0) {
            searchMovies(1, inputValue);
        } else {
            getMovies(1);
        }
        store.dispatch(setSearchPhrase(inputValue));
    }

    render() {
        return (
            <section className="movies-wrap">
                <div className="container">
                    <div className="movies-wrap-header">
                        <h3 className="movies-wrap-title">Popular movies</h3>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                ref={this.inputRef}
                                onInput={debounce(this.performSearch, 500)}
                            />
                        </form>
                    </div>
                    {this.renderTemplate()}
                </div>
            </section>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page.page,
        searchPhrase: store.searchPhrase.searchPhrase
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenresAction()),
        getMovies: page => dispatch(getMoviesAction(page)),
        searchMovies: (page, searchPhrase) =>
            dispatch(getMoviesSearchAction(page, searchPhrase))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);
