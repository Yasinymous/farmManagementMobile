import React from 'react';

import {StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// header componets
import Header from '../../components/header';
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
          headerLeft: () => <Header navigationProps={navigation} />,
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

const taskScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="TaskScreen"
      screenOptions={{
        headerLeft: () => <Header navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="TaskScreen"
        component={Task}
        options={{
          title: 'Task', //Set Header Title
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
        headerLeft: () => <Header navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
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
          title: 'Operation', //Set Header Title
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
        headerLeft: () => <Header navigationProps={navigation} />,
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
          title: 'Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerLeft: () => <Header navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={Setting}
        options={{
          title: 'Settings', //Set Header Title
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
        name="Task"
        options={{drawerLabel: 'Task Screen'}}
        component={taskScreenStack}
      />
      <Tab.Screen
        name="Operation"
        options={{drawerLabel: 'Operation Screen'}}
        component={operationScreenStack}
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
