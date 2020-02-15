/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Pedometer from '../components/Pedometer';
import BarChartSteps from '../components/BarChartSteps';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
/** Home Screen */
export default class Home extends Component {
  render() {
    return (
      <ScrollView bounces={false}>
        <LinearGradient
          locations={[0, 0.55, 0.65]}
          colors={['#000000', '#07002a']}>
          <Pedometer />
          <BarChartSteps />
        </LinearGradient>
      </ScrollView>
    );
  }
}
