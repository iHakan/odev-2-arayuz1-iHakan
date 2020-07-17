import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  TextInput,
  UIManager,
  LayoutAnimation,
  Platform,
  Keyboard,
} from 'react-native';

const renk1 = '#ff003f';
const renk2 = '#303463';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

//Animasyon kısmı için;
const androidPhone = Platform.OS === 'android';

if (androidPhone) UIManager.setLayoutAnimationEnabledExperimental(true);

class Arayuz1 extends React.Component {
  state = {
    sayfa: '', 
    klavye: false,
  };

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', () =>
      this.setState({klavye: true}),
    );
    Keyboard.addListener('keyboardDidHide', () =>
      this.setState({klavye: false}),
    );
  }

  signUpOnPress() {
    this.setState({sayfa: 'signUp'});
  }

  signInOnPress() {
    this.setState({sayfa: 'signIn'});
  }

  signUp() {
    return <Text>signUp</Text>;
  }

  signIn() {
    return (
      <View style={[stil.signInContainer,
        {
          height : this.state.sayfa !== 'signIn' ? H*0: undefined,
          marginBottom: this.state.sayfa !== '' ? H*0.08 :undefined,
          
        }
      ]}>
        <View style= {stil.inputContainer}>
          <Text style={stil.inputCaption}>Kullanıcı Adı</Text>
          <TextInput style={stil.input}></TextInput>
        </View>

        <View style={stil.inputContainer}>
          <Text style={stil.inputCaption}>Şifre</Text>
          <TextInput secureTextEntry style={stil.input}></TextInput>
        </View>

        <TouchableOpacity style={stil.passwordForgotButton}>
          <Text style={[stil.inputCaption, stil.passwordForgot]}>
            Şifremi Unuttum?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[stil.signInButton, stil.button, stil.loginButton]}>
          <Text style={stil.signInButtonText}>Oturum Aç</Text>
        </TouchableOpacity>


     {   
        !this.state.klavye && 
        <>
          <Text style={(stil.signInButtonText, stil.orText)}>Veya</Text>

          
          <View style={stil.smContainer}>
            <TouchableOpacity style={stil.smButton}>
              <Text>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stil.smButton}>
              <Text style={stil.smText}>Google</Text>
            </TouchableOpacity>
          </View>
          </>
      }
      </View>
    );
  }

  butonlar() {
    return (
      <View style={[stil.buttonContainer,
      {
        height: this.state.sayfa  !== '' ? H* 0 : undefined,
        marginBottom: this.state.sayfa !== 'sigIn' ? H*0.1 : undefined,
      }
      ]}>
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
          style={[stil.signInButton, stil.button]}
          onPress={() => {
            this.signInOnPress();
          }}>
          <Text style={stil.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    console.log('render calışıyor!');
    return (
      <View style={stil.bodyContainer}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={renk2}
        />

        <View style={stil.topContainer}>
          <TouchableOpacity onPress ={() => this.setState({sayfa:''})}
            style={[
              stil.imageContainer,
              {
                marginTop: this.state.klavye ? H * 0.2 : null,
              },
            ]}>
            <Image
              style={{
                width: this.state.klavye ? W * 0.2 : W * 0.55,
                height: this.state.klavye ? W * 0.2 : W * 0.55,
                alignSelf: this.state.klavye ? 'flex-start' : null,
              }}
              source={require('./assets/images/logo1.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={stil.bottomContainer}>
          {/* {this.state.sayfa === '' && this.butonlar()}
          {this.state.sayfa === 'signUp' && this.signUp()}
          {this.state.sayfa === 'signIn' && this.signIn()} */}
          {/* Daha avantajlı bir yolu var o da aşağıdaki gibidir; */}
          {this.butonlar()}
          {this.signIn()}
          {/* {this.signUp()} şuan çalışmadığımız için yorum haline getirdik */}
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
    marginTop: H*0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    borderRadius: 150,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation :10,
  },

  buttonContainer: {
    alignItems: 'center',
    height: H * 0.25,
    overflow:'hidden',
    
    
  },
  button: {
    width: W * 0.7,
    height: H * 0.05,
    marginTop: H * 0.01,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: W * 0.175,
    shadowColor : 'black',
    shadowOpacity: 0.8,
    shadowRadius:2,
    shadowOffset : {width: 0, height:0},
    elevation: 5,
  },
  signUpButton: {
    backgroundColor: '#fff',
    
  },
  signInButton: {
    backgroundColor: renk2,
    marginBottom : H*0.015,
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
    overflow:"hidden",
    alignItems: 'center',
    
  },
  inputContainer: {
    paddingTop: H*0.025,
  },
  inputCaption: {
    color: renk2,
    fontWeight: 'bold',
  },
  input: {
    width: W * 0.8,
    fontWeight: 'bold',
    borderBottomWidth: 1.5,
    borderColor: renk2,
    color: 'white',
    paddingTop: 0,
  },
  passwordForgot: {
    fontSize: 12,
  },
  passwordForgotButton: {
    alignSelf: 'flex-end',
    marginRight: W * 0.1,
    marginTop: H * 0.02,
  },
  loginButton: {
    marginTop: H * 0.02,
    width: W * 0.82,
  },
  orText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginTop: H * 0.02,
  },
  smContainer: {
    width: W * 1,
    marginTop: H * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom :10
  },
  smButton: {
    width: W * 0.25,
    height: H * 0.045,
    backgroundColor: '#FCD793',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor : 'black',
    shadowOpacity: 0.8,
    shadowRadius:2,
    shadowOffset : {width: 0, height:0},
    elevation: 5
  },

  smText: {
    color: renk2,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Arayuz1;
