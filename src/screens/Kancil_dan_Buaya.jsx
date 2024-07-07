import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import kancilImage from '../assets/kancil.jpg';

const KancilDanBuaya = () => {
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
      <Image source={kancilImage} style={styles.image} />
      <Text style={styles.title}>Kancil dan Buaya</Text>
      <Text style={styles.storyText}>
        Pada suatu hari yang cerah, Kancil yang cerdik sedang berjalan-jalan di tepi sungai. Kancil merasa haus dan ingin minum air sungai yang jernih. Namun, Kancil tahu bahwa di sungai itu banyak buaya yang ganas.
      </Text>
      <Text style={styles.storyText}>
        Kancil berpikir sejenak untuk mencari cara agar bisa minum tanpa dimakan oleh buaya. Kancil kemudian mendapatkan ide yang cemerlang. Ia berteriak kepada para buaya di sungai, "Hai buaya, aku punya kabar baik! Raja hutan memerintahkan aku untuk menghitung jumlah buaya di sungai ini agar nanti bisa diberi makanan yang banyak."
      </Text>
      <Text style={styles.storyText}>
        Para buaya yang mendengar hal tersebut merasa senang dan langsung muncul ke permukaan air. "Baiklah, kami akan membantu kamu menghitung," kata salah satu buaya.
      </Text>
      <Text style={styles.storyText}>
        Kancil kemudian meminta para buaya untuk berbaris dari tepi sungai yang satu ke tepi sungai yang lain. Dengan hati-hati, Kancil melompati satu per satu punggung buaya sambil menghitung, "Satu, dua, tiga, empat...," hingga akhirnya ia sampai di seberang sungai.
      </Text>
      <Text style={styles.storyText}>
        Setelah sampai di seberang, Kancil tertawa dan berteriak, "Terima kasih, buaya! Aku hanya ingin menyeberang sungai tanpa dimakan oleh kalian!" Para buaya merasa tertipu, namun Kancil sudah jauh dan mereka tidak bisa mengejarnya.
      </Text>
      <Text style={styles.storyText}>
        Dengan kecerdikannya, Kancil berhasil minum air sungai dan melanjutkan perjalanan dengan selamat.
      </Text>
      <Text style={styles.title}>Pesan Moral</Text>
      <Text style={styles.storyText}>
        Cerita ini mengajarkan kita untuk selalu berpikir cerdik dan mencari solusi yang kreatif dalam menghadapi masalah. Selain itu, cerita ini juga mengingatkan kita bahwa kecerdikan bisa menjadi senjata yang ampuh untuk menyelamatkan diri dari bahaya.
      </Text>
      <Text style={styles.sumber}>
        Sumber: https://dongengceritarakyat.com/kancil-dan-buaya/
      </Text>
    </ScrollView>
  );
};

export default KancilDanBuaya;

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
    marginRight: 10,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginRight: 10,
  },
});
