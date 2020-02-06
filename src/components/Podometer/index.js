import React from 'react';
import {Container} from './styles';
import {useCircleAnimation} from '../../hooks/useCircularAnimation';
import {useStepCounter} from '../../hooks/useStepCounter';
import {circunference} from '../../constants/circunference'

export const Podometer = ({initialsteps}) => {
  const steps = useStepCounter(initialsteps);

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
};
