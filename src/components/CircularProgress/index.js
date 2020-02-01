import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity, Animated} from 'react-native'
import Svg, { Circle } from 'react-native-svg';
import {Container, ProgressIconContainer, ProgressText, Title, MinusContainer, Minus} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export const CircularProgress = ({activity, title}) => {

    //Circle Proportions
    const {width} = Dimensions.get("window") 
    size = width - 275 
    const radius = (size - 50) / 2
    const circunference = radius * 2 * Math.PI

    const [progressnumber, setProgressNumber] = useState(10) //Number progress value --- change the 10 for the weight activity number
    const [progress, setProgress] = useState(new Animated.Value(progressnumber * circunference  / 100)) //Animation of progress value
    
    const [background, setBackgroud] = useState(new Animated.Value(0)) //Background

    useEffect(() => { //Start animation of change colors of the circular progress
        Animated.loop(
            Animated.sequence([
                Animated.timing(background, {
                    toValue: 300,
                    duration: 1000
                }),
                Animated.timing(background, {
                    toValue: 1,
                    duration: 1000
                }),
            ])
        ).start()
    }, [])
    
    //Animated Components
    const AnimatedProgress = Animated.createAnimatedComponent(Circle)
    const AnimatedProgressIcon = Animated.createAnimatedComponent(Icon)

    const ProgressLimiter = (add) => {

        if(progressnumber !== 100 ){
            Animated.timing(progress, {
                toValue: (progressnumber + (add === true ? 10 : (progressnumber > 0 ? -10 : null ))) * circunference  / 100 ,
                duration: 1000
            }).start()
            setProgressNumber(progressnumber+(add === true ? 10 : (progressnumber > 0 ? -10 : null ) ))//Add progress  
        }else null
    }
    var bakcgroundcolor = background.interpolate({ //Color loop interpolate 
        inputRange: [0, 300],
        outputRange: ['rgba(210,255,82,1)', 'rgba(124, 194, 58, 1)']
    });
    return(
        <Container>
            <ProgressText> {progressnumber} / 100 </ProgressText>
            <Title> {title} </Title>
            <TouchableOpacity onPress={() => ProgressLimiter(true)}>
                <Svg height="100%" width="100%" viewBox="0 0 100 100" >
                    <AnimatedProgress
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke={bakcgroundcolor}
                        fill="none"
                        strokeWidth="10"
                    />
                    <AnimatedProgress
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="black"
                        fill="black"
                        strokeWidth="10"
                        strokeDasharray= {` ${circunference} ${circunference} `}
                        strokeDashoffset={ progress }
                    />
                    <ProgressIconContainer>
                        <AnimatedProgressIcon
                            name={activity} //Add in the future costumizable icon
                            size= {25}
                            style={{ color: bakcgroundcolor }}
                        />
                    </ProgressIconContainer>
                </Svg>            
            </TouchableOpacity>
            <MinusContainer onPress={() => ProgressLimiter(false)}>
                <Minus style={{textAlign:"center", fontSize: 35}}>-</Minus>
            </MinusContainer>
        </Container>
    )}