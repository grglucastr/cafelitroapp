import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { getStyle  } from '../../util';


const UserInformation = () => {

  const [styles, setStyles] = useState(getStyle(portraitStyles, landscapeStyles));

  const onLayout = () => {
    setStyles(getStyle(portraitStyles, landscapeStyles));
  }

  return(
    <View style={{backgroundColor: '#645b3a', flexDirection: 'row'}} onLayout={onLayout}>
      <View>
        <Image 
          style={{width: 100, height:100}}
          source={{uri: 'https://media.licdn.com/dms/image/C5603AQG9GNc4roKzdw/profile-displayphoto-shrink_100_100/0?e=1570665600&v=beta&t=uYUUO2RZeyN05IoDnvPt2B5Fk36PdMJwG4pl5KXTmaI'}}
          resizeMode='contain'        
        />
      </View>

      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 1}}>
          <View style={{width: '30%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Matrícula.</Text>
            <Text style={styles.regularText}>11179629</Text>
          </View>

          <View style={{width: '60%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Nome</Text>
            <Text style={styles.regularText}>George Lucas Bentes Nunes</Text>
          </View>
        </View>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 1}}>
          <View style={{width: '30%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Departamento</Text>
            <Text style={styles.regularText}>System Dev</Text>
          </View>

          <View style={{width: '60%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Centro Custo</Text>
            <Text style={styles.regularText}>R&D Sys. Dev. (C824545)</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

const portraitStyles = StyleSheet.create({
  regularText: {
    color: 'blue',
  },

  titleText:{
    fontWeight: 'bold',
  },
});

const landscapeStyles = StyleSheet.create({
  regularText: {
    color: 'yellow',
  },

  titleText:{
    fontWeight: 'bold',
  },
});

export default UserInformation;