import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {SvgXml} from 'react-native-svg';

import CowIcon from '../assest/icon/cow.card.svg';

const Card = props => {
  const {loading, ...attributes} = props;

  const onPress = () => {};

  const onLongPress = () => {};
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.7}
      style={[styles.mainCard, {backgroundColor: props.cardColor}]}
      // accessibilityStates={isFocused ? ['selected'] : []}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.titleCard}>
        <Text style={styles.titleTextCard}>{props.number}</Text>
        <Text style={styles.titleTextCard}>{props.title}</Text>
      </View>
      <View style={styles.footerCard}>
        <View style={styles.footerShape}>
          <SvgXml width="48" height="48" xml={CowIcon} fill={props.cardColor} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainCard: {
    //position: 'relative',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '45%',
    height: '100%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    //backgroundColor: '#fd6767',
  },
  titleCard: {},
  titleTextCard: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  footerCard: {
    marginTop: 10,
  },
  footerShape: {
    alignSelf: 'flex-start',
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
});
