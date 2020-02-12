import styled from 'styled-components/native';

export const Container = styled.View`
  height: 500px;
  width: 80%;
  align-self: center;
  padding-bottom: 120px;
  margin-bottom: 20px;
`;

export const InformationContainer = styled.View`
  max-width: 100%;
  flex-wrap: wrap;
  flex-basis: 1;
  align-self: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const CaloriesContainer = styled.View`
  height: 100px;
  margin-right: 30px;
  margin-left: 30px;
  top: -25px;
  align-items: center;
`;

export const CaloriesTitle = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const Calories = styled.Text`
  font-size: 40px;
  text-align: center;
  color: white;
`;
export const KilometersContainer = styled(CaloriesContainer)``;

export const KilometersTitle = styled(CaloriesTitle)``;

export const Kilometers = styled(Calories)``;
