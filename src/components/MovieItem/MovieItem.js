import React, { Component } from "react";
import { imageServerURL } from "../../utils/constants";
import { generateMoviePoster } from "../../utils/constants";

export class MovieItem extends Component {
    render() {
        const { content } = this.props;

        return (
            <div className="col-3 movies-item">
                <div className="text-center">
                    <img
                        src="images/behind-the-scenes-camera-camera-crew-2429417.jpg"
                        alt="camera-thumb"
                        className="img-thumbnail movie-thumb"
                    />
                </div>
                <h5 className="movie-title">Movie title</h5>
                <div className="movie-info">
                    <ul className="movie-info__genres">
                        <li>genre 1</li>
                        <li>genre 2</li>
                        <li>genre 3</li>
                    </ul>
                    <p className="movie-info__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a className="btn btn-success" href="#">
                        Link
                    </a>
                </div>
            </div>
        );
    }
}

export default MovieItem;
