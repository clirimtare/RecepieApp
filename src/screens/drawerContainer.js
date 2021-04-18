import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuButton from '../component/menuItem';
import PropTypes from 'prop-types';


export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={{ marginTop: 200 }}>
          <MenuButton
            title="HOME"
            icon="home-outline"
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CREATE"
            icon="add-outline"
            onPress={() => {
              navigation.navigate('Create');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATEGORIES"
            icon="apps-outline"
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            icon="search-outline"
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
           <MenuButton
            title="LOG OUT"
            icon="log-out-outline"
            onPress={() => {
              navigation.navigate('LoadingScene');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );

  }
}


DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

