import { Navigation } from 'react-native-navigation';
import registerScreens from './screens/registerScreens';

// Redux setup
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
const store = configureStore(initialState);

registerScreens(store, Provider); // this is where you register all of your app's screens

console.log(store.getState());

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'thermio.AirConditioner',
    title: 'Thermio',
  },
});
