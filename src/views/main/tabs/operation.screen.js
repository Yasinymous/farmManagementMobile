import React from 'react';
import {View, ScrollView, Text, SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Card from '../../../components/card';

const Operation = () => (
  <SafeAreaView style={styles.mainBody}>
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.section}>
        <View style={styles.mainRow}>
          <Card
            name="Maradona"
            cardColor="#fd6767"
            iconName="settings"
            iconColor="#000"
            title="Animals"
            number={150}
          />
          <Card
            name="Maradona"
            cardColor="#fd6767"
            iconName="settings"
            iconColor="#000"
            title="Animals"
            number={150}
          />
        </View>
        <View style={styles.mainRow}>
          <Card
            name="Maradona"
            cardColor="#fd6767"
            iconName="settings"
            iconColor="#000"
            title="Animals"
            number={150}
          />
          <Card
            name="Maradona"
            cardColor="#fff"
            iconName="settings"
            iconColor="#000"
            title="Animals"
            number={150}
          />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionSecond}>
          <Text style={styles.sectionTitle}>Test</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Operation;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#FFF6DF',
  },
  mainRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: '100%',
    width: '100%',
    //backgroundColor: '#000',
  },
  section: {
    flex: 1,
    height: '100%',
    width: '100%',
    //padding: 10,
  },
  sectionSecond: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#000',
  },
});
