import React from 'react';
import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';
import CoffeeSelect from './src/components/coffee-select';
import UserIdentification from './src/components/user-identification';
import LitersSelect from './src/components/liters-select';

const App = createStackNavigator({
  Home: UserIdentification,
  CoffeeSelect,
  LitersSelect,
})

export default createAppContainer(App);