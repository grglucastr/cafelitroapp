import React from 'react';
import { View, Text} from 'react-native';

import styles from './styles.scss';

const UserValidation = ({navigation}) => {
  
  const userNo = navigation.getParam('userNo');

  if(userNo === '11179629'){

    const user = {
      number:userNo,
      name:'George Nunes',
      department: 'System Dev',
      costCenter: 'R&D Sys. Dev. (C824545)'
    }

    return navigation.navigate('CoffeeSelect', {user});
  }

  return(
    <View>
      <Text style={[styles.header, styles.header_2]}>
        Employee not found
      </Text>
    </View>
  )
}

export default UserValidation;