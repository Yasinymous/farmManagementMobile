import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const [lastuserPassword, setUserPassword] = useState('');
  const [newUserPassword, setUserPassword1] = useState('');
  const [reNewUserPassword, setUserPassword2] = useState('');
  const [errortext, setErrortext] = useState('');
  const passwordInputRef1 = createRef();
  const passwordInputRef2 = createRef();
  const passwordInputRef3 = createRef();

  const handleSubmitPress = () => {
    console.log(lastuserPassword, newUserPassword, reNewUserPassword);
    setErrortext('');
    if (!lastuserPassword) {
      alert('Please fill Email');
      return;
    }
    if (!newUserPassword) {
      alert('Please fill Password');
      return;
    }
    if (!reNewUserPassword) {
      alert('Please fill Password');
      return;
    }
  };

  return (
    <SafeAreaView style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.section}>
            <Image
              source={require('../../../assest/image/img_avatar.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileSection}>
              <Text style={styles.profileFullName}>Yasin Murat Akyuz</Text>
              <Text style={styles.profilePermission}>Personel</Text>
            </View>
          </View>
          <Ionicons
            name={'bookmark-outline'}
            size={24}
            style={styles.iconColor}
          />
        </View>
        <KeyboardAvoidingView false>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputLabel}>Sifre</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="Suanki Sifreniz" //12345
              placeholderTextColor="#8E806A"
              keyboardType="default"
              ref={passwordInputRef1}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef1.current && passwordInputRef2.current.focus()
              }
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputLabel}>Yeni Sifre</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword1(UserPassword)}
              placeholder="Yeni Sifre" //12345
              placeholderTextColor="#8E806A"
              keyboardType="default"
              ref={passwordInputRef2}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef2.current && passwordInputRef3.current.focus()
              }
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputLabel}>Yeni Sifre Tekrar</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword2(UserPassword)}
              placeholder="Tekrar Yeni Sifre" //12345
              placeholderTextColor="#8E806A"
              keyboardType="default"
              ref={passwordInputRef3}
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
            <Text style={{fontSize: 24, marginTop: 10}}>Sign In</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.accountSection}>
          <Text style={styles.sectionTitle}>Hesap</Text>
          <View style={styles.authSection}>
            <Text style={styles.authSectionText}>Hesap Degistir</Text>
            <Text style={styles.authSectionText}>Cikis Yap</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    flexDirection: 'column',
    backgroundColor: '#F0ECE3',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'column',
    paddingLeft: 10,
    //justifyContent: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileFullName: {
    fontSize: 24,
    color: '#000',
    //textAlign: 'center',
  },
  profilePermission: {
    fontSize: 20,
    color: '#000',
    //textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#000',
  },
  accountSection: {
    paddingTop: 10,
    flexDirection: 'column',
  },
  authSection: {
    flexDirection: 'column',
  },
  authSectionText: {
    fontSize: 20,
    color: '#EF4B4B',
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 18,
    paddingLeft: 2,
    fontWeight: '500',
    color: '#000',
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
  SectionStyle: {
    marginTop: 10,
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
