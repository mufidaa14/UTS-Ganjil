import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import kancil from '../assets/kancil.jpg';

const KancilDanBuaya = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={kancil} style={styles.image} />
      <Text style={styles.title}>Kancil dan Buaya</Text>
      <Text style={styles.story}>
        Pada suatu hari, si Kancil, binatang yang katanya cerdik itu, tengah berjalan-jalan di pinggir hutan. Berhubung di dalam hutan itu terlalu gelap karena pohon-pohonnya juga sangat lebat, maka dirinya hanya ingin mencari udara segar sambil melihat matahari yang cerah bersinar. Si Kancil ingin berjemur sebentar di bawah terik matahari. Tepatnya setelah sampai di pinggir sungai besar, dirinya merasa perutnya lapar sekali.
      </Text>
      <Text style={styles.story}>
        “Krucuk…krucuk…” begitu kira-kira bunyi perut si Kancil yang tengah merasa lapar. Lantas, si Kancil membayangkan betapa enaknya kalau dirinya makan makanan kesukaannya yaitu timun. Namun sayangnya, kebun timun yang berbuah ranum itu ada di seberang sungai besar itu. Si Kancil diam dan berpikir akan bagaimana cara menyeberangi sungai besar ini ya…
      </Text>
      <Text style={styles.story}>
        Si Kancil terus berpikir mencari akal mengenai bagaimana cara dirinya dapat menyeberangi sungai besar ini tanpa harus menyentuh airnya yang dingin dan deras itu. Tiba-tiba, si Kancil memandang beberapa buaya yang asyik berjemur di tebing sungai. Memang sudah kebiasaan mereka untuk berjemur terutama ketika matahari tengah terik seperti ini. Tanpa menunggu waktu yang lama lagi, Si Kancil langsung menghampiri salah satu buaya yang tengah berjemur itu.
      </Text>
      <Text style={styles.story}>
        “Hai buaya, apa kabarmu hari ini?”
      </Text>
      <Text style={styles.story}>
        Buaya yang kala itu masih asyik menikmati cahaya matahari lantas membuka matanya dan mendapati ada Si Kancil yang tengah menyapa. “Kabar baik. Ada apa kamu kemari?”, tanya Buaya kepada Si Kancil.
      </Text>
      <Text style={styles.story}>
        Aku kemari untuk membawakan kabar gembira untukmu dan para kawananmu”, jawab Si Kancil dengan wajah bahagia. Mendengar perkataan tersebut, tentu saja Buaya tidak sabar mendengar kabar gembira yang dimaksudkan oleh Si Kancil. “Segera ceritakan apa kabar gembira  tersebut!”
      </Text>
      <Text style={styles.story}>
        Si Kancil kemudian berkata, “Aku kemari karena diperintahkan oleh Raja Hutan kita supaya menghitung jumlah buaya yang ada di sungai ini, sebab Sang Raja Hutan hendak memberikan hadiah kepada kamu dan para kawananmu semua…”
      </Text>
      <Text style={styles.story}>
        Mendengar nama Raja Hutan tentu saja langsung membuat Buaya percaya dengan pembicaraan tersebut. “Baiklah, Kancil. Kamu tunggu di sini dahulu, aku akan turun ke dasar sungai untuk memanggil semua kawananku”, kata Buaya langsung merangkak secara cepat menuju dasar sungai. Sementara menunggu Buaya dan kawanan lainnya datang, Si Kancil tengah berangan-angan untuk segera menikmati timun favoritnya.
      </Text>
      <Text style={styles.story}>
                                          ***                                
      </Text>
      <Text style={styles.story}>
        Tak lama kemudian, semua buaya yang awalnya berada di dasar sungai telah berkumpul di tebing sungai. Si Kancil lantas memulai pembicaraan kembali, “Hai buaya sekalian. Aku kemari karena telah diperintahkan oleh Sang Raja Hutan untuk menghitung kalian semua. Sebab, Sang Raja Hutan hendak memberikan kalian semua hadiah istimewa pada hari ini. Maka dari itu, berbarislah kalian semua dari tebing sebelah sini sampai ke tebing sebelah sana ya…”
      </Text>
      <Text style={styles.story}>
        Mendengar perintah yang berhubungan dengan Sang Raja Hutan, tentu saja langsung membuat para buaya melaksanakannya tanpa membantah. Mereka langsung berbaris dengan rapi sesuai dengan perintah Si Kancil. “Nah Kancil, sekarang hitung kami semua”, kata salah satu buaya yang paling besar.
      </Text>
      <Text style={styles.story}>
        Si Kancil kemudian mengambil sepotong kayu yang berada di sekitarnya lalu melompat ke atas tubuh buaya pertama di tepi sungai. Dirinya mulai menghitung dengan menyebut, “Satu dua tiga lekuk, jantan betina aku ketuk”, sambil mengetuk kepala buaya hingga dirinya berhasil menyeberangi sungai besar tersebut. Setelah sampai di tebing seberang sungai, si Kancil langsung melompat gembira dan berkata, “Hai para buaya, apakah kamu tahu bahwa aku sebenarnya tidak membawa berita baik dari Sang Raja Hutan? Sebenarnya aku telah menipu kalian semua supaya dapat menyeberangi sungai besar ini. Ha…ha…ha…”
      </Text>
      <Text style={styles.story}>
        Melihat si Kancil yang tertawa-tawa sambil berkata demikian, para buaya merasa marah sekaligus malu karena telah diperdaya oleh Si Kancil. “Dasar kamu Kancil nakal nan licik. Awas kamu ya… Kalau bertemu lagi, akan kumakan kamu!” kata salah satu buaya.
      </Text>
      <Text style={styles.story}>
        Si Kancil sama sekali tidak takut dengan ancaman tersebut dan langsung berlari kegirangan meninggalkan para buaya untuk segera menuju kebun timun yang ranum. Dirinya segera menghilangkan rasa lapar di dalam kebun timun tersebut.
      </Text>
      <Text style={styles.story}>
                                          ***                                
      </Text>
      <Text style={styles.moral}>
        Pesan Moral: Kecerdikan dan kepintaran bisa membantu kita dalam menghadapi situasi yang sulit.
      </Text>
      <Text style={styles.sumber}><i>
        Sumber: https://www.gramedia.com/best-seller/dongeng-kancil-buaya/
      </i>
      </Text>
    </ScrollView>
  )
}

export default KancilDanBuaya;

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
    color: '#4CAF50',
  },
  sumber: {
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 8,
  },
});
