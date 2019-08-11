import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInformation from '../user-information';
import CoffeeList from '../coffee-list';

import LayoutWrapper from '../../util/layout-wrapper';

const CoffeeSelect = () => {
  return(
    <LayoutWrapper>
      <View style={{flex: 1}}>
        <UserInformation />
        <Text>Qual desses você deseja solicitar? </Text>
        <CoffeeList />
      </View>
    </LayoutWrapper>
  )
};


export default CoffeeSelect;