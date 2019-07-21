import React, { Component } from "react";
import { MoviesList } from "../MoviesList";
import { Header } from "../Header";
import "./App.scss";

export class App extends Component {
    // componentDidMount() {
    //     getPopularMovies();
    // }

    render() {
        return (
            <div className="App">
                <Header></Header>
                <main className="main">
                    <MoviesList></MoviesList>
                </main>
            </div>
        );
    }
}

export default App;
