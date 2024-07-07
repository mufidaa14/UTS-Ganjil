import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import malinKundangImage from '../assets/MalinKundang.jpg';

const MalinKundang = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialCommunityIcons name="chevron-left" size={15} color="black" />
          <Text style={styles.backText}>{'Kembali'}</Text>
        </TouchableOpacity>
        <Image source={malinKundangImage} style={styles.image} />
        <Text style={styles.title}>Malin Kundang</Text>
        <Text style={styles.storyText}>
          Pada zaman dahulu, di sebuah desa nelayan di Air Manis, Sumatra Barat, hiduplah satu keluarga nelayan. Karena kebutuhan keuangan keluarga, sang ayah akhirnya memutuskan untuk pergi merantau menyebrangi lautan.
        </Text>
        <Text style={styles.storyText}>
          Namun, sang ayah tidak pernah kembali ke kampung dan meninggalkan istrinya, Mande Rubayah. Sang istri kemudian membesarkan anak mereka, Malin, seorang diri. Oleh sang ibu, Malin sering dikundang-kundang (dibawa ke mana saja). Oleh karena itu, sang anak mendapat panggilan baru, Malin Kundang.
        </Text>
        <Text style={styles.storyText}>
          Malin tumbuh sebagai anak yang pintar, tapi sedikit nakal. Malin sering mengejar ayam dan memukul mereka dengan sapu. Suatu hari, ketika Malin sedang mengejar ayam, Malin terjatuh dan tangannya terbentur sebuah batu. Luka itu meninggalkan bekas di lengannya.
        </Text>
        <Text style={styles.storyText}>
          Beranjak dewasa, Malin merasa iba pada ibunya yang harus bersusah payah menafkahi mereka, sehingga berniat untuk merantau bersama sebuah kapal dagang. Ketika menceritakan tentang niatnya, sang ibu tidak mengizinkan Malin untuk pergi.
        </Text>
        <Text style={styles.storyText}>
          Ibu Mande tidak rela ditinggal anak semata wayangnya. Ibu Mande juga takut Malin akan menjadi seperti ayahnya yang pergi dan tidak pernah kembali ke kampung.
        </Text>
        <Text style={styles.storyText}>
          Ketika sedang berlayar dalam perantauannya, sebuah kejadian buruk menimpa kapal yang ditumpangi Malin sehingga ia terdampar di sebuah pantai. Warga desa di pantai tersebut menyambut dan membantu Malin untuk tinggal dan bekerja di sana.
        </Text>
        <Text style={styles.storyText}>
          Malin bekerja dengan sangat rajin mengolah tanah desa yang subur dan menjadi semakin sukses. Malin memiliki 100 orang pekerja dan sejumlah kapal dagang sendiri. Setelah berhasil menjadi orang kaya, Malin pun mempersunting anak seorang saudagar kaya.
        </Text>
        <Text style={styles.storyText}>
          Sementara itu, Ibu Mande tidak pernah mendapatkan kabar apapun dari Malin selepas kepergiannya. Selama bertahun-tahun, Ibu Mande hanya bisa memandangi laut sambil berdoa agar anaknya selamat dan mengirimkan kabar, atau bahkan kembali ke desa.
        </Text>
        <Text style={styles.storyText}>
          Setiap kali ada kapal besar yang bersandar di desa, Ibu Mande selalu bertanya kepada nakhoda dan awak kapal tentang anaknya. Namun, tidak pernah ada yang membawa kabar atau titipan dari Malin.
        </Text>
        <Text style={styles.storyText}>
          Suatu ketika, Malin bersama istri dan beberapa anak buah kapal pergi berlayar menggunakan kapal yang besar. Setelah berlayar beberapa saat, kapalnya berlabuh di suatu pulau. Tanpa disadari, ternyata itu adalah kampung halaman Malin.
        </Text>
        <Text style={styles.storyText}>
          Melihat kapal besar yang berlabuh, warga desa, termasuk Ibu Mande beramai-ramai berkumpul di tepi pantai. Mereka ingin menyambut kapal yang dikira milik seorang sultan atau pangeran itu.
        </Text>
        <Text style={styles.storyText}>
          Dari kejauhan, terlihat sepasang pemuda dan pemudi berdiri di anjungan, mengenakan pakaian yang mewah. Ibu Mande melihat dan menyadari bahwa sang pemuda adalah Malin. Segera setelah kapal berlabuh dan kedua pemuda itu turun dari kapal, Ibu Mande berlari mendekati anaknya.
        </Text>
        <Text style={styles.storyText}>
          Dari dekat, Ibu Mande melihat bekas luka di lengan sang pemuda dan menjadi semakin yakin bahwa pemuda itu adalah Malin. Ia kemudian memeluk Malin, sambil memanggil namanya dan bertanya tentang kabarnya.
        </Text>
        <Text style={styles.storyText}>
          Istri Malin yang berdiri di dekat Malin, terkejut melihat seorang wanita tua berpakaian compang-camping memeluk suaminya sambil mengaku sebagai ibunya. Maklum, selama ini Malin mengaku bahwa kedua orang tuanya adalah bangsawan dan sudah meninggal.
        </Text>
        <Text style={styles.storyText}>
          Istri Malin pun bertanya kepada Malin tentang siapa wanita itu sebenarnya. Karena malu kepada istrinya, Malin kemudian mendorong ibunya dan berkata kasar kepada Ibu Mande.
        </Text>
        <Text style={styles.storyText}>
          Malin tidak mengakuinya sebagai ibu dan mengatakan bahwa ibunya tidak seperti Ibu Mande yang kotor dan miskin. Setelah itu, Malin memerintahkan istri dan anak buahnya untuk bergegas kembali ke kapal untuk berlayar.
        </Text>
        <Text style={styles.storyText}>
          Ibu Mande yang sudah tua renta terkapar di pasir, menangis, dan sakit hati sampai pingsan. Setelah akhirnya tersadar, Ibu Mande tinggal sendiri di pantai dan warga desa yang tadinya ramai sudah meninggalkannya. Ibu Mande juga melihat bahwa kapal Malin dan istrinya sudah berlayar jauh dari pantai. Sambil menangis, Ibu Mande berlutut sambil mengangkat tangan untuk berdoa kepada Tuhan.
        </Text>
        <Text style={styles.storyText}>
          Ibu Mande berdoa jika pemuda tadi bukan Malin Kundang, Ibu Mande memaafkan perbuatannya. Tapi, jika pemuda itu adalah benar Malin Kundang, maka Ibu Mande mengutuknya untuk menjadi sebuah batu.
        </Text>
        <Text style={styles.storyText}>
          Setelah Ibu Mande berdoa, langit yang tadinya cerah tiba-tiba berubah menjadi gelap. Hujan deras dan badai pun muncul. Kapal Malin yang sedang berlayar pun hancur berkeping-keping disambar petir.
        </Text>
        <Text style={styles.storyText}>
          Keesokan harinya ketika badai sudah reda, puing-puing kapal yang sudah berubah menjadi batu tersapu ombak ke suatu pulau. Di antara puing-puing yang terdampar di pantai, ada satu bongkahan batu yang berbentuk seperti tubuh manusia yang menunduk, beserta ikan teri, ikan belanak, dan ikan tenggiri yang berenang di sela-sela batu itu.
        </Text>
        <Text style={styles.storyText}>
          Masyarakat setempat mempercayai batu itu adalah tubuh Malin yang dikutuk berubah menjadi batu karena durhaka kepada ibunya, dan ikan-ikan di sekitarnya adalah serpihan tubuh istri Malin yang sedang mencari suaminya.
        </Text>
        <Text style={styles.title}>Pesan Moral</Text>
        <Text style={styles.storyText}>
          "Pelajaran utama yang terkandung di dalam cerita Malin Kundang adalah seorang anak harus selalu menghormati orang tua yang telah membesarkannya. Selain itu, pelajaran lain yang dapat dipetik adalah kita harus selalu rendah hati dan tidak sombong dengan segala kesuksesan yang sudah diraih."
        </Text>
        <Text style={styles.sumber}>
          Sumber: https://indonesiakaya.com/pustaka-indonesia/cerita-rakyat-sumatra-barat-legenda-malin-kundang/
        </Text>
      </ScrollView>
    </View>
  );
};

export default MalinKundang;

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
    marginRight: 20,
    marginBottom: 20,
  },
  backText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});
