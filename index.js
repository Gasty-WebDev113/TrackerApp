/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/navigation/registerScreens'; 
// Yesss, add Wix ReactNativeNavigation
registerScreens(); // Register the Screens

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'TrackerApp',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    _height: 0,
    drawBehind: true,
  },
});
