import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles.scss';


const CoffeeItem = ({title}) => {
  return(
    <View style={styles.item}>
      <Image
        style={styles.item__image} />
      <Text style={styles.item__title} >{title}</Text>
    </View>
  )
}

export default CoffeeItem;