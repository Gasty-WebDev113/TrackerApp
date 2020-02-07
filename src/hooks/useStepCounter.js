import {DeviceEventEmitter, NativeModules} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const sensor = NativeModules.SensorManager;

/**
 * @param {number} initialsteps the step stored in the async storage
 */
export function useStepCounter(initialsteps) {
  const [stepnumber, setSteps] = useState(initialsteps);
  const [number, setNumber] = useState(0);
  const prevStepCount = usePrevious(stepnumber);

  /**
   * @param {number} value the prevState to be used to compare
   */
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

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
  }, [number, prevStepCount, stepnumber]);

  // Work In Progress
  useEffect(() => {
    /** Send the state to async storage */
    async function SaveStep() {
      if (stepnumber !== prevStepCount && stepnumber !== 0) {
        // Avoid overload of setItems
        try {
          await AsyncStorage.setItem('steps', JSON.stringify(stepnumber));
          console.log('Saving');
        } catch (e) {
          // saving error
        }
      }
    }
    SaveStep();
    console.log(stepnumber !== prevStepCount);
  }, [prevStepCount, stepnumber]);

  return stepnumber;
}
