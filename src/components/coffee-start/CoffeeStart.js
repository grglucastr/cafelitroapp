import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  Dimensions, 
  KeyboardAvoidingView, 
  Keyboard, 
  TextInput,
  ToastAndroid } from 'react-native';

import LayoutWrapper from '../../util/layout-wrapper';
import { Input, Button } from 'react-native-ui-kitten';

const CoffeeStart = ({navigation}) => {

  const [userNo, setUserNo] = useState("");
  const window = Dimensions.get('window');
  const textInputUserNo = React.createRef();

  const handleBadgeNumber = text =>{    
    setUserNo(text);
    if(text.length === 10){
      if(text === '3539075628'){
        navigation.navigate('CoffeeSelect');
      }else{
        console.log('this is bad badge');
      }
    }
  }

  return(
    <LayoutWrapper>
      <KeyboardAvoidingView style={{flex:1, justifyContent:'space-around', backgroundColor:'#6c3b1b'}}>
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

          <TextInput
            autoFocus={true} 
            onFocus={Keyboard.dismiss}
            onChangeText={(text) => handleBadgeNumber(text)}            
            style={{backgroundColor: 'transparent', color:'transparent'}}
          />
          
          <Text style={{textAlign: 'center', color: '#fff3c9', fontSize: 20}}>
            Aproxime o crachá do leitor...
          </Text>
          <View style={{flexDirection: 'row'}} >
            <Input
              value={userNo}
              ref={ textInputUserNo }
              onChangeText={(string) => setUserNo(string)}
              keyboardType="number-pad"            
              onSubmitEditing={() => redirectByUserCustomCode(navigation, userNo, textInputUserNo)}
              maxLength={8}
              style={{flex: 2, borderRadius:0}}
              placeholder="Ou digite sua matrícula aqui!"
            />
          
            <Button 
              status="white" 
              style={{borderRadius:0, height: 64.8}}
              onPress={() => {
                const userNumber = userNo; 
                setUserNo(""); 
                return redirectByUserCustomCode(navigation, userNumber, textInputUserNo);}}>
                Prosseguir
            </Button>
            
          </View>
        </View>
      </KeyboardAvoidingView>
    </LayoutWrapper>
  );
}

const redirectByUserCustomCode = (navigation, userNumber, input) => {

  if(userNumber === ""){
    ToastAndroid.show("Preencha o campo corretamente", ToastAndroid.SHORT);
    console.log('input', input);
    input.current.focus();
    return ;
  }
  navigation.navigate('UserValidation', {userNo: userNumber});
  
}

export default CoffeeStart;