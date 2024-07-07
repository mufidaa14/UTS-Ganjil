import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import sangkuriangImage from '../assets/sangkuriang.jpg';

const Sangkuriang = () => {
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
      <Image source={sangkuriangImage} style={styles.image} />
      <Text style={styles.title}>Sangkuriang</Text>
      <Text style={styles.storyText}>
        Pada zaman dahulu kala di tanah Parahyangan, hiduplah seorang pemuda bernama Sangkuriang. Ia adalah seorang pemburu yang tangkas dan tampan. Suatu hari, Sangkuriang bertemu dengan seorang wanita cantik bernama Dayang Sumbi. Tanpa ia ketahui, Dayang Sumbi adalah ibunya sendiri.
      </Text>
      <Text style={styles.storyText}>
        Sangkuriang jatuh cinta pada Dayang Sumbi dan ingin menikahinya. Dayang Sumbi mengenali Sangkuriang sebagai anaknya dan berusaha menghentikan pernikahan tersebut dengan memberikan syarat yang mustahil. Ia meminta Sangkuriang untuk membuat sebuah danau dan sebuah perahu dalam satu malam.
      </Text>
      <Text style={styles.storyText}>
        Sangkuriang yang memiliki kesaktian mencoba memenuhi syarat tersebut. Dengan bantuan makhluk-makhluk gaib, ia hampir menyelesaikan tugasnya. Namun, Dayang Sumbi memohon kepada para dewa untuk menghentikan usaha Sangkuriang. Ia membuat fajar datang lebih cepat dengan membentangkan kain putih di timur.
      </Text>
      <Text style={styles.storyText}>
        Melihat bahwa ia gagal menyelesaikan tugasnya, Sangkuriang marah dan menendang perahu yang ia buat hingga terbalik. Perahu tersebut kemudian menjadi Gunung Tangkuban Perahu yang kita kenal sekarang.
      </Text>
      <Text style={styles.title}>Pesan Moral</Text>
      <Text style={styles.storyText}>
        Cerita Sangkuriang mengajarkan kita tentang pentingnya mengenali asal-usul dan sejarah keluarga. Selain itu, cerita ini juga mengajarkan tentang kebijaksanaan dan kehati-hatian dalam mengambil keputusan besar.
      </Text>
      <Text style={styles.sumber}>
        Sumber: https://dongengceritarakyat.com/sangkuriang/
      </Text>
    </ScrollView>
  );
};

export default Sangkuriang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    marginTop: 15,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});
