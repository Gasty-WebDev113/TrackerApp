import styled from 'styled-components/native';

export const ProgressIconContainer = styled.View`
  height: 100px;
  width: 100px;
  position: absolute;
  transform: translateX(250px);
  justify-content: center;
  align-items: center;
`;

export const InnerTextContainer = styled.View`
  margin-top: 8px;
`

export const InnerText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 10px;
`;

export const SecondInnerText = styled(InnerText)`
  font-size: 4px;
  color: gray;
`