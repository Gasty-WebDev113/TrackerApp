import styled from 'styled-components/native'
import React from 'react';
import {Animated} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedProgressIcon = Animated.createAnimatedComponent(Icon)

export const Container = styled.View`
    height: 240;
    width: 180;
    background: rgb(0, 236, 255);
    padding-bottom: 100;
    padding-top: 10;
    margin-right: 10;
    margin-left: 10;
    border-radius: 25;
    margin-top: 20
`

export const ProgressIconContainer = styled.View`
    height: 100;
    width: 100;
    position: absolute;
    transform: translateX(250px);
    justify-content: center;
    align-items: center
`


