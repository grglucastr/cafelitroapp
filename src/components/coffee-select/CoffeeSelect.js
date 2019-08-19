import React from 'react';
import {View, Text} from 'react-native';

import UserInformation from '../user-information';
import CoffeeList from '../coffee-list';

import LayoutWrapper from '../../util/layout-wrapper';

const CoffeeSelect = ({ navigation }) => {

  const user = navigation.getParam('user');

  return(
    <LayoutWrapper>
      <View style={{flex: 1}}>
        <UserInformation user={user} />
        <Text>Qual desses você deseja solicitar? </Text>
        <CoffeeList user={user} />
      </View>
    </LayoutWrapper>
  )
};


export default CoffeeSelect;