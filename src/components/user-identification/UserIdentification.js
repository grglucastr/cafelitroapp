import React, { useState } from 'react';
import { View, Text, Image, Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-ui-kitten';

const UserIdentification = () =>{

  const [userNo, setUserNo] = useState("");
  const window = Dimensions.get('window');

  return(
    <KeyboardAvoidingView style={{flex:1, justifyContent:'space-around'}}>
      <View style={{justifyContent: "center", alignItems:'center'}}> 
        <Image
          style={{width: window.width, height: 30}}
          resizeMode={'contain'}
          source={require('../../imgs/sam-white.png')}
        />

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 55,height:55, marginTop:20}}
            source={require('../../imgs/coffee.jpg')}
            resizeMode="contain"
          />
          <Text style={{color: '#fff3c9', fontWeight:'bold', fontSize: 40, marginLeft: 10, marginTop:20}}>
            Café Litro
          </Text>
        </View>
      </View>

      <View>
        <Image 
          source={require('../../imgs/badge.png')}
          resizeMode="contain"
          style={{alignSelf: 'center', height: 130}}
        />      
        <Text style={{textAlign: 'center', color: '#fff3c9', fontSize: 20, marginTop: 40, marginBottom:10}}>
          Aproxime o crachá do leitor...
        </Text>
        <View style={{flexDirection: 'row'}} >
          <Input
            value={userNo}
            onChangeText={(string) => setUserNo(string)}
            keyboardType="number-pad"
            style={{flex: 2, borderRadius:0}}
            placeholder="Ou digite sua matrícula aqui!"
          />
          <Button status="white" style={{borderRadius:0, height: 64.8}}>Prosseguir</Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff3c9',
  },
})

export default UserIdentification;