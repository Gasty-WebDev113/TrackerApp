import React, {useState} from 'react';
import {Text, FlatList} from 'react-native';
import {Container, CreateButton, CloseIcon} from './styles';
import {CircleButton} from '../../../../components/UIComponents/CircleButton';
import {Overlay, Input, Slider, Button} from 'react-native-elements';
import {OptionBadge} from '../../../../components/UIComponents/OptionBadge';

export const CreateHabit = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [sliderDays, setSliderDays] = useState(0);

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
      <Overlay isVisible={showCreateModal}>
        <Text>Hello from Overlay!</Text>
        <CloseIcon
          name="close"
          size={30}
          onPress={() => setShowCreateModal(false)}
        />
        <Text>What's a name of the new habit ?</Text>
        <Input placeholder="New Habit" />
        <OptionBadge
          innertext="Meditation"
          background="#F5F5F5"
          textcolor="gray"
          dashed={true}
        />
        <Text>What's time of the day you will do it ?</Text>
        <Input placeholder="How Long To Make That Habit" />
        <Text>Remind Me</Text>
        <Text>Select the Days</Text>
        <Slider
          value={sliderDays}
          onValueChange={value => setSliderDays(value)}
          maximumValue={90}
        />
        <Text>{sliderDays.toFixed(0)}</Text>
        {sliderDays.toFixed(0) === '60' ? <Text>🤩Recomended🤩</Text> : null}
        <Text>Select Icon</Text>

        <Text>Select Color</Text>
        <Button
          title="Create Habit"
          icon={{
            name: 'plus-one',
            size: 15,
            color: 'white',
          }}
        />
      </Overlay>
    </Container>
  );
};
