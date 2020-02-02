import {
  DeviceEventEmitter,
  NativeModules,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Svg, {Circle} from 'react-native-svg';
import {Container} from './styles';

const sensor = NativeModules.SensorManager;

export const Podometer = () => {
  const [stepnumber, setSteps] = useState(0);
  const [background, setBackground] = useState(new Animated.Value(0));

  useEffect(() => {
    // Start animation of change colors of the circular progress
    Animated.loop(
      Animated.sequence([
        Animated.timing(background, {
          toValue: 300,
          duration: 1000,
        }),
        Animated.timing(background, {
          toValue: 1,
          duration: 1000,
        }),
      ]),
    ).start();
  }, [background]);

  const bakcgroundcolor = background.interpolate({
    // Color loop interpolate
    inputRange: [0, 300],
    outputRange: ['rgba(77, 5, 232, 1)', 'rgba(77, 19, 209, 1)'],
  });

  sensor.startStepCounter(1000);
  console.log(stepnumber);
  DeviceEventEmitter.addListener('StepCounter', data => {
    setSteps(data.steps);
  });

  const {width} = Dimensions.get('window');
  const size = width - 275;
  const radius = (size - 50) / 2;
  const circunference = radius * 2 * Math.PI;
  const AnimatedProgress = Animated.createAnimatedComponent(Circle);

  return (
    <Container>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <AnimatedProgress
          cx="50"
          cy="50"
          r={radius}
          stroke={bakcgroundcolor}
          fill="none"
          strokeWidth="10"
        />
        <AnimatedProgress
          cx="50"
          cy="50"
          r={radius}
          stroke="black"
          fill="black"
          strokeWidth="10"
          strokeDasharray={` ${circunference} ${circunference} `}
          strokeDashoffset={(stepnumber * circunference) / 1000}
        />
      </Svg>
    </Container>
  );
};
