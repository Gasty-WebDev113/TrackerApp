import {Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');
export const size = width - 275;
export const radius = (size - 50) / 2;
export const circunference = radius * 2 * Math.PI;
