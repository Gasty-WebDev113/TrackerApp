import React from 'react';
import {FlatList} from 'react-native';
import {HabitItem} from '../HabitItem';
import {ListContainer, Container, Title, Number} from './styles';

export const ActivityList = () => {
  // Data Example
  const Data = [
    {
      id: '1',
      title: 'Read',
      icon: 'book',
    },
    {
      id: '2',
      title: 'Meditation',
      icon: 'volume-off', // Add More Icons
    },
    {
      id: '3',
      title: 'Gym',
      icon: 'trophy',
    },
    {
      id: '4',
      title: 'Write',
      icon: 'pencil',
    },
  ];

  return (
    <ListContainer>
      <Title>Your Habits   <Number>{Object.keys(Data).length}</Number></Title>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <Container>
            <HabitItem
              activity={item.icon}
              innertext={item.title}
              cardmode={true}
              weight={1}
              max={10}
            />
          </Container>
        )}
        horizontal={false}
      />
    </ListContainer>
  );
};
