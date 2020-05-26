export const getMoviesArray = state => {
    const array = Object.keys(state).map(function(key) {
        return state[key];
    })
    return array
}