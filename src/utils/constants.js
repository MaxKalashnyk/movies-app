export const APIKey = "49a3e8d3e3d07290e14ee51a63085f42";
export const lang = "en-US";
export const popularMoviesURLString =
    "https://developers.themoviedb.org/3/movies/get-popular-movies";
export const searchMoviesURLString =
    "https://developers.themoviedb.org/3/search/search-movies";
export const genresMoviesURLString =
    "https://developers.themoviedb.org/3/genres";
export const detailsMoviesURLString =
    "https://developers.themoviedb.org/3/movies/get-movie-details";
export const recommendationsMoviesURLString =
    "https://developers.themoviedb.org/3/movies/get-movie-recommendations";

export const imageServerURL = "http://image.tmdb.org/t/p/w500";

export const generateMoviePoster = imagePath =>
    imagePath
        ? `${imageServerURL}${imagePath}`
        : "https://via.placeholder.com/255x150?text=Placeholder";

export const generateID = () => {
    return (
        "_" +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
};

export const cutString = string =>
    string.length > 80 ? `${string.substring(0, 76)}...` : string;
