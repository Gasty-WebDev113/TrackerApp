import styled from 'styled-components/native';

export const WaterContainer = styled.View`
  height: 300px;
  width: 300px;
  border-radius: 400px;
  align-self: center;
  justify-content: center;
  text-align: center;
  border: 1px white;
`;

export const InnerWaterContainer = styled(WaterContainer)`
  height: 280px;
  width: 280px;
`;

export const WaterPercentaje = styled.Text`
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  color: white;
  align-self: center;
`;
