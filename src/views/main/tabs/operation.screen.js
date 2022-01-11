import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Card from '../../../components/card';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Loader from '../../../components/loader';

import {animals} from '../../../networking/urlManager';

import axios from 'axios';

import Home from './operation/operation.home';
import Table from './operation/operation.table';

import HeaderCenter from '../../../components/header/header.center';

const Operation = props => {
  return (
    <Stack.Navigator
      initialRouteName="HomeOperationScreen"
      screenOptions={{
        header: () => (
          <HeaderCenter name="operation" navigation={props.navigation} />
        ),
      }}>
      {/* Auth Navigator: Include Login and Signup */}
      <Stack.Screen
        name="HomeOperationScreen"
        component={Home}
        options={{headerShown: false}}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="TableScreen"
        component={Table}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};
export default connect(mapStateToProps)(Operation);

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    flexDirection: 'column',
    backgroundColor: '#F0ECE3',
  },
  cardRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    //backgroundColor: '#000',
  },
  tableRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    //backgroundColor: '#000',
  },
  section: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginTop: 10,
  },
  sectionContainer: {
    padding: 10,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
  },
});
