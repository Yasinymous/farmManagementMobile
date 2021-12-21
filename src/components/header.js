import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = props => {
  //const toggleDrawer = () => {
  //  props.navigationProps.toggleDrawer();
  //};

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Ionicons
          name={'settings'}
          size={24}
          color={'#FFF6DF'}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF6DF',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
