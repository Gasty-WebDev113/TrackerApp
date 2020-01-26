/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import {name as appName} from './app.json';

//Yesss, add Wix ReactNativeNavigation

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
     Navigation.setRoot({
        root: {
         component: {
           name: "navigation.playground.WelcomeScreen"
         }
        }
      });
});