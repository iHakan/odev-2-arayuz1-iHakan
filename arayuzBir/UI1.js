import React from 'react';
import {View as Body, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';

class UI1 extends React.Component {
  render() {
    return (
      <Body style={{width: '100%', height: '100%', backgroundColor: '#ff003f'}}>
          <StatusBar backgroundColor= {'#709fff'} barStyle={'light-content'} />

          
        <TextInput
          textContentType={'emailAddress'}
          placeholder="User Name / Email"
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 50,
            paddingLeft: 20,
            alignSelf: 'center',
            marginTop: 25,
          }}></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 50,
            paddingLeft: 20,
            alignSelf: 'center',
            marginTop: 25,
          }}></TextInput>
        <TouchableOpacity
          activeOpacity = {0.2}
          onPress={() => setTimeout(()=>alert('Test Başarılı!'),1000)}
          style={{
            width: '80%',
            height: '5%',
            backgroundColor: '#fff',
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 25,
            backgroundColor: '#26ed1c', 

          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 5,
              color: '#fff',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </Body>
    );
  }
}

export default UI1;
