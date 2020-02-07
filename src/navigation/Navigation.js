import {Navigation} from 'react-native-navigation';

// eslint-disable-next-line require-jsdoc
export function homeScreen() {
  Navigation.setRoot({
    stack: {
      children: [
        {
          component: {
            name: 'HomeScreen',
            passProps: {
              text: 'HomeScreen',
            },
          },
        },
      ],
    },
  });
}
