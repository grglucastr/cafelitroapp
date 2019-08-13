import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Button } from 'react-native-ui-kitten';

const createRows = (data, columns ) => {
  const rows = Math.floor(data.length / columns); // [A]  
  let lastRowElements = data.length - rows * columns; // [B]   

  while (lastRowElements !== columns) { // [C]
    data.push({ // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1; // [E]
  }
  return data; // [F]
}

const CoffeeList  = ({navigation}) => {

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
              <Button  onPress={() => navigation.navigate('LitersSelect')}>
                {item.title}
              </Button>
            </View>
          )
        )}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  items:{
    flex:1,
    margin:4,
  },

})

export default withNavigation(CoffeeList);