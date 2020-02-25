import styled from 'styled-components/native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FormContainer = styled.ScrollView`
  height: 95%;
  width: 95%;
  align-self: center;
`;

export const SelectList = styled.FlatList`
  margin-top: 5px;
  height: 70px;
  flex-grow: 0;
  margin-bottom: 5px;
`;

export const NormalText = styled.Text`
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Input = styled.TextInput`
  border: 1px #d3d3d3;
  margin-top: 5px;
`;
export const IconsContainer = styled.TouchableOpacity`
  margin-right: 15px;
  margin-left: 15px;
  align-items: center;
`;

export const Icons = styled(Icon)`
  padding-top: 10px;
`;

export const IconsSelect = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 100px;
  background: rgba(206, 206, 206, 0.75);
  align-self: center;
  position: absolute;
  border: 3px rgba(232, 232, 232, 0.5);
`;

export const Color = styled.View`
  height: 60px;
  width: 60px;
  background: ${props => props.background};
  border-radius: 100px;
`;

export const AddButton = styled(Button)`
  position: absolute;
  padding-top: 10px;
  bottom: 0px;
`;
