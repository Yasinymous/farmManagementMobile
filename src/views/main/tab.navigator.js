import React from 'react';

import {StyleSheet, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// header componets
import HeaderRight from '../../components/header/header.right';
import CustomTabBar from '../../components/tabBar';
// Import Screens
import Home from './tabs/home.screen';
import Task from './tabs/task.screen';
import Operation from './tabs/operation.screen';
import Profile from './tabs/profile.screen';
import Setting from './tabs/setting.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Home', //Set Header Title
          headerRight: () => <HeaderRight navigationProps={navigation} />,
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

const LogoTitle = () => {
  return (
    <Image
      style={{
        margin: 10,
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: '#fff',
      }}
      source={require('../../assest/image/Untitled.png')}
    />
  );
};

const taskScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="TaskScreen"
      screenOptions={{
        headerLeft: props => <LogoTitle {...props} />,
        headerRight: () => <HeaderRight navigationProps={navigation} />,
        //headerShown: false,
        headerStyle: {
          backgroundColor: '#393E46', //Set Header color
          height: 75,
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="TaskScreen"
        options={{
          title: '', //Set Header Title
        }}
        component={Task}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const operationScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="OperationScreen"
      screenOptions={{
        headerLeft: props => <LogoTitle {...props} />,
        headerRight: () => <HeaderRight navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#393E46', //Set Header color
          height: 75,
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="OperationScreen"
        component={Operation}
        options={{
          title: '', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerRight: () => <HeaderRight navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          title: '', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Operation"
        options={{drawerLabel: 'Operation Screen'}}
        component={operationScreenStack}
      />
      <Tab.Screen
        name="Task"
        options={{drawerLabel: 'Task Screen'}}
        component={taskScreenStack}
      />
      <Tab.Screen
        name="Profile"
        options={{drawerLabel: 'Profile Screen'}}
        component={profileScreenStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
