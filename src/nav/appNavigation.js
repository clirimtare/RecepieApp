import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/home';
import RecepieScreen from '../screens/recepie';

import DrawerContainer from '../screens/drawerContainer';
import RecepieListScreen from '../screens/recepiesList';
import SearchScreen from '../screens/search';
import CategoriesScreen from '../screens/categories';
import DataScreen from '../screens/data';
import CreateScreen from '../screens/create';

import LoadingScene from '../screens/loading';
import AuthScene from '../screens/login';

const Start = createStackNavigator({
  LoadingScene: {
    screen: LoadingScene,
    navigationOptions: () => {
      return { header: null };
    }
  },
  AuthScene: {
    screen: AuthScene,
    navigationOptions: () => {
      return { header: null };
    }
  },
}, {
  headerMode: 'none',
  navigationOptions: { headerVisible: false, }
});

const MainNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recepie: RecepieScreen,
    RecepieList: RecepieListScreen,
    Search: SearchScreen,
    Data: DataScreen,
    Create: CreateScreen
  },
  {
    navigationOptions: {
      headerShown: true,
    }
  },
  {
    initialRouteName: 'Home',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    }),
    navigationOptions: { headerVisible: true, }
  });
const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigation
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

const Final = createStackNavigator({
  Start: {
    screen: Start
    , navigationOptions: () => {
      return { header: null };
    }
  },
  DrawerStack: {
    screen: DrawerStack
    , navigationOptions: () => {
      return { header: null };
    }
  }
}, {
  headerMode: 'none',
  navigationOptions: { headerVisible: false, }
})

export default AppContainer = createAppContainer(Final);

console.disableYellowBox = true;