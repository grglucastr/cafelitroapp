import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.scss';

const UserInformation = ({user}) => {

  return(     
    <View style={styles.user}>
      {/* User picture thumbnail */}
      <View style={styles.user__avatar}>
        <Image 
          style={styles.user__avatar_img}
          source={{uri: 'https://media.licdn.com/dms/image/C5603AQG9GNc4roKzdw/profile-displayphoto-shrink_100_100/0?e=1570665600&v=beta&t=uYUUO2RZeyN05IoDnvPt2B5Fk36PdMJwG4pl5KXTmaI'}}
          resizeMode='contain'        
        />
      </View>

      {/* User basic information */}
      <View style={styles.user__info}>
        <Text style={styles.user__info_text}>{user.number}</Text>
        <Text style={styles.user__info_text}>{user.name}</Text>
        <Text style={styles.user__info_text}>{user.costCenter}</Text>
        <Text style={styles.user__info_text}>{user.department}</Text>
      </View>
    </View>
  )
}


export default UserInformation;