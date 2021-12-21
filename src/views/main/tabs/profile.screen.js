import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Profile
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
