import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = props => {
  const {loading, ...attributes} = props;
  return (
    <View style={[styles.mainCard, {backgroundColor: props.cardColor}]}>
      <View style={styles.titleCard}>
        <Text style={styles.titleTextCard}>{props.number}</Text>
        <Text style={styles.titleTextCard}>{props.title}</Text>
      </View>
      <View style={styles.footerCard}>
        <View style={styles.footerShape}>
          <Ionicons
            style={styles.footerIconCard}
            name={props.iconName}
            size={32}
            color={props.iconColor}
          />
        </View>
      </View>
    </View>
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
  },
  footerCard: {
    //width: '55%',
  },
  footerIconCard: {
    //paddingBottom: 10,
    //paddingTop: 10,
    padding: 10,
  },
  footerShape: {
    //elevation: 5,
    //borderTopRightRadius: 120,
    //borderTopLeftRadius: 60,
    //borderBottomRightRadius: 30,
    borderBottomLeftRadius: 10,
    padding: 10,
    //width: '100%',
    backgroundColor: '#fff',
  },
});
