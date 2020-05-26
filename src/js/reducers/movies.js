import { 
    FETCH_MOVIES_SUCCESS
} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case  FETCH_MOVIES_SUCCESS:
            return Object.assign({}, state, payload)
        default:
            return state
    }
}
