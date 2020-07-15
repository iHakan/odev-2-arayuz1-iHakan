import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';

const renk1 = '#ff003f';
const renk2 = '#303463';
let sayfa = '';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

class Arayuz1 extends React.Component {
  signUpOnPress() {
    alert('Test Başarılı!!!');
  }

  signInOnPress() {
    alert('SignIn Test Başarılı!!!');
  }

  signUp() {
    return <Text>signUp</Text>;
  }

  signIn() {
    return <Text>signIn</Text>;
  }

  butonlar() {
    return (
      <View style={stil.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={[stil.signUpButton, stil.button]}
          onPress={() => {
            this.signUpOnPress();
          }}>
          <Text style={stil.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[stil.signInButton, stil.button]} onPress={() => {
            this.signInOnPress();
          }}>
          <Text
            style={stil.signInButtonText}
            >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={stil.bodyContainer}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={renk2}
        />

        <View style={stil.topContainer}>
          <Image
            style={stil.logo}
            source={require('./assets/images/logo1.png')}
          />
        </View>

        <View style={stil.bottomContainer}>
          {sayfa === '' && this.butonlar()}
          {sayfa === 'signUp' && this.signUp()}
          {sayfa === 'ssignIn' && this.signIn()}
        </View>
      </View>
    );
  }
}

const stil = StyleSheet.create({
  bodyContainer: {
    backgroundColor: renk1,
    flex: 1,
  },
  topContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: W * 0.54,
    height: H * 0.28,
  },

  buttonContainer: {
    alignItems: 'center',
    height: H * 0.25,
  },
  button: {
    width: W * 0.7,
    height: H * 0.05,
    marginBottom: H * 0.01,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: W * 0.175,
  },
  signUpButton: {
    backgroundColor: '#fff',
  },
  signInButton: {
    backgroundColor: renk2,
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 16,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Arayuz1;
