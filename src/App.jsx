import { Button, StyleSheet, Text, View,} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Saya from './screens/Saya';
import Tentang from './screens/Tentang';
import Daftar from './screens/Daftar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MenuTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'orange'}}>
      <Tab.Screen 
      name="Beranda" 
      component={Beranda}
      options={{
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
  />
    <Tab.Screen 
      name="Daftar" 
      component={Daftar}
      options={{
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="playlist-edit" color={color} size={size} />
        ),
      }}
  />
    <Tab.Screen 
      name="Saya" 
      component={Saya}
      options={{
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

/**pindah posisii */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={MenuTab} options={{headerShown: false}} />
        <Stack.Screen name='Tentang' component={Tentang} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});