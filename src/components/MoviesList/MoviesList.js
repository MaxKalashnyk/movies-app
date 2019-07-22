import React, { Component } from "react";
import { MovieItem } from "../MovieItem";
import { generateID } from "../../utils/constants";
import "./MoviesList.scss";

export class MoviesList extends Component {
    renderMoviesList(data) {
        console.log(data);
        if (data) {
            return data.results.map(item => {
                return (
                    <MovieItem content={item} key={generateID()}></MovieItem>
                );
            });
        } else {
            return <div>There are no movies...</div>;
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
                </div>
            );
        }
    }

    render() {
        return (
            <section className="movies-wrap">
                <div className="container">
                    <div className="movies-wrap-header">
                        <h3 className="movies-wrap-title">Movies</h3>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    {this.renderTemplate()}
                </div>
            </section>
        );
    }
}

export default MoviesList;
