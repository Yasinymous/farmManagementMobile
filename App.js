import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Redux import and settings
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

// Screens
//Splash Screen -> first auth controller
import SplashScreen from './src/views/general/splash.screen';
//Auth Screen -> signIn and signUp
import AuthNavigator from './src/views/auth';
//Main Screen -> Home, Profile, Task, Settings
import TabNavigator from './src/views/main/tab.navigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="AuthScreen"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="MainScreen"
            component={TabNavigator}
            // Hiding header for Navigation Drawer
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
