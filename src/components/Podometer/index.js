import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Container} from './styles';
import {useCircleAnimation} from '../../hooks/useCircularAnimation';
import {useStepCounter} from '../../hooks/useStepCounter';
import {circunference} from '../../constants/circunference';
import {connect} from 'react-redux';

const Podometer = props => {
  console.log(props)
  const steps = useStepCounter(props.steps.steps);
  const podometerprogress = useCircleAnimation(
    (steps * circunference) / 10000,
    'rgba(51,0,153,1)',
    'rgba(51,51,255,1)',
    `${steps} / 10000`,
    'trophy',
    30,
  );
  // After 12pm store the data, and substract with steps
  return <Container>{podometerprogress}</Container>;
  // Add loader
};

// eslint-disable-next-line require-jsdoc
function mapStateToProps(state) {
  return {steps: state.steps};
}

export default connect(mapStateToProps)(Podometer);
