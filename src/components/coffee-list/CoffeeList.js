import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Button } from 'react-native-ui-kitten';

const CoffeeList  = ({navigation}) => {

  const user = navigation.getParam('user');
  const coffees = [
    {id: "1", title: 'Cafe Preto'},
    {id: "2", title: 'Cafe com Leite'},
    {id: "3", title: 'Achocolatado'},
    {id: "4", title: 'Chá Mate'},
    {id: "5", title: 'Chá Camomila'},
    {id: "6", title: 'Suco'},
    {id: "8", title: 'Suco'},
  ];

  const data = createRows(coffees, 2);
  const numColumns = 2;

  return(
    <View style={{flex:1}}>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        renderItem={({item}) => (
          item.empty ? 
          (<View style={styles.items}></View>) : 
          (
            <View style={styles.items}>
              <Button  onPress={() => navigation.navigate('LitersSelect', {user, item})}>
                {item.title}
              </Button>
            </View>
          )
        )}
      />
      
    </View>
  )
}

// This is a helper function to keep grid buttons align
// in its respective columns

const createRows = (data, columns ) => {
  const rows = Math.floor(data.length / columns); 
  let lastRowElements = data.length - rows * columns;

  while (lastRowElements !== columns) { 
    data.push({ 
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1; 
  }
  return data;
}


const styles = StyleSheet.create({
  items:{
    flex:1,
    margin:4,
  },

})

export default withNavigation(CoffeeList);