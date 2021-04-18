import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class MenuButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="rgba(113, 198, 217,0.9)"
      >
        <View style={style.view}>
          <View >
            <Ionicons
              name={this.props.icon}
              color="black"
              size={20}>
              <Text >{this.props.title}</Text>
            </Ionicons>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string
};

const style = StyleSheet.create(
  {
    view: {
      padding: 17
    }

  }
)

