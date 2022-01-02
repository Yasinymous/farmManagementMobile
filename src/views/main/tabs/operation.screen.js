import React from 'react';
import {View, ScrollView, Text, SafeAreaView, StyleSheet} from 'react-native';

import Card from '../../../components/card';

const Operation = () => (
  <SafeAreaView style={styles.mainBody}>
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.cardRow}>
            <Card
              name="Maradona"
              cardColor="#fd6767"
              iconName="cow"
              iconColor="#000"
              title="Total Animals"
              number={24}
            />
            <Card
              name="Maradona"
              cardColor="#146356"
              iconName="milk"
              iconColor="#000"
              title="Milking Cows"
              number={12}
            />
          </View>
          <View style={styles.cardRow}>
            <Card
              name="Maradona"
              cardColor="#F0BB62"
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
      </View>
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>TEST123</Text>
          <View style={styles.tableRow} />
          <View style={styles.tableRow} />
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
