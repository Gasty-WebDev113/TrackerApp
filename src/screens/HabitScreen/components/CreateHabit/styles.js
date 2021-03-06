import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Overlay} from 'react-native-elements';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 30px;
`;

export const OverlayContainer = styled(Overlay)`
  flex-direction: column;
`;

export const CreateButton = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: bold;
  margin-left: 15px;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  align-self: flex-end;
  margin-top: 10px;
  padding-right: 10px;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
`;
