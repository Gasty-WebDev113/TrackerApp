
import React, {useEffect} from 'react';
import {Dimensions, Animated} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {
  ProgressIconContainer,
  InnerText,
} from './styles/useCircularAnimationStyles';

/**
 * @param {Animated.Value} progress progress number to the function
 * @param {string} firstColor first color of the gradient animation
 * @param {string} secondColor second color of the gradient animation
 * @param {string} innertext text inside in the circular
 * @param {string} activity icon name with fontawsome
 * @param {int} iconsize icon size
 */
export function useCircleAnimation(
  progress,
  firstColor,
  secondColor,
  innertext,
  activity,
  iconsize,
) {
  const background = new Animated.Value(0); // Background

  // Circle Proportions
  const {width} = Dimensions.get('window');
  const size = width - 275;
  const radius = (size - 50) / 2;
  const circunference = radius * 2 * Math.PI;

  // Animated Components
  const AnimatedProgress = Animated.createAnimatedComponent(Circle);
  const AnimatedProgressIcon = Animated.createAnimatedComponent(Icon);

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
    outputRange: [firstColor, secondColor],
  });

  return (
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
          size={iconsize}
          style={{color: bakcgroundcolor}}
        />
        <InnerText> {innertext} </InnerText>
      </ProgressIconContainer>
    </Svg>
  );
}

useCircleAnimation.propTypes = {
  progress: PropTypes.instanceOf(Animated.Value).isRequired,
  firstColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
  innertext: PropTypes.string,
  activity: PropTypes.string,
  iconsize: PropTypes.number,
}