import React from 'react';
import { ScrollView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';

import UserIdentification from './src/components/user-identification';
import CoffeeSelect from './src/components/coffee-select';



const App = () => (
  <ApplicationProvider 
    mapping={mapping}
    theme={lightTheme}>   
    <Layout style={{flex: 1}}>
      <CoffeeSelect />
    </Layout>
  </ApplicationProvider>
)

export default App;