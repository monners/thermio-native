export interface IAirConditionerSettings {
  power: boolean;
  mode: number;
  fan: number;
  temp: number;
  vDir: number;
  hDir: number;
}

export interface IAboutView {
}

export interface IStore {
  airConditioner: IAirConditionerSettings;
  aboutView: IAboutView;
}

export interface INavigator {
  push: (params: INavigatorPushParams) => void;
  pop: (params?: INavigatorPopParams) => void;
}

interface INavigatorPopParams {
  animated?: boolean;
  animationType?: 'fade' | 'slide-horizontal';
}

interface INavigatorPushParams {
  screen: string;
  title?: string;
  titleImage?: any; // require('image/png')
  passProps?: any;
  animated?: boolean;
  animationType?: 'fade' | 'slide-horizontal';
  backButtonTitle?: string;
  backButtonHidden?: false;
  navigatorStyle?: any;
  navigatorButtons?: any;
}
