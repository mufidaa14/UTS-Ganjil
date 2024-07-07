import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import danauTobaImage from '../assets/danautoba.jpeg';

const DanauToba = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <MaterialCommunityIcons name="chevron-left" size={15} color="black" />
        <Text style={styles.backText}>{'Kembali'}</Text>
      </TouchableOpacity>
      <Image source={danauTobaImage} style={styles.image} />
      <Text style={styles.title}>Danau Toba</Text>
      <Text style={styles.description}>
        Danau Toba adalah sebuah danau vulkanik besar yang terletak di Pulau Sumatra, Indonesia. Danau ini adalah danau vulkanik terbesar di dunia dan danau terbesar di Indonesia.
      </Text>
      <Text style={styles.description}>
        Danau Toba juga merupakan salah satu destinasi wisata terkenal di Indonesia. Pemandangan alam yang indah, udara yang segar, dan kebudayaan lokal yang unik menjadikan Danau Toba tempat yang menarik untuk dikunjungi.
      </Text>
      <Text style={styles.description}>
        Menurut legenda, Danau Toba terbentuk dari kutukan yang diberikan oleh seorang ayah kepada anaknya yang durhaka. Kisah ini menjadi bagian dari cerita rakyat setempat dan menambah daya tarik wisatawan untuk mengunjungi danau ini.
      </Text>
      <Text style={styles.title}>Pesona Danau Toba</Text>
      <Text style={styles.description}>
        Selain keindahan alamnya, Danau Toba juga memiliki Pulau Samosir di tengahnya yang menawarkan berbagai atraksi budaya, seperti rumah adat Batak, tari-tarian tradisional, dan upacara adat. Pulau ini juga menyediakan berbagai fasilitas wisata, seperti penginapan, restoran, dan toko cenderamata.
      </Text>
      <Text style={styles.description}>
        Aktivitas wisata di Danau Toba meliputi berenang, berlayar, memancing, dan menjelajahi pulau-pulau kecil di sekitarnya. Suasana tenang dan damai di sekitar danau membuatnya menjadi tempat yang ideal untuk bersantai dan melepaskan penat dari rutinitas sehari-hari.
      </Text>
      <Text style={styles.sumber}>
        Sumber: https://indonesiakaya.com/pustaka-indonesia/keindahan-danau-toba/
      </Text>
    </ScrollView>
  );
};

export default DanauToba;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
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
  description: {
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
    marginRight: 10,
    marginBottom: 20,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginRight: 10,
  },
});
