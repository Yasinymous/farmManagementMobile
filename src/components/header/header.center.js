import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = (props, {navigation}) => {
  //const toggleDrawer = () => {
  //  props.navigationProps.toggleDrawer();
  //};
  //settings-outline
  //notifications-outline
  let firstName = props.user.userData.firstName;
  let username = props.user.userData.username;
  let jsxVal = '';

  if (props.name == 'operation') {
    jsxVal = (
      <>
        <View style={styles.section}>
          <Image
            style={styles.logo}
            source={require('../../assest/image/Untitled.png')}
          />
          <Text style={styles.titleText}>{firstName}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name={'notifications-outline'}
            size={24}
            style={styles.iconColor}
          />
        </TouchableOpacity>
      </>
    );
  } else if (props.name == 'profile') {
    jsxVal = (
      <>
        <View style={styles.section}>
          <Text style={styles.titleUsernameText}>{username}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name={'settings-outline'}
            size={24}
            style={styles.iconColor}
          />
        </TouchableOpacity>
      </>
    );
  }

  return <View style={styles.mainBody}>{jsxVal}</View>;
};
const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  mainBody: {
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FEFBF3',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconColor: {
    color: '#2B2B2B',
  },
  titleText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 15,
  },
  titleUsernameText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
  },
  logo: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
