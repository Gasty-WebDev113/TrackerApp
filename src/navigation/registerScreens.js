import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../../configStorage';
import {Navigation} from 'react-native-navigation';

// Header
import {HeaderContain} from '../components/Header';
// Screens
import Home from '../screens/Home';

// eslint-disable-next-line require-jsdoc
function WrappedComponent(Component) {
  // Wrap any component
  return function inject(props) {
    const EnchancedComponent = () => (
      // Wrap the component with the persist gate
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HeaderContain>
            <Component {...props} />
          </HeaderContain>
        </PersistGate>
      </Provider>
    );
    return <EnchancedComponent />;
  };
}

/** Register the screens of react-native-navigation */
export function registerScreens() {
  Navigation.registerComponent('Home', () => WrappedComponent(Home));
  console.log('Screens Registered');
}
