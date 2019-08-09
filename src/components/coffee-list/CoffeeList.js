import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

import CoffeeItem from '../coffee-item';

const createRows = (data, columns) => {
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

const CoffeeList  = () => {

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

  return(
    <View style={{flex:1}}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        style={styles.container}
        renderItem={({item}) => {
          if(item.empty){
            return <View style={[styles.items, styles.empty]}></View>
          }
          return(
          <View style={styles.items}>
            <CoffeeItem title={item.title} />
          </View>);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  items:{
    padding: 10,
    margin: 5,
    flex:1,
    
    borderRadius: 10,
    height: 170,
    
  },
  empty:{
    borderWidth:0,
    backgroundColor: 'transparent'
  }
});


export default CoffeeList;