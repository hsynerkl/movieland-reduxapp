import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice'
import MovieCard from '../MovieCard/MovieCard'
import Slider from "react-slick";
import './MovieListing.scss'

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let renderMovies = "";
    let renderShows = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) =>
        (
            <MovieCard key={index} data={movie} />
        ))
    ) : (<div className="movies-error"> <h3>{movies.Error}</h3></div>)


    renderShows = shows.Response === "True" ? (
        shows.Search.map((movie, index) =>
        (
            <MovieCard key={index} data={movie} />
        ))
    ) : (<div className="movies-error"> <h3>{movies.Error}</h3></div>)


    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container"><Slider {...settings}>{renderMovies}</Slider></div>
            </div>
            <div className="movie-list">
                <h2>Shows</h2>
                <div className="movie-container"><Slider {...settings}>{renderShows}</Slider></div>
            </div>
        </div>
    )
}

export default MovieListing