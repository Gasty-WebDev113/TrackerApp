import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity, Animated, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {
  Container,
  CircleContainer,
  ProgressIconContainer,
  ProgressText,
  InnerText,
  MinusContainer,
  Minus,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const CircularProgress = ({
  activity,
  innertext,
  cardmode,
  weight,
  max,
}) => {
  // Circle Proportions
  const {width} = Dimensions.get('window');
  const size = width - 275;
  const radius = (size - 50) / 2;
  const circunference = radius * 2 * Math.PI;

  const [progressnumber, setProgressNumber] = useState(weight); // Number progress value --- change the 10 for the weight activity number
  const [progress, setProgress] = useState(
    new Animated.Value((weight * circunference) / max),
  ); // Animation of progress value

  const [background, setBackgroud] = useState(new Animated.Value(0)); // Background

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

  // Animated Components
  const AnimatedProgress = Animated.createAnimatedComponent(Circle);
  const AnimatedProgressIcon = Animated.createAnimatedComponent(Icon);

  const ProgressLimiter = add => {
    if (progressnumber !== max) {
      // Max is the max number of the circle
      Animated.timing(progress, {
        toValue:
          ((progressnumber +
            (add === true ? weight : progressnumber > 0 ? -weight : null)) *
            circunference) /
          max,
        duration: 1000,
      }).start();
      setProgressNumber(
        progressnumber +
          (add === true ? weight : progressnumber > 0 ? -weight : null),
      ); // Add progress
    } else null;
  };
  const bakcgroundcolor = background.interpolate({
    // Color loop interpolate
    inputRange: [0, 300],
    outputRange: ['rgba(210,255,82,1)', 'rgba(124, 194, 58, 1)'],
  });
  return (
    <Container>
      {cardmode === true ? (
        <>
          <ProgressText>
            {' '}
            {progressnumber} / {max}{' '}
          </ProgressText>
        </>
      ) : null}
      <CircleContainer
        onPress={() => {
          cardmode === true ? ProgressLimiter(true) : null;
        }}>
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
            strokeDashoffset={progress}
          />
          <ProgressIconContainer>
            <AnimatedProgressIcon
              name={activity} // Add in the future costumizable icon
              size={25}
              style={{color: bakcgroundcolor}}
            />
            <InnerText> {innertext} </InnerText>
          </ProgressIconContainer>
        </Svg>
      </CircleContainer>
      {cardmode === true ? (
        <MinusContainer onPress={() => ProgressLimiter(false)}>
          <Minus>-</Minus>
        </MinusContainer>
      ) : null}
    </Container>
  );
};
