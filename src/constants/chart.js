export const weekdays = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2000, 4500, 2800, 8000, 10000, 4300, 2000],
    },
  ],
};

export const weekdayshabitprogress = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [25, 75, 50, 75, 100, 50, 25],
    },
  ],
};

export const chartConfigYellow = {
  color: (opacity = 1) => `rgba(256, 256, 256, ${opacity})`,
  barPercentage: 0.5,
  fillShadowGradient: 'rgba(0, 230, 64, 1)',
  fillShadowGradientOpacity: 1,
  barRadius: 10,
};

export const chartConfigLightBlue = {
  color: (opacity = 1) => 'rgba(256, 256, 256, 1)',
  barPercentage: 0.5,
  fillShadowGradient: 'rgba(0,0,255,0.2)',
  fillShadowGradientOpacity: 1,
  barRadius: 10,
};

export const chartConfigLightRed = {
  color: (opacity = 1) => 'rgba(256, 256, 256, 1)',
  barPercentage: 0.5,
  fillShadowGradient: 'rgba(204,102,51,0.2)',
  fillShadowGradientOpacity: 1,
  barRadius: 10,
};

export const chartConfigNeonBlue = {
  color: (opacity = 1) => 'rgba(63, 27, 241,1)',
  barPercentage: 1,
  fillShadowGradient: 'rgba(63, 27, 241,1)',
  fillShadowGradientOpacity: 0.15,
  propsForLabels: {
    fill: 'white',
    fontWeight: 'bold',
  },
  strokeWidth: 3.3,
  barRadius: 10,
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
};
