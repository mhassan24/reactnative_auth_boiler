import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

const Header = ({headerText}) => {
    return (
        <View style= {styles.viewStyle}>
            <Text>{headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F8F8F8',
        paddingTop : 15 ,
        marginTop : 25,
        height: 60 ,
        elevation: 3,
        position: 'relative'
    }
});

//Make the component avalible to the other part of the app
export { Header } ;
