import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import user from '../assets/user.png';
import gmail from '../assets/gmail.png';
import instagram from '../assets/instagram.png';
import smartphone from '../assets/smartphone.png';
import whatsapp from '../assets/whatsapp.png';

const Saya = () => {
  return (
    <View style={styles.profil}>
      <Image source={user} style={styles.ft}/>
      <Text style={styles.txt}>Profile</Text>   
      <View style={styles.bagian1}>
        <Image source={smartphone} style={styles.smart} />
        <Text style={{marginLeft: 10, fontSize: 17, fontWeight: 'bold', color:'black'}}>+628-331227867</Text>
      </View>
      <View style={styles.bagian2}>
        <Image source={gmail} style={styles.gml} />
        <Text style={{marginLeft: 20, fontSize: 17, fontWeight: 'bold', color:'black'}}>mufidajeje14@gmail.com</Text>
      </View>
      <View style={styles.bagian3}>
        <Image source={instagram} style={styles.inst} />
        <Text style={{marginLeft: 20, fontSize: 17, fontWeight: 'bold', color:'black'}}>mufidajeje14</Text>
      </View>
      <View style={styles.bagian4}>
        <Image source={whatsapp} style={styles.wtsp} />
        <Text style={{marginLeft: 20, fontSize: 17, fontWeight: 'bold', color:'black'}}>082331270662</Text>
      </View>
    </View>
  )
}

export default Saya;

const styles = StyleSheet.create({
  profil: {
    backgroundColor: 'orange',
    height: 230,
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 38
  },
  ft: {
    height: 80,
    width: 80,
    marginTop: 50,
  },
  bagian1: {
    marginTop: 150,
    width: 300,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row'
  },
  bagian2: {
    marginTop: 30,
    marginLeft: 45,
    width: 300,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row'
  },
  bagian3: {
    marginTop: 30,
    marginRight: 20,
    width: 300,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row'
  },
  bagian4: {
    marginTop: 30,
    marginRight: 10,
    width: 300,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row'
  },
  smart: {
    height: 60,
    width:60,
  },
  gml: {
    height: 40,
    width:40,
  },
  inst: {
    height: 40,
    width:40,
  },
  wtsp: {
    height: 40,
    width:40,
  },
});