import React from 'react';
import {Text, View} from 'react-native'
import { ListItem } from 'react-native-elements'
import {Container} from './styles'

export const HeaderMenu = () => {

  const menulist = [
    //It uses Material UI
    {
      title: 'Profile',
      icon: 'av-timer'
    },
    {
      title: 'Activity',
      icon: 'directions-run'
    },
    {
      title: 'Leaderboard',
      icon: 'star'
    },
    {
      title: 'Pomodoro',
      icon: 'access-time',
    },
  ]

  return(
    <Container>
      {
        menulist.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
            containerStyle={{backgroundColor:"none"}}
          />
        ))
      }    
    </Container>
  )
}