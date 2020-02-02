import React from 'react';
import {FlatList} from 'react-native';
import {CircularProgress} from '../CircularProgress';
import {Container} from './styles';

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
    <FlatList
      data={Data}
      renderItem={({item}) => (
        <Container>
          <CircularProgress
            activity={item.icon}
            innertext={item.title}
            cardmode={true}
            weight={1}
            max={60}
          />
        </Container>
      )}
      horizontal={true}
    />
  );
};
