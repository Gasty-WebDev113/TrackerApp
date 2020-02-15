import React from 'react';

import {
  weekdayshabitprogress,
  chartConfigNeonBlue,
} from '../../constants/chart';
import {width} from '../../constants/circunference'
import {Container, Chart} from './styles';

export const HabitChart = () => {
  return (
    <Container colors={['#090c12', '#10151f']} locations={[0.35, 0.85]}>
      <Chart
        data={weekdayshabitprogress}
        height={360}
        width={width + 10}
        chartConfig={chartConfigNeonBlue}
        withInnerLines={false}
        withOuterLines={false}
        fromZero={true}
        bezier
      />
    </Container>
  );
};
