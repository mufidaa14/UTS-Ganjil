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
      <View style={styles.container1}>
      <View style = {{ 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source={MalinKundang} style={styles.img}/>
      <Text style={styles.mln}>Malin Kundang</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Malin Kundang')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity>    
      </View>
      {/* Danau Toba */}
      <View style = {{
        marginLeft: 50, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source = {danautoba} style = {styles.dntb}/>
      <Text style = {styles.danau}>Danau Toba</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Danau Toba')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity> 
      </View>
      </View>
      {/* ======================================================================= */}
      {/* Kancil dan Buaya */}
      <View style={styles.container1}>
      <View style = {{
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source = {kancil} style = {styles.kncl}/>
      <Text style = {styles.kancil}>Kancil dan Buaya</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Kancil dan Buaya')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity> 
      </View>
      {/* RORO JONGGRANG */}
      <View style = {{
        marginLeft: 50, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source = {roro} style = {styles.rr}/>
      <Text style = {styles.roro}>Roro Jonggrang</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Roro Jonggrang')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity> 
      </View>
      </View>
      {/* ======================================================================= */}
      {/* SANGKURIANG */}
      <View style={styles.container1}>
      <View style = {{
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source = {sangkuriang} style = {styles.sngk}/>
      <Text style = {styles.sangkuriang}>Sangkuriang</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sangkuriang')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity> 
      </View>
      {/* TIMUN MAS */}
      <View style = {{
        marginLeft: 50, 
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source = {timun_mas} style = {styles.tmn}/>
      <Text style = {styles.timun}>Timun Mas</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Timun Mas')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity> 
      </View>
      </View>
      {/* ======================================================================= */}
      {/* LUTUNG KASARUNG */}
      <View style={styles.container1}>

      <View style = {{
        marginTop: 30, 
        backgroundColor:'#c2c2c2', 
        width: 170,
        height: 160,
        borderRadius: 8}}>
      <Image source = {lutung} style = {styles.ltg}/>
      <Text style = {styles.lutung}>Lutung Kasarung</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Lutung Kasarung')} style={styles.btn}>
        <Text style={styles.bb}>BACA</Text>
      </TouchableOpacity> 
      </View> 
      </View>
      </ScrollView>      
    </View>
  );
};

export default Daftar;

const styles = StyleSheet.create({
  container1: {
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
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
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
  },
  dntb: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
  },
  kncl: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
  },
  rr: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
  },
  sngk: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
  },
  tmn: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
  },
  ltg: {
    width: 150,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    margin: 10,
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
    marginLeft: 37,
    fontSize: 15,
    fontWeight: 'bold',
  },
  danau: {
    marginLeft: 50,
    fontSize: 15,
    fontWeight: 'bold',
  },
  kancil: {
    marginLeft: 32,
    fontSize: 15,
    fontWeight: 'bold',
  },
  roro: {
    marginLeft: 37,
    fontSize: 15,
    fontWeight: 'bold',
  },
  sangkuriang: {
    marginLeft: 42,
    fontSize: 15,
    fontWeight: 'bold',
  },
  timun: {
    marginLeft: 50,
    fontSize: 15,
    fontWeight: 'bold',
  },
  lutung: {
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
  }
});