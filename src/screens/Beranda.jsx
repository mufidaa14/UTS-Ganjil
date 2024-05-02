import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from '../App';
const Stack = createNativeStackNavigator();

const Beranda = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={App} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default Beranda

const styles = StyleSheet.create({})