// TODO: This is just a test HOC to work out how navigation works and to ensure
// that redux is connecting to each view. Remove this later!
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, Button } from 'react-native';

import {
  IStore,
  IAboutView,
  INavigator,
  IAirConditionerSettings,
} from '../../common/types';
import { viewStyles } from '../../common/styles';

interface Props {
  navigator: INavigator;
  about: IAboutView;
  settings: IAirConditionerSettings;
}

const mapStateToProps = (state: IStore) => ({
  about: state.aboutView,
  settings: state.airConditioner,
});

// HACK: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951
@(connect(mapStateToProps) as any)
export default class About extends PureComponent<Props> {
  public render () {
    return (
      <ScrollView style={ viewStyles.container }>
        <Text>Power: { this.props.settings.power && 'On' }</Text>
        <Button onPress={ this.handleGoBack } title='Go Back' />
      </ScrollView>
    );
  }

  private handleGoBack = () => {
    this.props.navigator.pop();
  }
}
