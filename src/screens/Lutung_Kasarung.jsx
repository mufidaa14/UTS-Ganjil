import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import lutungKasarungImage from '../assets/lutung-kasarung.jpeg';

const Lutung_Kasarung = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialCommunityIcons name="chevron-left" size={15} color="black" />
          <Text style={styles.backText}>Kembali</Text>
        </TouchableOpacity>
        <Image source={lutungKasarungImage} style={styles.image} />
        <Text style={styles.title}>Lutung Kasarung</Text>
        <Text style={styles.storyText}>
          Lutung Kasarung adalah cerita rakyat Sunda yang bercerita tentang seorang putri dari kerajaan Sunda yang bernama Dayang Sumbi. Cerita ini juga melibatkan tokoh lutung Kasarung, seekor lutung putih ajaib yang membantu Dayang Sumbi dalam menghadapi berbagai masalah.
        </Text>
        <Text style={styles.storyText}>
          Lutung Kasarung memiliki banyak versi, tetapi umumnya cerita ini mengandung pesan moral tentang kejujuran, kesetiaan, dan kebijaksanaan dalam menghadapi ujian kehidupan.
        </Text>
        <Text style={styles.storyText}>
          Cerita ini juga mengajarkan nilai-nilai seperti kasih sayang antara ibu dan anak serta penghargaan terhadap janji dan kepercayaan.
        </Text>
        <Text style={styles.title}>Pesan Moral</Text>
        <Text style={styles.storyText}>
          Salah satu pesan moral dari cerita Lutung Kasarung adalah pentingnya untuk selalu berusaha dan percaya pada diri sendiri dalam menghadapi cobaan hidup. Selain itu, cerita ini juga mengajarkan tentang arti pengorbanan untuk kebaikan bersama serta pentingnya untuk menjaga hubungan baik dengan sesama.
        </Text>
        <Text style={styles.sumber}>
          Sumber: https://id.wikipedia.org/wiki/Lutung_Kasarung
        </Text>
      </ScrollView>
    </View>
  );
};

export default Lutung_Kasarung;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
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
    marginTop: 5,
    marginRight: 20,
    marginBottom: 20,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});
