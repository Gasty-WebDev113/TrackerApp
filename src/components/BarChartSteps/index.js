import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {
  weekdays,
  chartConfigYellow,
  chartConfigLightBlue,
  chartConfigLightRed,
} from '../../constants/chart';
import {Container, Pager, CharContainer, CharText} from './styles';

const BarChartSteps = () => {
  return (
    <Container>
      <Pager scrollEnabled={true} >
        <CharContainer>
          <BarChart
            data={weekdays}
            height={350}
            width={325}
            chartConfig={chartConfigYellow}
            withInnerLines={false}
            showBarTops={false}
            fromZero={true}
          />
          <CharText>Steeps</CharText>
        </CharContainer>

        <CharContainer>
          <BarChart
            data={weekdays}
            height={350}
            width={325}
            chartConfig={chartConfigLightBlue}
            withInnerLines={false}
            showBarTops={false}
          />
          <CharText>Calories</CharText>
        </CharContainer>
        <CharContainer>
          <BarChart
            data={weekdays}
            height={350}
            width={325}
            chartConfig={chartConfigLightRed}
            withInnerLines={false}
            showBarTops={false}
          />
          <CharText>Distance</CharText>
        </CharContainer>
      </Pager>
    </Container>
  );
};

export default BarChartSteps;
