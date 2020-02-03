import {
  DeviceEventEmitter,
  NativeModules,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {Container} from './styles';
import {useCircleAnimation} from '../../hooks/useCircularAnimation';

const sensor = NativeModules.SensorManager;

export const Podometer = () => {
  const {width} = Dimensions.get('window');
  const size = width - 275;
  const radius = (size - 50) / 2;
  const circunference = radius * 2 * Math.PI;

  const [stepnumber, setSteps] = useState(0);

  const podometerprogress = useCircleAnimation(
    (stepnumber * circunference) / 1000,
    'rgba(51,0,153,1)',
    'rgba(51,51,255,1)',
    `${stepnumber} / 1000`,
    'trophy',
    30,
  );

  // Start Sensor
  sensor.startStepCounter(1000);
  DeviceEventEmitter.addListener('StepCounter', data => {
    console.log(data)
    setSteps(data.steps);
  }); // After 12pm store the data, and substract with steps

  return <Container>{podometerprogress}</Container>;
};
