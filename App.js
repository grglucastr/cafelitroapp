import React from 'react';
import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';
import Home from './src/components/home';
import CoffeeSelect from './src/components/coffee-select';
import UserIdentification from './src/components/user-identification';

const App = createStackNavigator({
  Home: UserIdentification,
  CoffeeSelect: CoffeeSelect
})

export default createAppContainer(App);