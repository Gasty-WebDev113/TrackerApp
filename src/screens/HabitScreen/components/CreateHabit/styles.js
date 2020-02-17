import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 30px;
`;

export const CreateButton = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: bold;
  margin-left: 15px;
`;
