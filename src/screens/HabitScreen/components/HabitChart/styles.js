import styled from 'styled-components/native';
import {LineChart} from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)``;

export const Chart = styled(LineChart)`
  align-self: center;
  margin-top: 10px;
`;

export const ChartTouchable = styled.TouchableOpacity``;
