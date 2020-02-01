
import {View, Text, DeviceEventEmitter, NativeModules } from 'react-native'
import React, { useState } from 'react'

const sensor = NativeModules.SensorManager

export const Podometer = () => {

    const [stepnumber, setSteps] = useState(0)

    sensor.startStepCounter(1000);
    
    DeviceEventEmitter.addListener('StepCounter', (data)=>{
        setSteps(data.steps)
    })

    return(
        <View>
            <Text>{stepnumber} / 10000</Text>
        </View>
    )
  }