import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MalinKundang from '../assets/MalinKundang.jpg';
import danautoba from '../assets/danautoba.jpeg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Beranda = ({navigation}) => {
  return (
    <View>
      <Atas/>
      <ScrollView>
      <Malin_Kundang/>
      <Danau_Toba />
      {/* <Cerita/> */}
      </ScrollView>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Saya')}
      style={styles.btn}>
      <Text style={styles.bb}>SAYA</Text>
      </TouchableOpacity>        
    </View>
  );
};

// const Cerita = () => {
//   return (
//     <View>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen 
//           name='malin'
//           component={Malin_Kundang}
//           options={{title: "Malin Kundang"}} />
//           <Stack.Screen 
//           name='toba'
//           component={Danau_Toba}
//           options={{title: "Danau Toba"}} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

const Atas = () => {
  return (
    <View style={styles.welcome}>
      <Text style={styles.atas}>Selamat Membaca</Text>
    </View>
  )
}

const Malin_Kundang = ({navigation}) => {
  return (
    <View style = {{
      marginLeft: 65, 
      marginTop: 30, 
      backgroundColor:'#c2c2c2', 
      width: 300, 
      borderRadius: 8}}>
      <Image source={MalinKundang} style={styles.img}/>
      <Text style={styles.mln}>Malin Kundang</Text>
      <View style = {{
        backgroundColor: '#FF8C00', 
        paddingTop: 8, paddingBottom: 8, 
        alignItems: 'center', 
        marginBottom: 20, 
        marginLeft:26, 
        width:250, 
        justifyContent: 'center', 
        borderRadius: 10}}>
          <Text style = {{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          fontStyle: 'italic',
        }}> Baca </Text>
        {/* <Button 
        title = 'Malin Kundang'
        onPress={() => navigation.navigate('malin')}/> */}
      </View>
      
    </View>
  )
}

const Danau_Toba = () => {
  return (
    <View style = {{
      marginLeft: 65, 
      marginTop: 30, 
      backgroundColor:'#c2c2c2', 
      width: 300, 
      borderRadius: 8,}}>
      <Image source = {danautoba} style = {styles.dntb}/>
      <Text style = {styles.danau}>Danau Toba</Text>
      <View style = {{
        backgroundColor: '#FF8C00', 
        paddingTop: 8, paddingBottom: 8, 
        alignItems: 'center', 
        marginBottom: 20, 
        marginLeft:26, 
        width:250, 
        justifyContent: 'center', 
        borderRadius: 10}}>
        <Text style = {{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          fontStyle: 'italic',
        }}> Baca </Text>
      </View>
      
    </View>
  )
}

export default Beranda;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  bb: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    width: 270,
    height: 150,
    marginTop: 30,
    // marginLeft: 70,
    margin: 15,
  },
  dntb: {
    width: 270,
    height: 150,
    marginTop: 30,
    // marginLeft: 70,
    margin: 15,
  },
  welcome:{
    height: 70,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  atas: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  mln: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  },
  danau: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  }
});