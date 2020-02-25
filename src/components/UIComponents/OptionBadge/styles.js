import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 40px;
  min-width: 50px;
  max-width: 150px;
  border-radius: 50px;
  overflow: hidden;
  justify-content: center;
  margin-right: 15px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${props => props.background};
  border: ${props => props.borderwidth} ${props => props.bordercolor}
    ${props => (props.dashed ? 'dashed' : 'solid')};
`;

export const Badge = styled.Text`
  height: 100%;
  width: 100%;
  color: ${props => props.textcolor};
  
  text-align: center;
  line-height: 35px;
`;

export const BadgeText = styled.Text`
  font-size: 25px;
`;
