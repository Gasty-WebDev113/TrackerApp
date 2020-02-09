import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityList} from '../components/ActivityList';
import Podometer from '../components/Podometer';
import WaterDrinking from '../components/WaterDrinking'
import LinearGradient from 'react-native-linear-gradient';
/** Home Screen */
export default class Home extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <ScrollView>
        <LinearGradient 
        locations={[0, 0.55, 0.65]}
        colors={['#000000', '#07002a', '#1d3e5e']}>
          <ActivityList />
          <Podometer />
          <WaterDrinking />
        </LinearGradient>
      </ScrollView>
    );
  }
}
