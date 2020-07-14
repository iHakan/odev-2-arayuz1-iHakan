import React from 'react';
import {View, Text} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View >
        <Text>Yaptım!</Text>
      </View>
    );
  }
}

class Hakan extends React.Component {
  render() {
    return (
      <View>
        <App />
        <App />
        <Text>Peki Bugün Nasılsın?</Text>
        <Text>Peki Bugün Nasılsın?</Text>
        <App />
      </View>
    );
  }
}

export default Hakan;
