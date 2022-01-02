import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {SvgXml} from 'react-native-svg';

import HomeIcon from '../assest/icon/home.tab.svg';
import TaskIcon from '../assest/icon/task.tab.svg';
import Profile from '../assest/icon/profile.tab.svg';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainBody}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name; //: ;

        let icon;
        if (route.name == 'Operation') {
          icon = HomeIcon;
        } else if (route.name == 'Task') {
          icon = TaskIcon;
        } else if (route.name == 'Profile') {
          icon = Profile;
        }
        const isFocused = state.index === index;
        // Task
        // Operation
        // Profile
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.name,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // button text yerine button icon eklenecek
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.buttonFocus : styles.button}>
            <SvgXml
              width="24"
              height="24"
              xml={icon}
              fill={isFocused ? '#EF4B4B' : '#2B2B2B'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  mainBody: {
    flexDirection: 'row',
    backgroundColor: '#FEFBF3',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    //backgroundColor: '#FF7878',
    flex: 1,
    alignItems: 'center',
  },
  buttonFocus: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    //backgroundColor: '#FFF6DF',
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#EF4B4B',
  },
  buttonTextFocus: {
    color: '#2B2B2B',
  },
  buttonIcon: {},
});
