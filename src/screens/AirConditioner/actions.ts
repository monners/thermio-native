import * as types from '../../store/actionTypes';

// Simple action
export function togglePower(value: boolean) {
  return {
    type: types.TOGGLE_POWER,
    value,
  };
}

// THUNK action
// export function retrieveMoviesGenres() {
// 	return function (dispatch) {
// 		return axios.get(`${api.URL}/genre/movie/list?api_key=${api.KEY}`)
// 		.then(res => {
// 			dispatch(retrieveMoviesGenresSuccess(res));
// 		})
// 		.catch(error => {
// 			console.log(error); //eslint-disable-line
// 		});
// 	};
// }
