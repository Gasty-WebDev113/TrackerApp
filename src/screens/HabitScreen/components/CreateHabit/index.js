import React, {useState} from 'react';
import {
  Container,
  OverlayContainer,
  CreateButton,
  CloseIcon,
  TitleText,
} from './styles';
import {CircleButton} from '../../../../components/UIComponents/CircleButton';
import {CreateHabitForm} from '../CreateHabitForm/index';

export const CreateHabit = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <Container colors={['#000000', '#090c12']}>
      <CreateButton>Productivity</CreateButton>
      <CircleButton
        buttonsize={55}
        buttonalign="flex-end"
        buttonicon="plus"
        buttonbackground="#728cd4"
        buttonfunction={() => setShowCreateModal(true)}
      />
      <OverlayContainer isVisible={showCreateModal}>
        <TitleText>Create New Habit</TitleText>
        <CloseIcon
          name="close"
          size={30}
          onPress={() => setShowCreateModal(false)}
        />
        <CreateHabitForm />
      </OverlayContainer>
    </Container>
  );
};
