import {DeviceEventEmitter, NativeModules} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import {setsteps} from '../actions/stepactions';
import {setdate} from '../actions/dateactions';
import {useDispatch} from 'react-redux';

const sensor = NativeModules.SensorManager;

/**
 * @param {number} initialsteps the step stored in the redux persist storage
 */
export function useStepCounter(initialsteps, date) {
  const now = new Date();
  const todaydate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDay(),
  ).toUTCString();

  const [stepnumber, setSteps] = useState(
    (date === todaydate) === true ? initialsteps : 0,
  );
  const [number, setNumber] = useState(0);
  const prevStepCount = usePrevious(stepnumber);
  const dispatch = useDispatch();

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

  /** This function restarts the counter at 00hs */

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
    /** Send the state to storage */
    function SaveStep() {
      if (stepnumber !== prevStepCount && stepnumber !== 0) {
        // dispatch to the persist store
        dispatch(setsteps(stepnumber));
        dispatch(setdate(todaydate));
      }
    }
    SaveStep();
  }, [dispatch, initialsteps, prevStepCount, stepnumber, todaydate]);

  return stepnumber;
}
