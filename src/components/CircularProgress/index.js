import React, {useState} from 'react';
import {Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import {
  Container,
  CircleContainer,
  HabitTitle,
  PlusHabit,
  CheckIcon,
} from './styles';
import {useCircleAnimation} from '../../hooks/useCircularAnimation';
import {circunference} from '../../constants/circunference';

export const CircularProgress = ({
  activity,
  innertext,
  cardmode,
  weight,
  max,
}) => {
  const [progressnumber, setProgressNumber] = useState(weight); // Number progress value --- change the 10 for the weight activity number
  const [progress, setProgress] = useState(
    // Yes, I need the this in state
    new Animated.Value((weight * circunference) / max),
  ); // Animation of progress value
  const [checkProgress, setCheckProgress] = useState(new Animated.Value(0.01));
  const circleprogress = useCircleAnimation(
    progress,
    'rgba(210,255,82,1)',
    'rgba(124, 194, 58, 1)',
    innertext,
    activity,
    25,
  );

  const ProgressLimiter = add => {
    if (progressnumber !== max) {
      // Max is the max number of the circle
      Animated.parallel([
        Animated.timing(checkProgress, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
        }),
        Animated.timing(progress, {
          toValue: ((progressnumber + weight) * circunference) / max,
          duration: 1000,
        }),
      ]).start();
      setProgressNumber(progressnumber + weight); // Add progress
    } else null;
  };

  return (
    <Container>
      <CircleContainer
        onPress={() => {
          cardmode === true ? ProgressLimiter(true) : null;
        }}>
        {circleprogress}
      </CircleContainer>
      <HabitTitle>{innertext}</HabitTitle>
      {cardmode === true ? (
        <PlusHabit
          onPress={() => {
            ProgressLimiter(true);
          }}>
          <CheckIcon
            progress={checkProgress}
            source={require('../../animations/check.json')}
            colorFilter="#3D17F6"
          />
        </PlusHabit>
      ) : null}
    </Container>
  );
};

CircularProgress.propTypes = {
  activity: PropTypes.string.isRequired,
  innertext: PropTypes.string,
  cardmode: PropTypes.bool.isRequired,
  weight: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
