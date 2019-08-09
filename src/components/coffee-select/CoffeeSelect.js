import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInformation from '../user-information';
import CoffeeList from '../coffee-list';

const CoffeeSelect = () => {
  return(
    <View style={{flex: 1}}>
      <UserInformation />
      <Text>Qual desses você deseja solicitar? </Text>
      <CoffeeList />
    </View>
  )
};


export default CoffeeSelect;