import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import roroJonggrangImage from '../assets/roro_jonggrang.png';

const RoroJonggrang = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <MaterialCommunityIcons name="chevron-left" size={15} color="black" />
        <Text style={styles.backText}>Kembali</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={roroJonggrangImage} style={styles.image} />
        <Text style={styles.title}>Roro Jonggrang</Text>
        <Text style={styles.storyText}>
          Pada zaman dahulu kala, hiduplah seorang raja yang sangat terkenal dan
          kuat bernama Prabu Baka. Prabu Baka adalah seorang raja yang memerintah
          di kerajaan Baka, yang wilayahnya sangat luas. Prabu Baka memiliki
          seorang putri yang sangat cantik jelita bernama Roro Jonggrang.
        </Text>
        <Text style={styles.storyText}>
          Suatu hari, kerajaan Baka diserang oleh kerajaan Pengging yang dipimpin
          oleh seorang pangeran bernama Bandung Bondowoso. Bandung Bondowoso
          berhasil mengalahkan Prabu Baka dan merebut kerajaannya. Setelah
          kemenangan tersebut, Bandung Bondowoso jatuh cinta pada kecantikan Roro
          Jonggrang dan berniat untuk menikahinya.
        </Text>
        <Text style={styles.storyText}>
          Namun, Roro Jonggrang tidak ingin menikah dengan pembunuh ayahnya.
          Meskipun demikian, dia tidak bisa menolak secara langsung karena
          Bandung Bondowoso sangat kuat dan memiliki pasukan yang besar. Oleh
          karena itu, Roro Jonggrang mencari cara untuk menolak lamaran tersebut.
        </Text>
        <Text style={styles.storyText}>
          Roro Jonggrang kemudian memberikan syarat kepada Bandung Bondowoso agar
          dia membangun seribu candi dalam satu malam sebagai mahar pernikahan
          mereka. Roro Jonggrang yakin bahwa permintaan tersebut tidak mungkin
          dapat dipenuhi. Bandung Bondowoso menyanggupi permintaan tersebut dan
          memulai pekerjaan besar itu dengan bantuan pasukan jin.
        </Text>
        <Text style={styles.storyText}>
          Dalam waktu singkat, ratusan candi telah berdiri. Roro Jonggrang mulai
          merasa khawatir karena melihat Bandung Bondowoso hampir menyelesaikan
          pekerjaannya. Akhirnya, Roro Jonggrang memikirkan cara untuk menggagalkan
          usaha tersebut. Dia memerintahkan para wanita di desa untuk mulai
          menumbuk padi dan menyalakan api agar terlihat seperti fajar telah tiba.
        </Text>
        <Text style={styles.storyText}>
          Mendengar suara aktivitas pagi dan melihat cahaya api, para jin mengira
          bahwa pagi telah tiba dan mereka segera meninggalkan pekerjaan mereka.
          Bandung Bondowoso sangat marah ketika mengetahui bahwa Roro Jonggrang
          telah menipunya. Namun, karena cintanya yang mendalam, dia tetap tidak
          bisa menyakiti Roro Jonggrang.
        </Text>
        <Text style={styles.storyText}>
          Sebagai gantinya, Bandung Bondowoso mengutuk Roro Jonggrang menjadi
          sebuah arca untuk melengkapi candi yang ke-seribu. Dengan kutukan
          tersebut, Roro Jonggrang berubah menjadi arca yang sangat cantik dan
          ditempatkan di dalam candi terakhir yang dibangun oleh Bandung
          Bondowoso.
        </Text>
        <Text style={styles.storyText}>
          Sampai saat ini, candi-candi tersebut dikenal sebagai Candi Prambanan
          dan arca Roro Jonggrang masih dapat ditemukan di dalam candi tersebut.
        </Text>
        <Text style={styles.title}>Pesan Moral</Text>
        <Text style={styles.storyText}>
          Cerita ini mengajarkan kita tentang pentingnya menjaga janji dan
          menghadapi konsekuensi dari tindakan kita. Selain itu, cerita ini juga
          menunjukkan betapa kecerdikan dan kepandaian dapat membantu kita dalam
          menghadapi situasi sulit.
        </Text>
        <Text style={styles.sumber}>
          Sumber: https://indonesiakaya.com/pustaka-indonesia/cerita-rakyat-jawa-tengah-legenda-roro-jonggrang/
        </Text>
      </ScrollView>
    </View>
  );
};

export default RoroJonggrang;

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
    marginTop: 20,
    marginRight: 20,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});
