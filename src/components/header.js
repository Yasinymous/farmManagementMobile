import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Header = props => {
  //const toggleDrawer = () => {
  //  props.navigationProps.toggleDrawer();
  //};

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
