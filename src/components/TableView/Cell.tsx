import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  icon?: any;
  accessory?: any;
  onPress?: any;
}

export default class Cell extends PureComponent<Props> {

  private _ref: any;

  render () {
    return (
      <View style={ styles.cellRow } ref={ this.setRef } { ...this.props }>
        { this.props.icon !== undefined && (
          <Text>Icon</Text>
        ) }

        <View style={ styles.cellRowInner }>
          <Text style={ styles.cellLabel }>
            { this.props.label }
          </Text>

          { this.props.children && this.props.children }
        </View>
      </View>
    );
  }

  private setRef = (c: PureComponent) => {
    this._ref = c;
  }

  private setNativeProps = (nativeProps) => {
    this._ref.setNativeProps(nativeProps);
  }
}
