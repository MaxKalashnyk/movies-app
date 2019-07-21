import React, { Component } from "react";
import "./MoviesList.scss";

export class MoviesList extends Component {
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

                    <div className="row movies-row">
                        <div className="col-sm movies-item">
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <a className="btn btn-success" href="#">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className="col-sm movies-item">
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <a className="btn btn-success" href="#">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className="col-sm movies-item">
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <a className="btn btn-success" href="#">
                                    Link
                                </a>
                            </div>
                        </div>{" "}
                        <div className="col-sm movies-item">
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <a className="btn btn-success" href="#">
                                    Link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MoviesList;
