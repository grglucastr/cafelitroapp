import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { getStyle  } from '../../util';

import styles from './UserInformation.scss';

const UserInformation = () => {


  return(
    <View style={styles.container}>

      {/* User picture thumbnail */}
      <View>
        <Image 
          style={{width: 100, height:100}}
          source={{uri: 'https://media.licdn.com/dms/image/C5603AQG9GNc4roKzdw/profile-displayphoto-shrink_100_100/0?e=1570665600&v=beta&t=uYUUO2RZeyN05IoDnvPt2B5Fk36PdMJwG4pl5KXTmaI'}}
          resizeMode='contain'        
        />
      </View>

      {/* User basic information */}
      <View>
        <View>
          <View>
            <Text>Matrícula.</Text>
            <Text>11179629</Text>
          </View>

          <View>
            <Text>Nome</Text>
            <Text>George Lucas Bentes Nunes</Text>
          </View>
        </View>
        
        <View>
          <View>
            <Text>Departamento</Text>
            <Text>System Dev</Text>
          </View>

          <View>
            <Text>Centro Custo</Text>
            <Text>R&D Sys. Dev. (C824545)</Text>
          </View>
        </View>
      </View>
    </View>

  )
}


export default UserInformation;