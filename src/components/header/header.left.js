import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = props => {
  //const toggleDrawer = () => {
  //  props.navigationProps.toggleDrawer();
  //};
  //settings-outline
  //notifications-outline

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
export default Header;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  section: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
