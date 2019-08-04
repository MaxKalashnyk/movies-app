import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMoviesAction } from "../../actions/getMovieById";
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
        } else {
            return "";
        }
    }

    render() {
        return (
            <div>
                <NavLink to="/" className="navlink-back">
                    {`< Go back`}
                </NavLink>

                <section className=""></section>

                <div className="row"></div>
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
