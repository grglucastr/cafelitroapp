import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import styles from './styles';

const CoffeeEnd = ({navigation}) => {

  const userParam = navigation.getParam('user');
  const coffee = navigation.getParam('coffee');
  const liters = navigation.getParam('liter');
  const beverageType = coffee.title;

  return(
    <AndroidBackHandler onBackPress={() => navigation.navigate('CoffeeStart') }>
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
          onPress={() => navigation.navigate('CoffeeStart', {userParam})}
          style={styles.btn}>
          <Text>Concluir</Text>
        </TouchableOpacity>
      </View>
    </AndroidBackHandler>
  )
}

export default CoffeeEnd;