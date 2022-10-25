import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{ title: 'Home' }}
                />
                <Stack.Screen name="Login"
                              component={LoginScreen}
                              options={{ title: 'Login' }}
                />
                <Stack.Screen name="Register"
                              component={RegisterScreen}
                              options={{ title: 'Register' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });