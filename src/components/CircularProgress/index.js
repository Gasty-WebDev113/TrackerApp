import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, Text as NativeText} from 'react-native'
import Svg, { Circle, Text } from 'react-native-svg';
import {Container} from './styles'

export const CircularProgress = () => {
    
    const [progress, setProgress] = useState(10)

    const {width} = Dimensions.get("window") 
    size = width - 275 
    const radius = (size - 50) / 2
    const circunference = radius * 2 * Math.PI

    const ProgressLimiter = () => {
        progress !== 100 ? setProgress(progress + 10) : null
    }

    return(
        <Container>
            <NativeText>{progress} / 100</NativeText>
            <TouchableOpacity onPress={() => ProgressLimiter()}>
                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#6938ff"
                        fill="none"
                        strokeWidth="10"
                    />
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="black"
                        fill="black"
                        strokeWidth="10"
                        strokeDasharray= {` ${circunference} ${circunference} `}
                        strokeDashoffset={circunference * progress / 100}
                    />
                    <Text
                        fill="white"
                        stroke="none"
                        fontSize="15"
                        fontWeight="bold"
                        x="50"
                        y="55"
                        textAnchor="middle"
                        >Reading
                    </Text>
                    
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setProgress(progress - 10)}>
                <NativeText>-</NativeText>
            </TouchableOpacity>
        </Container>
    )}

  