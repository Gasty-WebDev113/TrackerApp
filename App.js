
import React, {useState} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';

//Screens
import {CircularProgress} from './src/components/CircularProgress'

const App = () => {

  return (
    <View style={{flexDirection: "row"}}>
      <CircularProgress />
      <CircularProgress />
      <CircularProgress />
    </View>
  );
};

export default App;
