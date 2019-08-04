import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoviesAction } from "../../actions/getMovieById";
import { generateMoviePoster } from "../../utils/constants";
import "./MovieFullDescription.scss";

export class MovieFullDescription extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        const { getMovieDetails } = this.props;
        getMovieDetails(id);
    }

    renderTemplate() {
        const { movieDetails } = this.props;

        if (movieDetails) {
            const {
                backdrop_path,
                genres,
                homepage,
                original_title,
                overview,
                poster_path,
                release_date,
                status,
                title,
                vote_average,
                vote_count
            } = movieDetails;

            return (
                <div className="container">
                    <NavLink to="/" className="navlink-back">
                        {`< Go back`}
                    </NavLink>
                    <h2 className="content-title">
                        {title}({original_title})
                    </h2>
                    <div className="row">
                        <div className="col-6">
                            <img
                                src={generateMoviePoster(poster_path)}
                                alt="movie-thumb"
                                className="img-thumbnail movie-thumb-full"
                            />
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Genres: </li>
                                <li>Releaase date: {release_date}</li>
                                <li>Status: {status}</li>
                                <li>Votes: {vote_count}</li>
                                <li>Vote average: {vote_average}</li>
                            </ul>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return "";
        }
    }

    render() {
        return (
            <div>
                <section className="page-content">
                    {this.renderTemplate()}
                </section>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        movieDetails: store.movieDetails.movieDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetails: id => dispatch(getMoviesAction(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieFullDescription);
