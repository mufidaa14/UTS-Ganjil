import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import history  from '../assets/history.png';
import history_book  from '../assets/history-book.png';
import book  from '../assets/book.png';
import anakbanyak  from '../assets/anakbanyak.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Beranda = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Image source={anakbanyak} style={styles.gambar1}/>
      <Image source={book} style={styles.gambar2}/>
      <View style={styles.isi}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.quote}>
      "Membaca cerita legenda adalah kunci menuju masa lalu. Mari kita buka pintu sejarah dan temukan serunya kisah-kisah zaman dahulu!"</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Daftar')} style={styles.btn}>
        <Text style={styles.bb}>Mulai Membaca</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Beranda;

const styles = StyleSheet.create({
  background: {
    height: 500,
    alignItems: 'center',
  },
  gambar1: {
    height: 250,
    width: 250,
    marginTop: 30,
    marginLeft:10,
  },
  gambar2: {
    height: 150,
    width: 150,
    marginTop: 20,
    marginRight: 10,
  },
  isi: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 45, 
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000', 
    marginLeft: 5, 
    marginTop: 60,
  },
  quote: {
    fontSize: 17, 
    textAlign: 'left',
    color: '#000', 
    marginLeft: 5, 
    marginTop: 5,
    marginRight: 20,
  },
  btn: {
    width: '90%',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'orange',
    alignItems: 'center',
    marginTop: 70,
    height: 50,
  },
  bb: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
})