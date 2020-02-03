import React, {useState} from 'react';
import {Dimensions, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  CircleContainer,
  ProgressText,
  MinusContainer,
  Minus,
} from './styles';
import {useCircleAnimation} from '../../hooks/useCircularAnimation';

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
  const progress = new Animated.Value((weight * circunference) / max); // Animation of progress value
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
        {circleprogress}
      </CircleContainer>
      {cardmode === true ? (
        <MinusContainer onPress={() => ProgressLimiter(false)}>
          <Minus>-</Minus>
        </MinusContainer>
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
