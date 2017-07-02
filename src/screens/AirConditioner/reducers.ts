import * as types from '../../store/actionTypes';
import initialState from '../../store/initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_POWER:
      return {
        ...state,
        power: action.value,
      };
      default:
        return state;
  }
}
