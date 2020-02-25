/* eslint-disable radix */
import React, {useState} from 'react';
import {
  FormContainer,
  SelectList,
  NormalText,
  Input,
  IconsContainer,
  Icons,
  Color,
  IconsSelect,
  AddButton,
} from './styles';
import {Slider} from 'react-native-elements';
import {OptionBadge} from '../../../../components/UIComponents/OptionBadge';
import {
  Habits,
  Times,
  IconList,
  ColorList,
} from '../../../../constants/habitslist';

export const CreateHabitForm = () => {
  const [newHabit, setNewHabit] = useState({
    // Send this Object to the storage
    maxdays: 0,
    habitname: '',
    habittimedesc: '',
    habitidicon: '',
    habitcolor: 'gray',
  });

  return (
    <FormContainer>
      <NormalText>What's a name of the new habit ?</NormalText>
      <Input
        placeholder="Name"
        defaultValue={newHabit.habitname}
        onChange={text => setNewHabit({...newHabit, habitname: text})}
      />
      <SelectList
        data={Habits}
        renderItem={({item}) => (
          <OptionBadge
            innertext={item.title}
            background="#F5F5F5"
            textcolor="gray"
            dashed={true}
            onpressfunction={() =>
              setNewHabit({...newHabit, habitname: item.title})
            }
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <NormalText>What's time of the day you will do it ?</NormalText>
      <Input
        defaultValue={newHabit.habittimedesc}
        onChange={text => setNewHabit({...newHabit, habittimedesc: text})}
      />
      <SelectList
        data={Times}
        renderItem={({item}) => (
          <OptionBadge
            innertext={item.title}
            background="#F5F5F5"
            textcolor="gray"
            dashed={true}
            onpressfunction={() =>
              setNewHabit({...newHabit, habittimedesc: item.title})
            }
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <NormalText>Select the Days</NormalText>
      <Slider
        value={newHabit.maxdays}
        onValueChange={value => setNewHabit({...newHabit, maxdays: value})}
        maximumValue={90}
      />
      <NormalText>
        {newHabit.maxdays.toFixed(0)}{' '}
        {parseInt(newHabit.maxdays.toFixed(0)) === 60 ? (
          <NormalText>🤩Recomended🤩</NormalText>
        ) : null}
      </NormalText>
      <NormalText>Select Icon</NormalText>
      <SelectList
        data={IconList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <IconsContainer
            onPress={() => setNewHabit({...newHabit, habitidicon: item.title})}>
            {newHabit.habitidicon === item.title ? <IconsSelect /> : null}
            <Icons name={item.title} size={50} color={newHabit.habitcolor} />
          </IconsContainer>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <NormalText>Select Color</NormalText>
      <SelectList
        data={ColorList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <IconsContainer
            onPress={() => setNewHabit({...newHabit, habitcolor: item.color})}>
            <Color background={item.color} />
          </IconsContainer>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <AddButton
        title="Create Habit"
        icon={{
          name: 'plus-one',
          size: 15,
          color: 'white',
        }}
      />
    </FormContainer>
  );
};
