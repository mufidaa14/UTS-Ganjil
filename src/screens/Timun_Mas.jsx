import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import timunMasImage from '../assets/timun-mas.jpeg';

const TimunMas = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <MaterialCommunityIcons name="chevron-left" size={15} color="black" />
        <Text style={styles.backText}>Kembali</Text>
      </TouchableOpacity>
      <Image source={timunMasImage} style={styles.image} />
      <Text style={styles.title}>Timun Mas</Text>
      <Text style={styles.storyText}>
        Timun Mas adalah cerita rakyat Jawa yang menceritakan tentang seorang gadis kecil bernama Timun Mas. Ia diberi nama Timun Mas karena lahir dari sebutir buah timun emas.
      </Text>
      <Text style={styles.storyText}>
        Timun Mas tumbuh menjadi gadis yang cantik dan baik hati. Suatu hari, ia diculik oleh ibu-ibu jahat yang berharap memakan Timun Mas untuk memperpanjang umur mereka. Timun Mas diselamatkan oleh seekor kancil yang baik hati, yang menjadi sahabatnya.
      </Text>
      <Text style={styles.storyText}>
        Kancil membantu Timun Mas dengan memberinya beberapa biji timun dan mengajari cara menggunakannya untuk mengelabui ibu-ibu jahat tersebut. Akhirnya, Timun Mas berhasil melarikan diri dan membuat ibu-ibu jahat memakan kancil sebagai gantinya.
      </Text>
      <Text style={styles.title}>Pesan Moral</Text>
      <Text style={styles.storyText}>
        Cerita Timun Mas mengajarkan kita tentang keberanian, kecerdasan, dan persahabatan. Selain itu, cerita ini juga mengandung pesan tentang pentingnya untuk tidak mudah percaya pada orang asing dan untuk selalu berhati-hati di lingkungan sekitar.
      </Text>
      <Text style={styles.sumber}>
        Sumber: https://ceritarakyatnusantara.com/id/cerita-rakyat/timun-mas/
      </Text>
    </ScrollView>
  );
};

export default TimunMas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  storyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'justify',
    lineHeight: 24,
  },
  sumber: {
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});
