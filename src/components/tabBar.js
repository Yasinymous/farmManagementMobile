import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainBody}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
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
            <Ionicons
              style={isFocused ? styles.buttonTextFocus : styles.buttonText}
              name={label}
              size={32}
              color={label}
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
    backgroundColor: '#FFF6DF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FF7878',
    flex: 1,
    alignItems: 'center',
  },
  buttonFocus: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFF6DF',
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
  buttonTextFocus: {
    color: '#EF4B4B',
  },
  buttonIcon: {},
});
