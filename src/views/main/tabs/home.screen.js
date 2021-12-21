import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
