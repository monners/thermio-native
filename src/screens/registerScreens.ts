import { Navigation } from 'react-native-navigation';

import AirConditioner from './AirConditioner';
import About from './About';

export default function registerScreens(store: any, provider: any) {
  Navigation.registerComponent('thermio.AirConditioner', () => AirConditioner, store, provider);
  Navigation.registerComponent('thermio.About', () => About, store, provider);
}
