import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Loader from '../../components/loader';

import {auth} from '../../networking/urlManager';

import axios from 'axios';

import {signInUser} from '../../redux/actions/user.action';

const SignIn = props => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
  // signInUser
  let data = {};
  const handleSubmitPress = async () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Username');
      //navigation.replace('MainScreen');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      //navigation.replace('MainScreen');
      return;
    }
    setLoading(true);
    let dataToSend = {username: userEmail, password: userPassword};
    axios
      .post(auth.signIn, dataToSend)
      .then(response => {
        props.signInUser(JSON.stringify(response.data.data));
        setLoading(false);
        props.navigation.replace('MainScreen');
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        alert('Yanlis Sifre');
        return;
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView false>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assest/image/Untitled.png')}
                style={{
                  width: '75%',
                  height: 200,
                  resizeMode: 'contain',
                  margin: 15,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Username" //dummy@abc.com
                placeholderTextColor="#8E806A"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8E806A"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.SectionStyle}>
              <Text style={styles.registerTextStyle}>Not a member?</Text>
              <Text
                style={styles.registerTextButton}
                onPress={() => props.navigation.navigate('RegisterScreen')}>
                Register now
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const {user} = state;
  return {user};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signInUser,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF6DF',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  // button
  buttonStyle: {
    backgroundColor: '#EF4B4B',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
    padding: 5,
    textAlignVertical: 'center',
  },

  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8E806A',
    backgroundColor: '#FEFBF3',
  },
  registerTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 5,
    textAlignVertical: 'center',
  },
  registerTextButton: {
    color: '#EF4B4B',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 5,
    textAlignVertical: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
