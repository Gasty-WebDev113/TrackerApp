
import React, {useState} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';

//Screens
import {CircularProgress} from './src/components/CircularProgress'
import {HeaderContain} from './src/components/Header'
import {Podometer} from './src/components/Podometer'

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
    <>
    
      <HeaderContain>
        
        <Podometer />
      </HeaderContain>
    </>
  );
};

export default App;

/*

*/
