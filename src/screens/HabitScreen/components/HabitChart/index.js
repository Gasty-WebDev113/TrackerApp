import React, {useState} from 'react';
import {Animated, Easing} from 'react-native';
import {
  weekdayshabitprogress,
  chartConfigNeonBlue,
} from '../../../../constants/chart';
import {width} from '../../../../constants/circunference';
import {Container, ChartTouchable, Chart} from './styles';

export const HabitChart = () => {
  const [showCharValues, setShowCharValues] = useState(false);
  const [charWidth, setCharWidth] = useState(new Animated.Value(width + 150));

  const AnimatedChart = Animated.createAnimatedComponent(Chart);

  const ChangeChartView = chartBool => {
    Animated.timing(charWidth, {
      duration: 400,
      toValue: chartBool === false ? width + 20 : width + 150,
      easing: Easing.elastic(3),
    }).start(() => setShowCharValues(!showCharValues));
  };

  return (
    <Container colors={['#090c12', '#10151f']} locations={[0.35, 0.85]}>
      <ChartTouchable onPress={() => ChangeChartView(showCharValues)}>
        <AnimatedChart
          data={weekdayshabitprogress}
          height={360}
          width={charWidth}
          chartConfig={chartConfigNeonBlue}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLabels={showCharValues}
          withHorizontalLabels={showCharValues}
          fromZero={true}
          bezier
        />
      </ChartTouchable>
    </Container>
  );
};
