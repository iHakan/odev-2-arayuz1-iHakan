import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  TextInput
} from 'react-native';

const renk1 = '#ff003f';
const renk2 = '#303463';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

class Arayuz1 extends React.Component {
state = {
  sayfa : 'signIn'
};

  signUpOnPress() {
    this.setState({sayfa : 'signUp'});
    
  }

  signInOnPress() {
    this.setState({sayfa : 'signIn'});
    
  }

  signUp() {
    return <Text>signUp</Text>;
  }

  signIn() {
    return (
      <View style={stil.signInContainer}>
        <View style= {stil.inputContainer}>
        <Text style = {stil.inputCaption}>Kullanıcı Adı</Text>
          <TextInput style= {stil.input}>
              
          </TextInput>
        </View>

        <View style= {stil.inputContainer}>
        <Text style = {stil.inputCaption}>Şifre</Text>
          <TextInput secureTextEntry style= {stil.input}>
              
          </TextInput>
        </View>

        <TouchableOpacity style={stil.passwordForgotButton}>
          <Text style = {[stil.inputCaption, stil.passwordForgot]}>
            Şifremi Unuttum?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[stil.signInButton, stil.button,stil.loginButton]} 
          >
          <Text
            style={stil.signInButtonText}
            >
            Oturum Aç
          </Text>
        </TouchableOpacity>

          <Text
            style={stil.signInButtonText, stil.orText}
            >
            Veya
          </Text>
        
        <View style = {stil.smContainer}>

          <TouchableOpacity style= {stil.smButton}>
            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style= {stil.smButton}>
            <Text style= {stil.smText}>Google</Text>
          </TouchableOpacity>

        </View>
        
      </View>
    );
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
    console.log('render calışıyor!')
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
          {this.state.sayfa === '' && this.butonlar()}
          {this.state.sayfa === 'signUp' && this.signUp()}
          {this.state.sayfa === 'signIn' && this.signIn()}
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
  signInContainer: {
    
    height: H * 0.45,
  },
  inputContainer:{
    alignItems:'center'
  },
  inputCaption :{
    color: renk2,
    fontWeight: 'bold'
  },
  input: {
    width: W*0.8,
    fontWeight: 'bold',
    borderBottomWidth: 1.5,
    borderColor: renk2,
    color : 'white',
    paddingTop: 0
  },
  signInContainer: {
    alignItems:'center',
    height: H * 0.45,
  },
  inputContainer:{
  },
  inputCaption :{
    color: renk2,
    fontWeight: 'bold'
  },
  input: {
    width: W*0.8,
    fontWeight: 'bold',
    borderBottomWidth: 1.5,
    borderColor: renk2,
    color : 'white',
    paddingTop: 0
  },
  passwordForgot: {
    fontSize: 12
    
  },
   passwordForgotButton:{
    
    alignSelf: 'flex-end',
    marginRight: W *0.1,
    marginTop: H*0.02
  },
  loginButton :{
    marginTop: H*0.02,
    width: W*0.82
 },
 orText:{
   fontSize:12,
   color: 'white',
   fontWeight:'bold',
   marginTop: H*0.02
 },
 smContainer: {
  width: W*1,
  marginTop: H*0.02,
  flexDirection: 'row',
  justifyContent: 'space-evenly'
  
},
smButton :{
  width: W*0.25, 
  height: H * 0.045,
  backgroundColor: '#FCD793',  
  borderRadius : 25,
  alignItems : 'center',
  justifyContent:'center'  
},

smText :{
  color: renk2,
  fontSize: 12,
  fontWeight: 'bold',
}
 
});

export default Arayuz1;
