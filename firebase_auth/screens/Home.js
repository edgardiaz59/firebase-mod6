import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import auth from '../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const HomeScreen = ({navigation}) => {
    console.log('home');

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            //Logged in - stay here
        } else {
            // not logged in
            navigation.navigate('Login');
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Button title="sign in" style={styles.button} onPress={() => logout(email, password, navigation)} />
        </View>
    )
}

export default HomeScreen;

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