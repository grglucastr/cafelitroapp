import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.scss';

const Header = () => {
  return(
    <View style={styles.logo}>
      <View style={styles.logo__app}>
        <Image 
          style={styles.logo__app_img}
          resizeMode="contain"
          source={ require('../../imgs/coffee.jpg') } 
        />

        <Text style={styles.logo__app_text}>Cafe Litro</Text>

      </View>
      
      <Image 
        style={styles.logo__samsung}
        resizeMode="contain"
        source={ require('../../imgs/sam-white.png') } 
        />
    </View>
  )
}

export default Header;