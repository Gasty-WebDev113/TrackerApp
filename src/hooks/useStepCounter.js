/* eslint-disable require-jsdoc */

import {DeviceEventEmitter, NativeModules} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const sensor = NativeModules.SensorManager;

export function useStepCounter(initialsteps) {
  const [stepnumber, setSteps] = useState(initialsteps);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    sensor.startStepCounter(1000);
    DeviceEventEmitter.addListener('StepCounter', data => {
      // Set the sensor
      setNumber(data.steps);
      if (number !== 0) {
        const finalstepvalue = stepnumber + data.steps - number; // Final value of the operation with steps
        if (finalstepvalue !== 0 && finalstepvalue > stepnumber) {
          setSteps(prevSteps =>
            prevSteps < finalstepvalue ? finalstepvalue : prevSteps,
          );
          // If the prev less than the new, set the new
        }
      }
    });
  }, [number, stepnumber]);

  // Work In Progress
  useEffect(() => {
    async function SaveStep() {
      try {
        await AsyncStorage.setItem('Steps', JSON.stringify(stepnumber));
        console.log('Saving');
      } catch (e) {
        // saving error
      }
    }

    setInterval(SaveStep, 30000);
  });

  return stepnumber;
}
