import axios from "axios";
import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_BY_ID_START,
    FETCH_MOVIES_BY_ID_SUCCESS,
    FETCH_MOVIES_BY_ID_FAILURE,
    CLEAN_MOVIE,
    base_url,
    api_key
} from '../constants/actionTypes'

export const fetchMovies = () => async dispatch => {
  dispatch({type: FETCH_MOVIES_START})

  try {
      const response = await axios(`${base_url}movie/popular?api_key=${api_key}`)
      dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: response.data.results
      })
  } catch (error) {
      dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: error,
          error: true
      })
  }
}

export const fetchMovieById = (id) => async dispatch => {
  dispatch({type: FETCH_MOVIES_BY_ID_START})

  try {
      const response = await axios(`${base_url}movie/${id}?api_key=${api_key}`)
      dispatch({
          type: FETCH_MOVIES_BY_ID_SUCCESS, 
          payload: response.data
      }) 
  } catch (error) {
      dispatch({
          type: FETCH_MOVIES_BY_ID_FAILURE,
          payload: error,
          error: true
      })
  }
}

export const cleanMovie = () => dispatch => {
  dispatch({ type: CLEAN_MOVIE })
}

