import React, { Component } from "react";
import { connect } from "react-redux";
import { generateMoviePoster } from "../../utils/constants";
import { cutString } from "../../utils/constants";

export class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.getGenresList = this.getGenresList.bind(this);
    }

    // getGenresList(list) {
    //     const { genres } = this.props;

    //     console.log(genres.genresData.genres);

    //     if (genres.genresData) {
    //         const filteredList = genres.genresData.genres.filter(function(el) {
    //             return list.some(function(f) {
    //                 return f.id === el.id;
    //             });
    //         });
    //         return filteredList;
    //     }
    // }

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

        return (
            <div className="col-3 movies-item">
                <div className="text-center">
                    <img
                        src={generateMoviePoster(backdrop_path)}
                        alt="camera-thumb"
                        className="img-thumbnail movie-thumb"
                    />
                </div>
                <h5 className="movie-title">{title}</h5>
                <div className="movie-info">
                    <ul className="movie-info__genres">
                        <li>genre 1</li>
                        <li>genre 2</li>
                        <li>genre 3</li>
                    </ul>
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
