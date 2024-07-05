import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import malinKundangImage from '../assets/MalinKundang.jpg'; // Pastikan Anda memiliki gambar yang sesuai di direktori assets

const MalinKundang = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={malinKundangImage} style={styles.image} />
      <Text style={styles.title}>Cerita Malin Kundang</Text>
      <Text style={styles.storyText}>
        Dahulu kala, hiduplah seorang anak bernama Malin Kundang. Ia tinggal bersama ibunya di sebuah desa kecil di tepi pantai. Malin adalah anak yang cerdas dan rajin. Suatu hari, ia memutuskan untuk merantau ke kota untuk mengubah nasibnya.
      </Text>
      <Text style={styles.storyText}>
        Di kota, Malin bekerja keras dan akhirnya menjadi seorang yang sangat kaya. Namun, ketika ia kembali ke desanya, ia lupa akan ibunya. Ia bahkan mengabaikan ibunya yang sudah tua dan miskin. Karena kesombongannya, Malin dikutuk oleh ibunya menjadi batu.
      </Text>
      <Text style={styles.storyText}>
        Hingga saat ini, batu Malin Kundang dapat ditemukan di pantai, sebagai pengingat bahwa kita harus selalu menghormati dan mencintai orang tua kita.
      </Text>
    </ScrollView>
  );
};

export default MalinKundang;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
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
    marginBottom: 20,
    textAlign: 'justify',
  },
});
