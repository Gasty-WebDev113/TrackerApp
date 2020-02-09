import React, {useEffect} from 'react';
import {
  WaterContainer,
  InnerWaterContainer,
  WaterPercentaje,
} from './styles/useDrinkWaterStyles';

/**
 * @param {number} liters liters of water that you drink
 */
export function useDrinkWater(liters) {
  return (
    <WaterContainer>
      <InnerWaterContainer>
        <WaterPercentaje> 40% </WaterPercentaje>
      </InnerWaterContainer>
    </WaterContainer>
  );
}
