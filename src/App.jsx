import { Button, StyleSheet, Text, View,} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Bar = () => {
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
  </Tab.Navigator>
  );
};

/**pindah posisii */
const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Malin_Kundang} />
        <Stack.Screen name="Danau Toba" component={Danau_Toba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Malin_Kundang = ({navigation}) => {
  return (
    <View>
      <Text style={styles.Malin_Kundang}>Malin Kundang</Text>
      <Button 
      title='danau toba'
      onPress={()=>navigation.navigate('Danau Toba')}/>
    </View>
  );
};

const Danau_Toba = () => {
  return (
    <View>
      <Text style={styles.Danau_Toba}>Danau toba</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Malin_Kundang: {
    fontSize: 100,
  }
});