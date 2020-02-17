/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {ActivityList} from './components/ActivityList';
import {HabitChart} from './components/HabitChart';
import {CreateHabit} from './components/CreateHabit/index';
import {ScrollView} from 'react-native';

export default class HabitScreen extends Component {
  render() {
    return (
      <ScrollView>
        <CreateHabit />
        <HabitChart />
        <ActivityList />
      </ScrollView>
    );
  }
}
