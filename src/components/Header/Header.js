import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'

const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
    }
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    Movieland
                </Link>
            </div>
            <form onSubmit={submitHandler}>
                <label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search" />

                </label>
                <button type="submit" className="button-27 "><i className="fa fa-search"> </i></button>
            </form>


        </div>
    )
}

export default Header