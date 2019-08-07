import React from 'react';
import {View, Text} from 'react-native';

import UserInformation from '../user-information';

const CoffeeSelect = () => {
  return(
    <View>
      <UserInformation />
      <Text>Select your coffee</Text>
    </View>
  )
};

export default CoffeeSelect;