import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Chat extends Component {
  render() {
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({ title: name });

    let bgColor = this.props.route.params.bgColor;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
        }}
      >
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Start')}
        />
      </View>
    );
  }
}
