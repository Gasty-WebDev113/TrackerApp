import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: black;
  padding-bottom: 100px;
  padding-top: 10px;
  border-radius: 25px;
  margin-top: 20px;
`;

export const CircleContainer = styled.TouchableOpacity`
  width: 80%;
  align-self: center;
`;

export const ProgressText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const MinusContainer = styled.TouchableOpacity`
  border-radius: 100;
  border-width: 5px;
  border-color: gray;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-self: center;
  margin-top: 5px;
`;

export const Minus = styled.Text`
  color: gray;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
`;
