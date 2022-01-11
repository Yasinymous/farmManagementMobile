import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
// store
import {connect} from 'react-redux';

const SplashScreen = props => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  //const dispatch = useDispatch();
  //dispatch(incrementUser());
  //console.log(counter);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      // state incinde userdata var ise navigationsa aktarsin
      props.navigation.replace(
        props.user.userData.token === '' ? 'MainScreen' : 'AuthScreen',
      );
    }, 5000);
  }, [props]);
  return (
    <View style={styles.mainBody}>
      <Image
        source={require('../../assest/image/Untitled.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30, height: 300}}
      />
      <ActivityIndicator
        animating={animating}
        color="#8E806A"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(SplashScreen);

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF6DF',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
