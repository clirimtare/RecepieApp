import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Form, Item, Input, Text, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { multiply } from 'react-native-reanimated';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Create extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create',

  });

  state = {
    title: '',
    ingridients: '',
    steps: '',
    date: '',
  }
  handleFrom = (text) => {
    this.setState({ title: text })
  }
  handleTo = (text) => {
    this.setState({ ingridient: text })
  }
  handleSeats = (text) => {
    this.setState({ steps: text })
  }
  saveData = (title, to, date, seats, desc) => {
    { alert('Thanks for sharing with us your recepies!') }
  }
  changeDate = (valor) => {
    this.setState({ date: valor })
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.middle}>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Share your recepies</Text>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="TITLE" style={styles.Input} onChangeText={this.handleFrom} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="INGRIDIENTS" style={styles.Input} onChangeText={this.handleTo} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="STEPS" style={styles.Input} onChangeText={this.handleSeats} />
              </Item>
              <Item style={styles.date}>
                <View >
                  <Text>DATE YOU WANT TO PUBLISH:</Text>
                  <DatePicker
                    format="DD-MM-YYYY"
                    style={styles.dataComponents}
                    date={this.state.date}
                    onDateChange={this.changeDate}></DatePicker>

                </View>

              </Item>
              <Button block style={styles.button} onPress={() => this.saveData(this.state.from, this.state.to, this.state.date, this.state.seats, this.state.desc)}>
                <Text style={styles.textOrder} >Submit</Text></Button>
            </Form>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  middle: {},

  textContainer: {
    color: 'black',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    //top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0cc99',
    borderRadius: 5,
    paddingBottom: 40,
    borderRadius: 10
  },

  formItems: {
    marginTop: 15,
    borderBottomColor: 'black',
  },
  date: {
    marginTop: 15,
    borderBottomColor: 'transparent',
  },
  Input: {
    fontSize: 12,
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
    fontSize: 18,
  },
  dataComponents: {
    width: 300,
    borderRightColor: 'black'
  },
  icon: {
    paddingLeft: 30
  }
});