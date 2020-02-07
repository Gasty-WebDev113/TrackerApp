import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import {ActivityList} from '../components/ActivityList';
import {HeaderContain} from '../components/Header';
import {Podometer} from '../components/Podometer';

// eslint-disable-next-line require-jsdoc
export default class Home extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <HeaderContain>
        <ScrollView style={{backgroundColor: 'white'}}>
          <ActivityList />
          <Podometer />
        </ScrollView>
      </HeaderContain>
    );
  }
}
