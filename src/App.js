import React, {Component} from 'react';
import {View , Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/loginForm';

class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBy5iJeSNQgd_lt_8kl8kxKAC8Jr31L7pw",
            authDomain: "authboiler.firebaseapp.com",
            databaseURL: "https://authboiler.firebaseio.com",
            projectId: "authboiler",
            storageBucket: "authboiler.appspot.com",
            messagingSenderId: "758432650926"
          })
    }
    render(){
        return (
            <View>
                <Header headerText="Atuthentication.....!" />
                <LoginForm />
            </View>
        );
    };
};

export default App;