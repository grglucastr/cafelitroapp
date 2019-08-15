import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import CoffeeSelect from './src/components/coffee-select';
import UserIdentification from './src/components/user-identification';
import LitersSelect from './src/components/liters-select';
import CoffeeEnd from './src/components/coffee-end';

const App = createStackNavigator({
  CoffeeStart: {
    screen: UserIdentification,
    navigationOptions: {
      header:null,
    }
  },
  CoffeeSelect,
  LitersSelect,

  CoffeeEnd:{
    screen: CoffeeEnd,
    navigationOptions: {
      header: null,
    },
  },
})

export default createAppContainer(App);