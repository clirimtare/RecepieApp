import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Item, Input, Text, Button } from 'native-base';

class AuthScene extends Component {
  state = {
    username: '',
    password: ''
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (username, pass) => {
    { alert('You log in was successful') } { this.props.navigation.navigate('Home') }
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  render() {
    return (

      <View style={styles.container}>


        <View style={styles.middle}>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>LOG IN</Text>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Enter username" style={styles.Input} onChangeText={this.handleUsername} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Enter password" style={styles.Input} onChangeText={this.handlePassword} />
              </Item>
              <View style={styles.Button}>
                <Button block style={styles.button}
                  onPress={
                    () => this.login(this.state.username, this.state.password)}
                  title='submit'>
                  <Text style={styles.btnText}>LOG IN</Text>
                </Button>
              </View>
            </Form>
          </View>
        </View>

      </View>
    );
  }
}

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },

  textContainer: {
    color: '#FCFDFF',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    display: "flex",
    backgroundColor: "#f0cc99",
    borderRadius: 20,
    marginTop: 5,
    top: '20%',
    width: '100%'
  },
  signin: {
    top: 0,
    color: 'black',
    marginTop: 15,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: 'black',
  },
  Input: {
    fontSize: 12,
  },
  loginAs: {
    paddingLeft: 46.6,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: '#2d7feb'
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});