import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
// store
import {useSelector, useDispatch} from 'react-redux';
import {incrementUser, decrementUser} from '../../redux/actions/user.action';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const counter = useSelector(state => state.counter);
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
      navigation.replace(counter === 0 ? 'Auth' : 'DrawerNavigationRoutes');
    }, 1000);
  }, [navigation, counter]);
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

export default SplashScreen;

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
