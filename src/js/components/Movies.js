import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchMovies} from '../actions'
import {getMoviesArray} from '../selectors'
import Layout from './Layout'
import {
    base_url_img,
    api_key
} from '../constants/actionTypes'

class Movies extends Component {

    componentDidMount () {
        this.props.fetchMovies()
    }

    renderMovie(movie, index) {
        return (
            <div className='col-lg-3 col-md-3 book-list' key={index}>
                <div className='thumbnail'>
                    <img src={`${base_url_img}${movie.poster_path}?api_key=${api_key}`} alt={movie.original_title} />
                    <div className='centered'>
                        <h3>
                            <Link to={`movies/${movie.id}`}>
                                {movie.original_title}
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }

    render () {
        const {movies} = this.props
        return (
            <Layout>
                <div className='books row'>
                    {movies.map((movie, index) => this.renderMovie(movie, index))}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    movies: getMoviesArray(state.movies)
})

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
