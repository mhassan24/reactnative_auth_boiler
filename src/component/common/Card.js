import React from 'react';
import {View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children} 
        </View>
    );
};

const styles = {
    containerStyle : {
        borderWidth : 1,
        borderRadius : 2,
        borderColor : '#ddd',
        borderBotton : 0,
        elevation : 3,
        position: 'relative',
        marginLeft : 5,
        marginRigt : 5,
        marginTop : 10,

    }
};

//Make the component avalible to the other part of the app

export { Card };