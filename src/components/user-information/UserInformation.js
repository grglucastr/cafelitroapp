import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const UserInformation = () => {
  return(
    <View style={{backgroundColor: '#645b3a', flexDirection: 'row'}}>
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
            <Text style={[styles.regularText, styles.titleText]}>Employee No.</Text>
            <Text style={styles.regularText}>11179629</Text>
          </View>

          <View style={{width: '60%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Name</Text>
            <Text style={styles.regularText}>George Lucas Bentes Nunes</Text>
          </View>
        </View>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 1}}>
          <View style={{width: '30%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Department</Text>
            <Text style={styles.regularText}>System Dev</Text>
          </View>

          <View style={{width: '60%'}}>
            <Text style={[styles.regularText, styles.titleText]}>Cost Center</Text>
            <Text style={styles.regularText}>R&D Sys. Dev. (C824545)</Text>
          </View>
        </View>


      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  regularText: {
    color: '#fff3c9',
  },

  titleText:{
    fontWeight: 'bold',
  },
})

export default UserInformation;