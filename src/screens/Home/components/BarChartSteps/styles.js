import styled from 'styled-components/native';
import ViewPager from '@react-native-community/viewpager';

export const Container = styled.View`
  height: 400px;
  width: 90%;
  align-self: center;
  padding-bottom: 15px;
  margin-top: 40px;
  margin-bottom: 20px;
  background: black;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 30px;
  overflow: hidden;
`;

export const Pager = styled(ViewPager)`
  flex: 1;
`;

export const CharContainer = styled.View`
  height: 100%;
  width: 100%;
`;

export const CharText = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
  bottom: 0px;
  position: absolute;
  align-self: center;
`;
