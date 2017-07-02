import React, { Component } from 'react';
import { ScrollView, Switch, TouchableHighlight } from 'react-native';

import { viewStyles } from '../../common/styles';
import { IStore, IAirConditionerSettings } from '../../common/types';

// Hook up to redux
import * as actions from './actions';
import { connect } from 'react-redux';

// Custom components and styles
import Cell from '../../components/TableView/Cell';

interface INavigator {
  push: (params: any) => void;
  pop: (params: any) => void;
}

interface Props {
  navigator: INavigator;
  settings: IAirConditionerSettings;
  onPowerToggle: (value: boolean) => void;
}

class AirConditioner extends Component<Props> {
  public render () {
    const { settings } = this.props;
    return (
      <ScrollView style={ viewStyles.container }>
        <Cell label='Power'>
          <Switch value={ settings.power } onValueChange={ this.props.onPowerToggle } />
        </Cell>
        <TouchableHighlight
          onPress={ this.handleAbout }>
          <Cell label='About Page'>
          </Cell>
        </TouchableHighlight>
      </ScrollView>
    );
  }

  private handleAbout = () => {
    this.props.navigator.push({
      screen: 'thermio.About',
      title: 'About',
    });
  }
}

// Connect to redux and return the relevant state to props
function mapStateToProps(state: IStore) {
  return {
    settings: state.airConditioner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPowerToggle: (value: boolean) => {
      dispatch(actions.togglePower(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AirConditioner);
