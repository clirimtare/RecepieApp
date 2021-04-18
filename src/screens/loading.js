import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  TouchableOpacity, Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Logo from "../../assets/logo.jpg";

const switchToAuth = () => {
  Actions.replace('auth')
};
let val=0;
//Start with refresh every time 😊😊
class LoadingScene extends Component {
  state = {
    LogoAnime: new Animated.Value(val),
    LogoText: new Animated.Value(val),
    loadingSpinner: false,
  };
  componentDidMount() {
    const {LogoAnime,  LogoText } = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 15000,
        isInteraction: false
      }).start(),
      Animated.timing(LogoText, {
        toValue: 1,
        duration: 12000,
        isInteraction: false
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
        isInteraction: false
      });
      setTimeout(switchToAuth, 1000);
    });
  }
  static navigationOptions = {

    header: null
  }

  render() {
    return (

      <View style={styles.container}>
        <Animated.View style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image source={Logo} style={{ height: 150,  width:150}}/>


          {this.state.loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color="#5257f2"
            />
          ) : null}
        </Animated.View>
        <Animated.View style={{ opacity: this.state.LogoText }}>
          <Text style={styles.logoText}>Welcome</Text>

        </Animated.View>
        <View>
          <Button block style={styles.button} onPress={() => this.props.navigation.navigate('AuthScene')} title='  Log in    ' >
            <Text style={styles.textOrder} >Log In</Text></Button></View>

      </View>
    );
  }
}

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },

  logoText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingVertical: 10,
    borderRadius: 100,
    paddingBottom: 10,
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});