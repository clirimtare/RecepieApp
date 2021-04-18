import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class Data extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://www.recipepuppy.com/api/?i=onions,garlic&q=pizza");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => <View>
            <Text style={styles.item}>
              {`Ingridients: \n ${item.ingredients}`}
            </Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginLeft: 5,
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  item: {
    display: "flex",
    backgroundColor: "#f0cc99",
    borderRadius: 20,
    paddingLeft: 30,
    marginTop: 5
  },
});


