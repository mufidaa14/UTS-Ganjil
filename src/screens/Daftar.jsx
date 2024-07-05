import { Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MalinKundang from '../assets/MalinKundang.jpg';
import danautoba from '../assets/danautoba.jpeg';
import kancil from '../assets/kancil.jpg';
import roro from '../assets/roro_jonggrang.png';
import sangkuriang from '../assets/sangkuriang.jpg';
import timun_mas from '../assets/timun-mas.jpeg';
import lutung from '../assets/lutung-kasarung.jpeg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Beranda = ({navigation}) => {
  return (
    <View>
      <ScrollView>
      <Atas/>
      <Malin_Kundang onPress={navigation.navigate('MalinKundang')}/>
      <Danau_Toba onPress={navigation.navigate('DanauToba')}/>
      <Kancil_dan_Buaya onPress={navigation.navigate('Saya')}/>
      <Roro_Jonggrang onPress={navigation.navigate('Saya')}/>
      <Sangkuriang onPress={navigation.navigate('Saya')}/>
      <Timun_Mas onPress={navigation.navigate('Saya')}/>
      <Lutung_Kasarung onPress={navigation.navigate('Saya')}/>
      <TouchableOpacity onPress={() => navigation.navigate('Tentang')} style={styles.btn}>
        <Text style={styles.bb}>SAYA</Text>
      </TouchableOpacity>  
      </ScrollView>      
    </View>
  );
};

const Atas = () => {
  return (
    <View style={styles.welcome}>
      <Text style={styles.atas}>Selamat Membaca</Text>
    </View>
  )
}

const Malin_Kundang = ({onPress}) => {
  return (
    <View style = {{
      marginLeft: 65, 
      marginTop: 30, 
      backgroundColor:'#c2c2c2', 
      width: 300, 
      borderRadius: 8}}>
      <Image source={MalinKundang} style={styles.img}/>
      <Text style={styles.mln}>Malin Kundang</Text>
      <TouchableOpacity onPress={onPress}>            
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
        </TouchableOpacity>
      
    </View>
  )
}

const Danau_Toba = (onPress) => {
  return (
    <View style = {{
      marginLeft: 65, 
      marginTop: 30, 
      backgroundColor:'#c2c2c2', 
      width: 300, 
      borderRadius: 8,}}>
      <TouchableOpacity onPress={onPress}>
        <Image source = {danautoba} style = {styles.dntb}/>
      </TouchableOpacity>
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
          <Text 
          style = {{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          fontStyle: 'italic',
        }}> Baca </Text>       
      </View>
      
    </View>
  )
}

const Kancil_dan_Buaya = (onPress) => {
    return (
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
        <TouchableOpacity onPress={onPress}>
          <Image source = {kancil} style = {styles.kncl}/>
        </TouchableOpacity>
        <Text style = {styles.kancil}>Danau Toba</Text>
        <View style = {{
          backgroundColor: '#FF8C00', 
          paddingTop: 8, paddingBottom: 8, 
          alignItems: 'center', 
          marginBottom: 20, 
          marginLeft:26, 
          width:250, 
          justifyContent: 'center', 
          borderRadius: 10}}>
            <Text 
            style = {{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            fontStyle: 'italic',
          }}> Baca </Text>       
        </View>
        
      </View>
    )
  }

  const Roro_Jonggrang = (onPress) => {
    return (
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
        <TouchableOpacity onPress={onPress}>
          <Image source = {roro} style = {styles.rr}/>
        </TouchableOpacity>
        <Text style = {styles.roro}>Roro Jonggrang</Text>
        <View style = {{
          backgroundColor: '#FF8C00', 
          paddingTop: 8, paddingBottom: 8, 
          alignItems: 'center', 
          marginBottom: 20, 
          marginLeft:26, 
          width:250, 
          justifyContent: 'center', 
          borderRadius: 10}}>
            <Text 
            style = {{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            fontStyle: 'italic',
          }}> Baca </Text>       
        </View>
        
      </View>
    )
  }

  const Sangkuriang = (onPress) => {
    return (
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
        <TouchableOpacity onPress={onPress}>
          <Image source = {sangkuriang} style = {styles.sngk}/>
        </TouchableOpacity>
        <Text style = {styles.sangkuriang}>Sangkuriang</Text>
        <View style = {{
          backgroundColor: '#FF8C00', 
          paddingTop: 8, paddingBottom: 8, 
          alignItems: 'center', 
          marginBottom: 20, 
          marginLeft:26, 
          width:250, 
          justifyContent: 'center', 
          borderRadius: 10}}>
            <Text 
            style = {{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            fontStyle: 'italic',
          }}> Baca </Text>       
        </View>
        
      </View>
    )
  }

  const Timun_Mas = (onPress) => {
    return (
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
        <TouchableOpacity onPress={onPress}>
          <Image source = {timun_mas} style = {styles.tmn}/>
        </TouchableOpacity>
        <Text style = {styles.timun}>Timun Mas</Text>
        <View style = {{
          backgroundColor: '#FF8C00', 
          paddingTop: 8, paddingBottom: 8, 
          alignItems: 'center', 
          marginBottom: 20, 
          marginLeft:26, 
          width:250, 
          justifyContent: 'center', 
          borderRadius: 10}}>
            <Text 
            style = {{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            fontStyle: 'italic',
          }}> Baca </Text>       
        </View>
        
      </View>
    )
  }

  const Lutung_Kasarung = (onPress) => {
    return (
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
        <TouchableOpacity onPress={onPress}>
          <Image source = {lutung} style = {styles.ltg}/>
        </TouchableOpacity>
        <Text style = {styles.lutung}>Lutung Kasarung</Text>
        <View style = {{
          backgroundColor: '#FF8C00', 
          paddingTop: 8, paddingBottom: 8, 
          alignItems: 'center', 
          marginBottom: 20, 
          marginLeft:26, 
          width:250, 
          justifyContent: 'center', 
          borderRadius: 10}}>
            <Text 
            style = {{
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
  kncl: {
    width: 270,
    height: 150,
    marginTop: 30,
    // marginLeft: 70,
    margin: 15,
  },
  rr: {
    width: 270,
    height: 150,
    marginTop: 30,
    // marginLeft: 70,
    margin: 15,
  },
  sngk: {
    width: 270,
    height: 150,
    marginTop: 30,
    // marginLeft: 70,
    margin: 15,
  },
  tmn: {
    width: 270,
    height: 150,
    marginTop: 30,
    // marginLeft: 70,
    margin: 15,
  },
  ltg: {
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
  },
  kancil: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  },
  roro: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  },
  sangkuriang: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  },
  timun: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  },
  lutung: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 100,
    fontSize: 17,
    fontWeight: 'bold',
  }
});