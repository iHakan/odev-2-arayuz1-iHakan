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

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

class Arayuz1 extends React.Component {
  render() {
    return (
      <View style={stil.bodyContainer}>

        <StatusBar backgroundColor={renk2}/>

        <View style={stil.topContainer}>
          <Image style={stil.logo} source={require('./assets/images/logo1.png')} />
        </View>

        <View style={stil.bottomContainer}>
          <View style={stil.buttonContainer}>
            <TouchableOpacity
              activeOpacity
              style={[stil.signUpButton, stil.button]}>
              <Text style={stil.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity ={0.4}
              style={[stil.signInButton, stil.button]}>
              <Text style={stil.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
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
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  logo: {
    width: W * 0.58,
    height: H * 0.3,
  },
  bottomContainer: {
    borderWidth: 1,
  },
  buttonContainer: {
    alignItems:'center',
    height: H * 0.25,
  },
  button: {
    width: W * 0.7,
    height: H * 0.05,
    marginBottom: H*0.01,
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
