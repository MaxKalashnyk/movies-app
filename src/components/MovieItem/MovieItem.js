import React, { Component } from "react";
import { connect } from "react-redux";
import { generateMoviePoster } from "../../utils/constants";
import { generateID } from "../../utils/constants";
import { cutString } from "../../utils/constants";
import "./MovieItem.scss";

export class MovieItem extends Component {
    getGenresList(list) {
        const { genres } = this.props;

        if (genres.genresData) {
            const filteredList = genres.genresData.genres.filter(function(el) {
                return list.some(function(f) {
                    return f === el.id;
                });
            });
            return filteredList;
        }
    }

    renderGenresList(genresList) {
        return genresList.map(item => (
            <span className="genre-item" key={generateID()}>
                {item.name}
            </span>
        ));
    }

    render() {
        const { content } = this.props;
        const {
            backdrop_path,
            genre_ids,
            id,
            title,
            vote_average,
            vote_count,
            release_date,
            overview,
            adult
        } = content;

        const getGenresMoviesList = this.getGenresList(genre_ids);

        return (
            <div className="col-lg-3 col-md-6 col-12 movies-item">
                <div className="text-center">
                    <img
                        src={generateMoviePoster(backdrop_path)}
                        alt="camera-thumb"
                        className="img-thumbnail movie-thumb"
                    />
                </div>
                <h5 className="movie-title">{title}</h5>
                <div className="movie-info">
                    <p className="movie-info__genres">
                        {this.renderGenresList(getGenresMoviesList)}
                    </p>
                    <p className="movie-info__description">
                        {cutString(overview)}
                    </p>
                    <div className="movie-info__vote">
                        <p>Average rating: {vote_average}</p>
                        <p>Votes count: {vote_count}</p>
                    </div>
                    <p className="movie-info__date">{release_date}</p>
                    <a className="btn btn-success" href="#">
                        Link
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        genres: store.genres
    };
};

export default connect(mapStateToProps)(MovieItem);
