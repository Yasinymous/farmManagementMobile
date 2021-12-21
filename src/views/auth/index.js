import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Screens
import SignIn from './signIn.screen';
//import SignUp from './SignUp.screen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignIn}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
