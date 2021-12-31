import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = props => {
  //const toggleDrawer = () => {
  //  props.navigationProps.toggleDrawer();
  //};
  //settings-outline
  //notifications-outline

  return (
    <View style={styles.mainBody}>
      <View style={styles.section}>
        <TouchableOpacity>
          <Ionicons
            name={'notifications-outline'}
            size={24}
            color={'#FEFBF3'}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
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
