import React from 'react';
import {View} from 'react-native';

// Screens
import {ActivityList} from './src/components/ActivityList';
import {HeaderContain} from './src/components/Header';
import {Podometer} from './src/components/Podometer';

const App = () => {
  return (
    <>
      <HeaderContain>
        <View style={{backgroundColor: 'gray'}}>
          <ActivityList />
          <Podometer />
        </View>
      </HeaderContain>
    </>
  );
};

export default App;
