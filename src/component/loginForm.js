import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import { Button , Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
    state = {
        email  :'',
        password : '',
        error : '',
        loading : false
        
    }

    onButtonPress(){
        const {email , password } = this.state ;

        this.setState({ error : '' , loading : true})

        firebase.auth().signInWithEmailAndPassword(email , password)
         .then(this.onLoginSuccess.bind(this))
         .catch( ()=>{
            firebase.auth().createUserWithEmailAndPassword(email , password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />;
        }

        return (
            <Button 
                onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    onLoginFail(){
        this.setState({
            error : 'Authentication Fail' ,
            loading : false
        })
    }

    onLoginSuccess(){
        this.setState({
            email : '',
            password : '',
            loading : false,
            error : ''
        })
    };

     
    render(){
        return(
            <Card>
                {/* Email Input Field */}
                <CardSection>
                    <Input 
                    label = "Email :"
                    placeholder = "user@gmail.com"
                    value={this.state.email} 
                    onChangeText={(email)=>{ this.setState({ email })}
                    } />
                </CardSection>

                    {/*Password Input Field */}
                <CardSection>
                    <Input 
                    secureTextEntry
                    label = "Password :"
                    placeholder = "password"
                    value={this.state.password} 
                    onChangeText={(password)=>{ this.setState({ password })}
                    } />
                </CardSection>

                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                {/* Button for login */}
                <CardSection>
                    {this.renderButton()}
                    {/* <Button 
                        onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button> */}
                </CardSection>
            </Card> 
        );
    };
};

const styles = {
    errorTextStyle : {
        fontSize :20,
        alignSelf : 'center',
        color : 'red'
    }
}


export default LoginForm;