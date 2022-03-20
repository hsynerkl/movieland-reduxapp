import { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Recep";
    const showsText = "Friends"
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showsText))
    }, [dispatch])
    return (
        <div className="banner-img">
            <MovieListing />
        </div>
    )
}

export default Home