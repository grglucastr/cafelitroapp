import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const CoffeeEnd = ({navigation}) => {

  const liters = 20;
  const beverageType = 'Café Preto';

  return(
    <View style={{flex:1, justifyContent: 'space-around'}}>
      <View>
        <Text style={[styles.header, styles.header_3]}>
          Solicitação feita com sucesso!
        </Text>
        <Image  
          resizeMode="contain"
          source={require('../../../assets/images/checked.png')}
          style={styles.done_img}
        />
      </View>

      <View>
        
        <Text style={[styles.header, styles.header_1]}>
          {liters}L
        </Text>
        <Text style={[styles.header, styles.header_3]}>
          {beverageType}
        </Text>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={styles.btn}>
        <Text>Concluir</Text>
      </TouchableOpacity>

    </View>
  )
}

export default CoffeeEnd;