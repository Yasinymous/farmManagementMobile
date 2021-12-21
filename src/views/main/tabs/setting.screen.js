import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Setting = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Settings
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
