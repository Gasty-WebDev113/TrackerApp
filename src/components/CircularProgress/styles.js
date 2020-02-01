import styled from 'styled-components/native'
import React from 'react';
import {Animated} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedProgressIcon = Animated.createAnimatedComponent(Icon)

export const Container = styled.View`
    height: 250px;
    width: 180px;
    background: white;
    padding-bottom: 110px;
    padding-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 25px;
    margin-top: 20px;
`

export const ProgressIconContainer = styled.View`
    height: 100px;
    width: 100px;
    position: absolute;
    transform: translateX(250px);
    justify-content: center;
    align-items: center
`;

export const ProgressText = styled.Text`
    font-weight: bold;
    text-align: center;

`
export const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
`

export const MinusContainer = styled.TouchableOpacity`
    border-radius: 100;
    border-width: 5px;
    border-color: gray;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-self: center;
    margin-top: 5px;
`

export const Minus = styled.Text`
    color: gray;
    font-size: 35px;
    line-height: 40px;
`