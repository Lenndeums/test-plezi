import React, {Component} from 'react'
import { connect } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom'

import Layout from './Layout'
import { fetchMovieById, cleanMovie } from '../actions'
import {
    base_url_img,
    api_key
} from '../constants/actionTypes'

class Movie extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.id
        this.props.fetchMovieById(movieId)
    }

    redirectToHome = () => {
        this.props.history.push(`/`)
        this.props.cleanMovie()
    }

    render() {
        const {movie} = this.props
        return(
            <Layout>
                <FaArrowLeft className='arrow-icon' onClick={this.redirectToHome}/>
                <div className='movie_title'>{movie.original_title}</div>
                <div className='movie_container'>
                    <div className='movie_img'>
                        <img src={`${base_url_img}${movie.poster_path}?api_key=${api_key}`} alt={movie.original_title} />
                    </div>
                    <div className='movie_infos'>
                        <div className='infos'>
                            <p>{movie.overview}</p>
                            <span>Genre:</span> <ul>{movie.genres !== undefined ? movie.genres.map((genre, index) => <li key={index}>{genre.name}</li>) : ''}</ul>
                            <p><span>Release Date:</span> {movie.release_date}</p>
                            <p><span>Budget:</span> {movie.budget}</p>
                            <p><span>Rating:</span> {movie.vote_average}</p>
                            <p><span>Official Website:</span> <Link to={`${movie.homepage}`}>{movie.homepage}</Link></p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie
})

const mapDispatchToProps = {
    fetchMovieById,
    cleanMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)