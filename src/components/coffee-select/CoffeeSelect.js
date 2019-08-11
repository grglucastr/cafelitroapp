import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInformation from '../user-information';
import CoffeeList from '../coffee-list';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Button } from 'react-native-ui-kitten';

const CoffeeSelect = () => {
  return(
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>

      <Layout style={{flex:1}}>
        <View style={{flex: 1}}>
          <UserInformation />
          <Text>Qual desses você deseja solicitar? </Text>
          <CoffeeList />
        </View>
      </Layout>
    </ApplicationProvider>
  )
};


export default CoffeeSelect;