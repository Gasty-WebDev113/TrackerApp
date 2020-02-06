import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Screens
import {ActivityList} from './src/components/ActivityList';
import {HeaderContain} from './src/components/Header';
import {Podometer} from './src/components/Podometer';

const App = () => {
  const [initialstep, setInitialStep] = useState(0);

 

  return (
    <>
      <HeaderContain>
        <ScrollView style={{backgroundColor: 'white'}}>
          <ActivityList />
          <Podometer initialsteps={500} />
        </ScrollView>
      </HeaderContain>
    </>
  );
};

export default App;
