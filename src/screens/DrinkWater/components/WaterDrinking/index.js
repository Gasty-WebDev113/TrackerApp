import React from 'react';
import {Container} from './styles';
import {useDrinkWater} from '../../../../hooks/useDrinkWater';

const WaterDrinking = props => {
  const water = useDrinkWater(0);

  return <Container>{water}</Container>;
};

export default WaterDrinking;
