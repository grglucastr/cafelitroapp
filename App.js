import React from 'react';
import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';
import CoffeeSelect from './src/components/coffee-select';
import UserIdentification from './src/components/user-identification';
import LitersSelect from './src/components/liters-select';
import CoffeeEnd from './src/components/coffee-end';


const App = createStackNavigator({
  Home: LitersSelect,
  CoffeeSelect,
  LitersSelect,
  CoffeeEnd
})

export default createAppContainer(App);