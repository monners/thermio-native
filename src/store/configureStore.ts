import { IStore } from '../common/types';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// enable logger and thunk
const logger = createLogger({ collapsed: true });
const middleware = [thunk, logger];

// create reducers from screens
import airConditioner from '../screens/AirConditioner/reducers';
import aboutView from '../screens/About/reducers';
const rootReducer = combineReducers({
  airConditioner,
  aboutView,
});

export default function configureStore(initialState: IStore) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
