import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import roro from '../assets/roro_jonggrang.png';

const RoroJonggrang = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={roro} style={styles.image} />
      <Text style={styles.title}> Kisah Roro Jonggrang</Text>
      <Text style={styles.story}>
        Dahulu kala, di Desa Prambanan, ada sebuah kerajaan yang dipimpin oleh Prabu Baka. la memiliki seorang putri yang sangat cantik bernama Roro Jonggrang.
      </Text>
      <Text style={styles.story}>
        Suatu ketika, Prambanan dikalahkan oleh Kerajaan Pengging yang dipimpin oleh Bandung Bondowoso. Prabu Baka tewas di medan perang. Dia terbunuh oleh Bandung Bondowoso yang sangat sakti.
      </Text>
      <Text style={styles.story}>
        Bandung Bondowoso kemudian menempati Istana Prambanan. Melihat putri dari Prabu Baka yang cantik jelita yaitu Roro Jonggrang, timbul keinginannya untuk memperistri Roro Jonggrang.
      </Text>
      <Text style={styles.story}> 
        Roro Jonggrang tahu bahwa Bandung Bondowoso adalah orang yang membunuh ayahnya. Karena itu, ia mencari akal untuk menolaknya. Lalu, ia mengajukan syarat dibuatkan 1.000 buah candi dan dua buah sumur yang dalam. Semuanya harus selesai dalam semalam.
      </Text>
      <Text style={styles.story}>
        Bandung Bondowoso menyanggupi persyaratan Roro Jonggrang. Ia meminta pertolongan kepada ayahnya dan mengerahkan balatentara roh-roh halus untuk membantunya pada hari yang ditentukan. Pukul empat pagi, hanya tinggal lima buah candi yang belum selesai dan kedua sumur hampir selesai.
      </Text>
      <Text style={styles.story}>
        Mengetahui 1.000 candi telah hampir selesai, Roro Jonggrang ketakutan.
      </Text>
      <Text style={styles.story}>
        “Apa yang harus kulakukan untuk menghentikannya?” pikirnya cemas membayangkan ia harus menerima pinangan Bandung Bondowoso yang telah membunuh orangtuanya.
      </Text>
      <Text style={styles.story}>
        Akhirnya, ia pergi membangunkan gadis-gadis di Desa Prambanan dan memerintahkan untuk menghidupkan obor-obor dan membakar jerami, memukulkan alu pada lesung, dan menaburkan bunga-bunga yang harum. Suasana saat itu menjadi terang dan riuh. Semburat merah memancar di langit dengan seketika.
      </Text>
      <Text style={styles.story}>
        Ayam jantan pun berkokok bersahut-sahutan. Mendengar suara itu, para roh halus segera meninggalkan pekerjaan. Mereka menyangka hari telah pagi dan matahari akan segera terbit. Pada saat itu hanya tinggal satu sebuah candi yang belum dibuat.
      </Text>
      <Text style={styles.story}>
       Bandung Bondowoso sangat terkejut dan marah menyadari usahanya telah gagal. Dalam amarahnya, Bandung Bondowoso mengutuk Roro Jonggrang menjadi sebuah arca untuk melengkapi sebuah buah candi yang belum selesai.
      </Text>
      <Text style={styles.story}>
        Batu arca Roro Jonggrang diletakkan di dalam ruang candi yang besar. Hingga kini, candi tersebut disebut dengan Candi Roro Jonggrang. Sementara itu, candi-candi di sekitarnya disebut dengan Candi Sewu (Candi Seribu) meskipun jumlahnya belum mencapai 1.000.
      </Text>
      <Text style={styles.story}>
                                          ***                                
      </Text>
      <Text style={styles.moral}>
        Pesan Moral: Ketulusan dan kejujuran adalah hal yang penting dalam setiap hubungan.
      </Text>
      <Text style={styles.sumber}><i>
        Sumber: https://dongengceritarakyat.com/cerita-rakyat-roro-jonggrang-dongeng-candi-prambanan/
      </i>
      </Text>
    </ScrollView>
  )
}

export default RoroJonggrang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#4CAF50',
  },
  story: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  moral: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: '#FF5722',
  },
  sumber: {
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 8,
  },
});
