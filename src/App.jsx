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
import MalinKundang from './screens/MalinKundang';
import DanauToba from './screens/DanauToba';
import KancildanBuaya from './screens/Kancil_dan_Buaya';
import RoroJonggrang from './screens/Roro_Jonggrang';
import Sangkuriang from './screens/Sangkuriang';
import TimunMas from './screens/Timun_Mas';
import LutungKasarung from './screens/Lutung_Kasarung';
import Kancil_dan_Buaya from './screens/Kancil_dan_Buaya';
import Timun_Mas from './screens/Timun_Mas';
import Roro_Jonggrang from './screens/Roro_Jonggrang';
import Lutung_Kasarung from './screens/Lutung_Kasarung';

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
          <MaterialCommunityIcons name="account" color={color} size={size} />),
        headerShown: false,
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
        <Stack.Screen name='Malin Kundang' component={MalinKundang} />
        <Stack.Screen name='Danau Toba' component={DanauToba} />
        <Stack.Screen name='Kancil dan Buaya' component={Kancil_dan_Buaya} />
        <Stack.Screen name='Roro Jonggrang' component={Roro_Jonggrang} />
        <Stack.Screen name='Sangkuriang' component={Sangkuriang} />
        <Stack.Screen name='Timun Mas' component={Timun_Mas} />
        <Stack.Screen name='Lutung Kasarung' component={Lutung_Kasarung} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});