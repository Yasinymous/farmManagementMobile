import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icons from 'react-native-vector-icons/SimpleLineIcons';

import {SvgXml} from 'react-native-svg';

import CowIcon from '../assest/icon/cow.card.svg';

const Table = props => {
  const onPress = () => {
    props.navigation.replace('TableScreen');
  };

  const onLongPress = () => {};
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={styles.tableCard}>
        <View style={styles.tableInfo}>
          <Text style={styles.tableInfoText}>15 Jul 2021</Text>
          <Text style={styles.tableInfoText}>BLOCK NO</Text>
        </View>
        <View style={styles.tableHead}>
          <View style={styles.tableHeadSection}>
            <SvgXml width="24" height="24" xml={CowIcon} fill={'#000'} />
            <Text style={styles.tableHeadText}>QH29</Text>
          </View>
          <View style={styles.tableHeadSection}>
            <View style={styles.statusView}>
              <Text style={styles.statusText}>Status</Text>
            </View>
            <TouchableOpacity style={styles.tableHeadOperationButton}>
              <Icons name="arrow-right" color={'#000'} size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tableBody}>
          <View style={styles.content}>
            <Text style={styles.contentText}>Name</Text>
            <Text style={styles.contentText}>Test</Text>
          </View>
          <View style={styles.contentColor}>
            <Text style={styles.contentText}>Name</Text>
            <Text style={styles.contentText}>Test</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>Name</Text>
            <Text style={styles.contentText}>Test</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableCard: {
    marginTop: 10,
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  tableInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 0.5,
  },
  tableInfoText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
  },
  tableHead: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableHeadSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeadText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  tableHeadOperationButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  statusView: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#A6CF98',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  statusText: {
    fontSize: 18,
    color: '#064635',
    fontWeight: '600',
  },
  tableBody: {
    flex: 1,
    marginTop: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F1E9E5',
    borderRadius: 10,
    marginTop: 10,
  },
  contentColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
  contentText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
  btn: {
    width: 60,
    height: 20,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnText: {textAlign: 'center', color: '#fff'},
});
