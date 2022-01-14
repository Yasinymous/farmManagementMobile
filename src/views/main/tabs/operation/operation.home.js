import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Card from '../../../../components/card';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Loader from '../../../../components/loader';

import {animals} from '../../../../networking/urlManager';

import axios from 'axios';

const Operation = props => {
  const [loading, setLoading] = useState(false);
  let List = [];
  let test = 0;
  // const getAllCount = () => {
  //   axios
  //     .post(
  //       animals.getCountAll,
  //       {
  //         farmId: props.user.employeeData.farm.id,
  //       },
  //       {
  //         headers: {
  //           Authorization: 'Beareer ' + props.user.userData.token,
  //         },
  //       },
  //     )
  //     .then(async response => {
  //       List = response.data.data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // setLoading(false);x
  //       alert('Hata');
  //       return;
  //     });
  // };
  // getAllCount();
  const onPress = () => {
    props.navigation.replace('TableScreen');
  };
  return (
    <SafeAreaView style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionContainer}>
            <View style={styles.cardRow}>
              <Card
                navigation={props.navigation}
                name="total"
                cardColor="#fd6767"
                iconName="cow"
                iconColor="#000"
                title="Total Animals"
                number={test}
              />
              <Card
                navigation={props.navigation}
                name="meat"
                cardColor="#146356"
                iconName="meat"
                iconColor="#000"
                title="Milking Cows"
                number={List.animalMeat}
              />
            </View>
            <View style={styles.cardRow}>
              <Card
                navigation={props.navigation}
                name="milk"
                cardColor="#F0BB62"
                iconName="settings"
                iconColor="#000"
                title="Animals"
                number={List.animalMilk}
              />
              <Card
                navigation={props.navigation}
                name="sell"
                cardColor="#fff"
                iconName="settings"
                iconColor="#000"
                title="Animals"
                number={150}
              />
            </View>
          </View>
        </View>
        <View styole={styles.section}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>TEST123</Text>
            <View style={styles.tableRow} />
            <View style={styles.tableRow} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};
export default connect(mapStateToProps)(Operation);

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
