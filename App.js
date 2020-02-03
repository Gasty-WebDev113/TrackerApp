import React from 'react';
import {View, ScrollView} from 'react-native';

// Screens
import {ActivityList} from './src/components/ActivityList';
import {HeaderContain} from './src/components/Header';
import {Podometer} from './src/components/Podometer';

const App = () => {
  return (
    <>
      <HeaderContain>
        <ScrollView style={{backgroundColor: 'gray'}}>
          <ActivityList />
          <Podometer />
        </ScrollView>
      </HeaderContain>
    </>
  );
};

export default App;
