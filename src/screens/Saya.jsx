import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import people from '../assets/people.png';

const Saya = () => {
  return (
    <View style={styles.profil}>
      <Image source={people} style={styles.ft}/>
      <Text style={styles.txt}>Profile</Text>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

export default Saya;

const styles = StyleSheet.create({
  profil: {
    backgroundColor: 'gold',
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
});