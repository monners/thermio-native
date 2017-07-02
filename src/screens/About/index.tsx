import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

import { viewStyles } from '../../common/styles';
import {
  IStore,
  IAboutView,
  INavigator,
  IAirConditionerSettings,
} from '../../common/types';

// Hook up to redux
import { connect } from 'react-redux';

interface Props {
  navigator: INavigator;
  about: IAboutView;
  settings: IAirConditionerSettings;
}

class About extends Component<Props> {
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

function mapStateToProps (state: IStore) {
  return {
    about: state.aboutView,
    settings: state.airConditioner,
  };
}

export default connect(mapStateToProps)(About);
