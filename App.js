import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import CoffeeStart from './src/components/coffee-start';
import CoffeeSelect from './src/components/coffee-select';
import LitersSelect from './src/components/liters-select';
import CoffeeEnd from './src/components/coffee-end';

const App = createStackNavigator({
  CoffeeStart: {
    screen: CoffeeStart,
    navigationOptions: {
      header:null,
    }
  },
  CoffeeSelect: {
    screen: CoffeeSelect,
    navigationOptions:{
      title: 'Tipo de Bebida',
    },
  },

  LitersSelect: {
    screen: LitersSelect,
    navigationOptions: {
      title: 'Litros'
    }
  },

  CoffeeEnd:{
    screen: CoffeeEnd,
    navigationOptions: {
      header: null,
    },
  },
})

export default createAppContainer(App);