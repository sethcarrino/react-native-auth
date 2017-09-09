import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBMPVtD-cBOMQWfEqikKSyHniWCF3etFRo',
    authDomain: 'auth-d6fa2.firebaseapp.com',
    databaseURL: 'https://auth-d6fa2.firebaseio.com',
    projectId: 'auth-d6fa2',
    storageBucket: 'auth-d6fa2.appspot.com',
    messagingSenderId: '391695804342'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
