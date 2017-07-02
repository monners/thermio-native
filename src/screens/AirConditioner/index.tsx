import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Switch, TouchableHighlight } from 'react-native';

import { IStore, INavigator, IAirConditionerSettings } from '../../common/types';
import { viewStyles } from '../../common/styles';

import * as actions from './actions';

import Cell from '../../components/TableView/Cell';

// Connect to redux and return the relevant state to props
const mapStateToProps = (state: IStore) => ({
  settings: state.airConditioner,
});

const mapDispatchToProps = (dispatch) => ({
  onPowerToggle: (value: boolean) => {
    dispatch(actions.togglePower(value));
  },
});

interface Props {
  navigator: INavigator;
  settings: IAirConditionerSettings;
  onPowerToggle: (value: boolean) => void;
}

// WORKAROUND: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951
@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class AirConditioner extends PureComponent<Props> {
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
