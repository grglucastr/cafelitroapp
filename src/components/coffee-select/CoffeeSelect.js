import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInformation from '../user-information';
import CoffeeList from '../coffee-list';

const CoffeeSelect = () => {
  return(
    <View>
      <UserInformation />
      <Text style={[styles.regularText, styles.titleText, styles.header1]}>Qual tipo você vai querer? </Text>
      <CoffeeList />

    </View>
  )
};

const styles = StyleSheet.create({
  regularText: {
    color: '#fff3c9',
  },

  header1: {
    fontSize: 30,
    marginTop:20,
    marginBottom:20,
  },

  titleText:{
    fontWeight: 'bold',
  },
})

export default CoffeeSelect;