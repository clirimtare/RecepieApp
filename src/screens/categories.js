import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";

export const categories = [
  {
    id: 3,
    name: 'Cookies',
    photo_url:
      'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Mexican Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Italian Food',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Smoothies',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://images4.alphacoders.com/817/817350.jpg'
  },
];

export default class CategoriesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Categories',
    headerLeft: () =>
      <Ionicons
        style={style.icon}
        name="list"
        color="black"
        size={30}
        onPress={() => {
          navigation.openDrawer();
        }} />
  });

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecepieList', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={style.box}>
        <Image source={{ uri: item.photo_url }} style={{ height: 200, margin: 5, width: 170, borderRadius: 20 }} />
        <Text style={style.title}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          numColumns={2}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const style = StyleSheet.create(
  {
    title:
    {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
    },
    box:
    {
      display: "flex",
      backgroundColor: "#f0cc99",
      borderRadius: 20,
      marginTop: 5
    },
    dec: {
      textAlign: 'center',
      fontWeight: 'bold'
    },
    icon: {
      paddingLeft: 30
    }
  }
)