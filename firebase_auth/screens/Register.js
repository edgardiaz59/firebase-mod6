import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RegisterScreen = ({navigation}) => {
    console.log('register');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 38,
        color: '#000',
        marginBottom: 20
    }
  });