import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding-top: 10px;
  align-items: center;
  flex-direction: column;
`;

export const CircleContainer = styled.View`
  width: 150px;
  height: 90px;
  align-self: flex-start;
`;

export const HabitTitle = styled.Text`
  color: white;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 15;
  padding-left: 75px;
`;

export const PlusHabit = styled.TouchableOpacity`
  position: absolute;
  height: 100px;
  width: 100px;
  justify-content: center;
  align-self: flex-end;
  border-radius: 50px;
  overflow: hidden;
`;

export const CheckIcon = styled(LottieView)`
  height: 110%;
  width: 110%;
  align-self: center;
`;
