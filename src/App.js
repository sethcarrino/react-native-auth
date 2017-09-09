import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBMPVtD-cBOMQWfEqikKSyHniWCF3etFRo',
    authDomain: 'auth-d6fa2.firebaseapp.com',
    databaseURL: 'https://auth-d6fa2.firebaseio.com',
    projectId: 'auth-d6fa2',
    storageBucket: 'auth-d6fa2.appspot.com',
    messagingSenderId: '391695804342'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
