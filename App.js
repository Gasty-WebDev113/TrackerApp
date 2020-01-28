
import React, {useState} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';

//Screens
import {CircularProgress} from './src/components/CircularProgress'

const App = () => {

  //Data Example
  const Data = [
    {
      id: '1',
      title: 'Read',
      icon: 'book'
    },
    {
      id: '2',
      title: 'Meditation',
      icon: 'volume-off' //Add More Icons
    },
    {
      id: '3',
      title: 'Gym',
      icon: 'trophy'
    },
    {
      id: '4',
      title: 'Write',
      icon: 'pencil'
    },
  ];

  return (
    <View style={{flexDirection: "row", height: '100%', backgroundColor: 'rgb(255, 168, 162)'}}>
      <FlatList
        data={Data}
        renderItem={({item}) => <CircularProgress activity={item.icon} title={item.title} />}
        horizontal={true}
      />
    </View>
  );
};

export default App;
