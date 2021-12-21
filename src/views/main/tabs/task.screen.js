import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Task = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Task
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Task;
