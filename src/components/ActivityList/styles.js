import styled from 'styled-components/native';

export const ListContainer = styled.View`
  background: #10151f;
`;

export const Container = styled.View`
  width: 100%;
  height: 110px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: white;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 20px;
`;

export const Number = styled(Title)`
  color: gray;
  font-weight: normal;
`;