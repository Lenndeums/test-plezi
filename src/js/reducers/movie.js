import {
    FETCH_MOVIES_BY_ID_SUCCESS,
    CLEAN_MOVIE
} from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_MOVIES_BY_ID_SUCCESS:
            return Object.assign({}, state, payload)
        case CLEAN_MOVIE:
            return state = initialState
        default:
            return state
    }
}