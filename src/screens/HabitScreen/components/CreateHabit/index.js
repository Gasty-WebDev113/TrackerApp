import React from 'react';
import {Container, CreateButton} from './styles';
import {CircleButton} from '../../../../components/UIComponents/CircleButton';

export const CreateHabit = () => {
  return (
    <Container colors={['#000000', '#090c12']}>
      <CreateButton>Productivity</CreateButton>
      <CircleButton
        buttonsize={55}
        buttonalign="flex-end"
        buttonicon="plus"
        buttonbackground="#728cd4"
      />
    </Container>
  );
};
