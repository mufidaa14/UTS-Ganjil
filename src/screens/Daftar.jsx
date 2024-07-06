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

const Daftar = ({navigation}) => {
  return (
    <View>
      <ScrollView>
      <Atas/>
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8}}>
      <Image source={MalinKundang} style={styles.img}/>
      <Text style={styles.mln}>Malin Kundang</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Malin Kundang')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity>    
      </View>
      {/* Danau Toba */}
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
      <Image source = {danautoba} style = {styles.dntb}/>
      <Text style = {styles.danau}>Danau Toba</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Danau Toba')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity> 
      </View>
      {/* Kancil dan Buaya */}
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
      <Image source = {kancil} style = {styles.kncl}/>
      <Text style = {styles.kancil}>Kancil dan Buaya</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Kancil dan Buaya')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity> 
      </View>
      {/* RORO JONGGRANG */}
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
      <Image source = {roro} style = {styles.rr}/>
      <Text style = {styles.roro}>Roro Jonggrang</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Roro Jonggrang')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity> 
      </View>
      {/* SANGKURIANG */}
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
      <Image source = {sangkuriang} style = {styles.sngk}/>
      <Text style = {styles.sangkuriang}>Sangkuriang</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sangkuriang')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity> 
      </View>
      {/* TIMUN MAS */}
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
      <Image source = {timun_mas} style = {styles.tmn}/>
      <Text style = {styles.timun}>Timun Mas</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Timun Mas')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity> 
      </View>
      {/* LUTUNG KASARUNG */}
      <View style = {{
        marginLeft: 65, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 300, 
        borderRadius: 8,}}>
      <Image source = {lutung} style = {styles.ltg}/>
      <Text style = {styles.lutung}>Lutung Kasarung</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Lutung Kasarung')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity> 
      </View>
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

export default Daftar;

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