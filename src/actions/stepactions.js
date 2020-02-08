export const setsteps = steps => {
  console.log(steps);
  return {
    type: 'SET_INITIAL_STEPS',
    steps,
  };
};

