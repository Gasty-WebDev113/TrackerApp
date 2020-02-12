import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import Podometer from '../components/Podometer';
import BarChartSteps from '../components/BarChartSteps'
import LinearGradient from 'react-native-linear-gradient';
/** Home Screen */
export default class Home extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <ScrollView>
        <LinearGradient
          locations={[0, 0.55, 0.65]}
          colors={['#000000', '#07002a']}>
          <Podometer />
          <BarChartSteps />
        </LinearGradient>
      </ScrollView>
    );
  }
}
