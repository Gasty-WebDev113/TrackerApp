import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  position: absolute;
  height: ${props => props.size};
  width: ${props => props.size};
  align-self: ${props => props.align};
`;

export const Touchable = styled.TouchableOpacity``;

export const Button = styled.View`
  height: 100%;
  width: 100%;
  background: ${props => props.background};
  border-radius: 100;
  border: ${props => props.bordersize} ${props => props.bordercolor};
  justify-content: center;
`;

export const ButtonIcon = styled(Icon)`
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: ${props => props.textsize};
  font-weight: ${props => props.textweight};
`;
