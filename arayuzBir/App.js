import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const renk1 = '#ff003f';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

class Arayuz1 extends React.Component {
  render() {
    return (
      <View style={stil.bodyContainer}>
        <View style={stil.topContainer}></View>

        <View style={stil.bottomContainer}>
          <View style={stil.buttonContainer}>
            <TouchableOpacity style={stil.signUpButton}>
              <Text style={stil.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stil.signInButton}>
              <Text style={stil.buttonText}>Sign In</Text>
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
  },
  bottomContainer: {
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  signUpButton: {
    width: W * 0.35,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303463',
    borderRadius: W * 0.175,
  },
  signInButton: {
    width: W * 0.35,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303463',
    borderRadius: W * 0.175,
  },
  buttonText:{
    color:'white'
  }
});

export default Arayuz1;
