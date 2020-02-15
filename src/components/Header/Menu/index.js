import React from 'react';
import {TouchableHighlight} from 'react-native'
import {Navigation} from 'react-native-navigation';
import {ListItem} from 'react-native-elements';
import {Container} from './styles';

export const HeaderMenu = props => {
  const menulist = [
    // It uses Material UI
    {
      title: 'Home',
      icon: 'av-timer',
    },
    {
      title: 'Habits',
      icon: 'directions-run',
    },
    {
      title: 'Leaderboard',
      icon: 'star',
    },
    {
      title: 'Drink Water',
      icon: 'access-time',
    },
  ];

  return (
    <Container>
      {menulist.map((item, i) => (
        <TouchableHighlight
          onPress={() => {
            Navigation.push('Component1', {
              component: {
                name: `${item.title}`,
              },
            });
          }}>
          <ListItem key={i} title={item.title} leftIcon={{name: item.icon}} />
        </TouchableHighlight>
      ))}
    </Container>
  );
};
