const stepsMateri1 = [
    {
      message: "Hai! Hari ini kita akan berbicara tentang sesuatu yang sering kita lakukan tanpa kita sadari. Pernahkah kamu membagi sesuatu dengan temanmu? Misalnya, membagi kue atau permen. Bagaimana kamu biasanya membaginya?",
      options: [
        { text: "Ya, biasanya saya membaginya sama rata.", response: "Menarik! Kamu suka membagi dengan adil.", nextStep: 1 },
        { text: "Kadang saya memberikan lebih banyak ke teman saya.", response: "Kamu sangat murah hati!", nextStep: 1 },
        { text: "Saya mengambil lebih banyak untuk diri saya sendiri.", response: "Itu mungkin terjadi saat kamu sangat lapar!", nextStep: 1 },
      ],
    },
    {
      message: "Sekarang, bagaimana kalau kamu punya 4 kue, dan temanmu hanya punya 2 kue? Menurutmu, apakah pembagian ini adil?",
      options: [
        { text: "Tidak, itu tidak adil.", response: "Kamu benar, jumlahnya tidak sama.", nextStep: 2 },
        { text: "Itu adil jika saya lebih lapar.", response: "Itu bisa jadi alasan yang baik!", nextStep: 2 },
        { text: "Tergantung bagaimana perasaan teman saya.", response: "Perasaan teman memang penting dalam berbagi.", nextStep: 2 },
      ],
    },
    {
      message: "Bagus, mari kita lihat lagi. Jika kita membandingkan jumlah kue yang kamu miliki dengan jumlah kue temanmu, apa yang bisa kamu katakan tentang perbandingan ini?",
      options: [
        { text: "Jumlah kue saya dua kali lebih banyak.", response: "Benar, jumlah kue kamu dua kali lebih banyak daripada kue temanmu.", nextStep: 3 },
        { text: "Jumlah kue saya sama dengan jumlah kue teman saya.", response: "Tidak tepat. Sebenarnya, kamu punya lebih banyak kue, tepatnya dua kali lebih banyak daripada kue temanmu.", nextStep: 3 },
        { text: "Jumlah kue saya lebih sedikit daripada jumlah kue teman saya.", response: "Tidak, jumlah kue kamu lebih banyak daripada kue temanmu, bukan lebih sedikit. Coba periksa kembali jumlah masing-masing.", nextStep: 3 },
      ],
    },
    {
      message: "Sekarang, bagaimana kalau kita mengatakan bahwa jumlah kue kamu dibandingkan dengan jumlah kue temanmu adalah 4:2? Apa artinya menurutmu?",
      options: [
        { text: "Itu berarti saya punya 4 kue dan teman saya punya 2.", response: "Benar! 4:2 berarti kamu punya 4 kue dan temanmu punya 2 kue.", nextStep: 4 },
        { text: "Saya tidak tahu.", response: "Tidak masalah, mari kita pelajari bersama. 4:2 artinya kamu punya 4 kue dan temanmu punya 2 kue.", nextStep: 4 },
      ],
    },
    {
      message: "Mari kita tarik kesimpulan. Rasio adalah cara untuk membandingkan dua jumlah atau lebih. Dalam kasus ini, rasio 4:2 menunjukkan bahwa jumlah kue kamu dibandingkan dengan jumlah kue temanmu adalah 4 banding 2. Rasio juga bisa disederhanakan seperti yang kita lakukan dengan 4:2 menjadi 2:1.",
      options: [
        { text: "[Lanjut]", response: "Lanjut", nextStep: 5 },
      ],
    },
    {
      message: "Sekarang kita coba satu contoh soal. Misalkan kamu punya 12 apel, dan temanmu punya 8 apel. Bagaimana kamu bisa menuliskan rasio jumlah apel kamu dengan apel temanmu?",
      options: [
        { text: "Rasionya adalah 12:8.", response: "Benar! Rasio 12:8 menunjukkan bahwa kamu memiliki 12 apel dan temanmu memiliki 8 apel.", nextStep: 6 },
        { text: "Rasionya adalah 3:2", response: "Bagus! Kamu benar, rasio 12:8 bisa disederhanakan menjadi 3:2.", nextStep: 6 },
        { text: "Saya tidak tahu.", response: "Tidak apa-apa. Rasio 12:8 berarti kamu punya 12 apel dan temanmu 8. Kita bisa menyederhanakannya jadi 3:2 dengan membagi kedua angka dengan 4.", nextStep: 6 },
      ],
    },
    {
      message: "Sekarang saatnya kamu berlatih sendiri. Misalkan kamu punya 15 kelereng, dan temanmu punya 10 kelereng. Apa rasio jumlah kelereng kamu dengan jumlah kelereng temanmu?",
      options: [
        { text: "15:10", response: "Tepat sekali! Rasio jumlah kelereng kamu dengan jumlah kelereng temanmu adalah 15:10.", nextStep: 7 },
        { text: "5:10", response: "Tidak, rasio 5:10 tidak menggambarkan jumlah kelereng yang kamu miliki dibandingkan dengan temanmu. Coba hitung lagi perbandingannya.", nextStep: 7 },
        { text: "2:3", response: "Hampir tepat, tapi penyederhanaan rasionya terbalik. Seharusnya perbandingannya adalah 15:10 dan dapat disederhanakan menjadi 3:2, bukan 2:3.", nextStep: 7 },
        { text: "10:15", response: "Rasio ini terbalik. Seharusnya jumlah kelereng kamu lebih banyak, jadi rasionya adalah 15:10, bukan 10:15.", nextStep: 7 },
      ],
    },
    {
      message: "Perhatikan Gambar berikut! Bagaimana kamu menuliskan rasio jumlah gelas berisi susu dengan jumlah gelas berisi coklat?",
      options: [
        { text: "4:6", response: "Tepat sekali! Rasio jumlah gelas berisi susu dengan jumlah gelas berisi coklat adalah 4:6.", nextStep: 8 },
        { text: "6:4", response: "Tidak tepat. Perbandingan ini terbalik. Seharusnya rasio yang benar adalah 4:6 atau 2:3, bukan 6:4.", nextStep: 8 },
        { text: "2:3", response: "Bagus! 2:3 adalah penyederhanaan dari rasio 4:6. Ini adalah cara lain untuk menuliskan perbandingan jumlah gelas susu dengan coklat.", nextStep: 8 },
        { text: "3:2", response: "Coba lagi! Rasio 3:2 tidak menggambarkan perbandingan jumlah gelas susu dan coklat yang kamu miliki. Pastikan kamu menghitung perbandingan yang benar.", nextStep: 8 },
      ],
    },
    {
      message: "Kamu sudah bekerja dengan sangat baik hari ini! Sekarang kamu tahu bahwa rasio adalah cara untuk membandingkan dua jumlah atau lebih, dan kamu juga tahu bagaimana menyederhanakan rasio.",
      options: [
        { text: "[Lanjut]", response: "Lanjut", nextStep: 9 },
      ],
    },
    {
      message: "Sampai jumpa di materi berikutnya di mana kita akan mempelajari lebih dalam tentang cara menyederhanakan dan membandingkan rasio!",
      options: [],
    },
  ];


  const stepsMateri2 = [
    {
      message: "Hai, selamat datang kembali! Minggu lalu, kita belajar tentang rasio. Masih ingat apa itu rasio?",
      options: [
        { text: "Rasio adalah perbandingan antara dua jumlah.", response: "Tepat sekali! Rasio adalah cara untuk membandingkan dua jumlah atau lebih.", nextStep: 1 },
        { text: "Saya tidak ingat.", response: "Tidak masalah, mari kita ingat bersama. Rasio adalah perbandingan antara dua jumlah atau lebih.", nextStep: 1 },
      ],
    },
    {
      message: "Masih ingatkah pada materi sebelumnya kita juga telah belajar tentang bagaimana menyederhanakan rasio? Hari ini, kita akan membahasnya lebih dalam lagi agar kamu lebih paham dan bisa menggunakannya dengan lebih baik.",
      options: [
        { text: "[Lanjut]", response: "Lanjut", nextStep: 2 },
      ],
    },
    {
      message: "Jika kamu punya rasio 6:4, menurutmu bagaimana caranya menyederhanakan rasio ini? Apakah kamu bisa memikirkan cara untuk membuat angka-angka ini lebih kecil tetapi tetap mempertahankan perbandingannya?",
      options: [
        { text: "Membagi keduanya dengan 2.", response: "Betul sekali! Jika kita membagi 6 dan 4 dengan 2, kita mendapatkan 3:2. Jadi, rasio 6:4 bisa disederhanakan menjadi 3:2.", nextStep: 3 },
        { text: "Menambah angka pada keduanya.", response: "Bukan, menambah angka justru akan mengubah perbandingan. Coba pikirkan apakah kita bisa membagi kedua angka dengan angka yang sama.", nextStep: 3 },
      ],
    },
    {
      message: "Mari kita coba dengan contoh lain. Misalkan ada 12 siswa laki-laki dan 8 siswa perempuan di kelas. Bagaimana kamu menuliskan rasio siswa laki-laki dengan siswa perempuan?",
      options: [
        { text: "Rasionya adalah 12:8.", response: "Benar! Rasio 12:8 menunjukkan bahwa ada 12 siswa laki-laki dan 8 siswa perempuan. Kamu bisa menyederhanakan rasio ini menjadi 3:2 dengan membagi kedua angka dengan 4. Apakah kamu melihat bagaimana penyederhanaan ini mempermudah perbandingan?", nextStep: 4 },
        { text: "Rasionya adalah 3:2.", response: "Bagus sekali! Rasio 12:8 bisa disederhanakan menjadi 3:2 dengan membagi kedua angka dengan 4. Ini menunjukkan bahwa meskipun angka berbeda, rasionya tetap sama.", nextStep: 4 },
      ],
    },
    {
      message: "Sekarang saatnya latihan! Jika ada 18 siswa yang suka olahraga dan 12 siswa yang suka seni, bagaimana kamu menuliskan rasio siswa yang suka olahraga dengan siswa yang suka seni?",
      options: [
        { text: "Rasionya adalah 18:12.", response: "Bagus sekali! Rasio 18:12 bisa disederhanakan menjadi 3:2 dengan membagi kedua angka dengan 6. Ini berarti ada 3 siswa yang suka olahraga untuk setiap 2 siswa yang suka seni.", nextStep: 5 },
        { text: "Rasionya adalah 6:4.", response: "Coba lagi. Rasio 18:12 bisa disederhanakan dengan membagi kedua angka dengan 6, sehingga menjadi 3:2. 6:4 tidak benar karena angka-angka tersebut tidak berkaitan dengan 18:12.", nextStep: 5 },
        { text: "Rasionya adalah 3:2.", response: "Tepat sekali! Rasio 18:12 bisa disederhanakan menjadi 3:2. Ini berarti ada 3 siswa yang suka olahraga untuk setiap 2 siswa yang suka seni.", nextStep: 5 },
        { text: "Rasionya adalah 9:6.", response: "Tidak tepat. Rasio 9:6 memang bisa disederhanakan menjadi 3:2, tetapi ini bukan perbandingan yang benar untuk 18:12. Coba pikirkan bagaimana kita bisa menyederhanakan 18:12.", nextStep: 5 },
      ],
    },
    {
      message: "Sekarang, bagaimana jika kita punya dua rasio: 18:12 dan 3:2. Menurutmu, apakah kedua rasio ini sama atau berbeda?",
      options: [
        { text: "Mereka sama.", response: "Tepat sekali! Meskipun angka-angkanya berbeda, rasio 18:12 bisa disederhanakan menjadi 3:2, jadi mereka sebenarnya sama. Ini menunjukkan bahwa rasio yang sama dapat ditulis dengan angka yang berbeda tetapi tetap mewakili perbandingan yang sama.", nextStep: 6 },
        { text: "Mereka berbeda.", response: "Sebenarnya, mereka sama. Rasio 18:12 bisa disederhanakan menjadi 3:2, sehingga kedua rasio ini memiliki perbandingan yang sama.", nextStep: 6 },
      ],
    },
    {
      message: "Mari kita coba lagi dengan contoh lain. Misalkan di kelas pertama ada 24 siswa laki-laki dan 16 siswa perempuan, sedangkan di kelas kedua ada 12 siswa laki-laki dan 8 siswa perempuan. Apakah rasio siswa laki-laki dengan siswa perempuan di kedua kelas ini sama atau berbeda?",
      options: [
        { text: "Rasionya sama, yaitu 3:2.", response: "Jawaban yang benar adalah bahwa rasio di kedua kelas sama, yaitu 3:2. Walaupun jumlah siswa berbeda, perbandingan antara laki-laki dan perempuan tetap sama di kedua kelas ini.", nextStep: 7 },
        { text: "Berbeda, karena angka-angkanya berbeda.", response: "Meskipun angka-angkanya berbeda, perbandingan atau rasionya sama. Di kedua kelas, kita bisa menyederhanakan rasionya menjadi 3:2.", nextStep: 7 },
      ],
    },
    {
      message: "Sekarang giliranmu untuk mencoba. Jika ada 30 rumah tangga yang memiliki mobil dan 20 rumah tangga yang tidak memiliki mobil, dan di kota lain ada 15 rumah tangga yang memiliki mobil dan 10 rumah tangga yang tidak memiliki mobil, apakah rasio kepemilikan mobil di kedua kota ini sama?",
      options: [
        { text: "Ya, rasionya sama.", response: "Tepat sekali! Rasio 30:20 di kota pertama bisa disederhanakan menjadi 3:2, sama seperti rasio 15:10 di kota kedua yang juga bisa disederhanakan menjadi 3:2. Ini berarti perbandingan kepemilikan mobil di kedua kota ini sama.", nextStep: 8 },
        { text: "Tidak, rasionya berbeda.", response: "Mari kita coba hitung bersama. Rasio 30:20 bisa disederhanakan menjadi 3:2, dan begitu pula rasio 15:10 di kota kedua. Jadi, kedua rasio ini sama.", nextStep: 8 },
      ],
    },
    {
      message: "Kamu telah membuat kemajuan besar hari ini! Sekarang kamu tahu bagaimana menyederhanakan rasio dan membandingkan rasio yang berbeda. Ini akan sangat membantu kamu dalam menyelesaikan soal-soal perbandingan di masa depan.",
      options: [
        { text: "[Lanjut]", response: "Lanjut", nextStep: 9 },
      ],
    },
    {
      message: "Sebelum kita akhiri, apakah ada sesuatu yang ingin kamu tanyakan?",
      options: [
        { text: "Tidak, saya merasa sudah paham semuanya.", response: "Bagus sekali! Saya senang kamu merasa sudah paham. Sampai jumpa di materi berikutnya di mana kita akan mempelajari tentang hubungan antara rasio dengan persamaan linear.", nextStep: 10 },
        { text: "Bolehkah saya mendapatkan lebih banyak contoh soal untuk latihan?", response: "Tentu, saya akan menyiapkan soal tambahan untuk kamu berlatih. Terus semangat belajar!", nextStep: 11 },
        { text: "Saya masih bingung tentang cara menyederhanakan rasio tertentu.", response: "Tidak masalah, mari kita ulangi bagian yang kamu bingungkan. Kita bisa membahasnya lebih lanjut. Silahkan bertanya kepada gurumu, ya!", nextStep: 10 },
        { text: "Apa hubungan antara rasio dan konsep lain seperti persamaan?", response: "Pertanyaan yang bagus! Kita akan membahas hubungan antara rasio dengan persamaan linear di materi berikutnya. Pastikan kamu mengikuti ya!", nextStep: 10 },
      ],
    },
    {
      message: "Mari kita coba soal berikut ini. Misalkan ada 7.5 liter jus jeruk dan 5 liter jus apel. Bagaimana kamu menuliskan rasio jumlah jus jeruk dengan jus apel?",
      options: [
        { text: "Rasionya adalah 7.5:5.", response: "Benar! Rasio 7.5:5 sudah benar. Ini dapat disederhanakan menjadi 3:2. Artinya, untuk setiap 3 liter jus jeruk, ada 2 liter jus apel.", nextStep: 12 },
        { text: "Rasionya adalah 3:2.", response: "Tepat sekali! Rasio 7.5:5 dapat disederhanakan menjadi 3:2. Ini berarti ada 3 liter jus jeruk untuk setiap 2 liter jus apel.", nextStep: 12 },
        { text: "Rasionya adalah 15:10.", response: "Tidak, 15:10 adalah hasil dari mengalikan rasio 7.5:5 dengan 2, bukan hasil penyederhanaan. Coba hitung ulang untuk mendapatkan rasio yang lebih sederhana.", nextStep: 12 },
        { text: "Rasionya adalah 2:3.", response: "Tidak, rasio 2:3 tidak benar untuk perbandingan ini. Coba lihat kembali rasio 7.5:5 dan cara penyederhanaannya.", nextStep: 12 },
      ],
    },
    {
      message: "Sekarang mari kita lihat lebih dalam. Dalam soal sebelumnya, rasio 7.5:5 disederhanakan menjadi 3:2. Apa artinya rasio 3:2 ini?",
      options: [
        { text: "Ini berarti untuk setiap 3 liter jus jeruk, ada 2 liter jus apel.", response: "Tepat sekali! Rasio 3:2 berarti bahwa untuk setiap 3 liter jus jeruk, ada 2 liter jus apel. Ini menggambarkan perbandingan antara kedua jenis jus.", nextStep: 13 },
        { text: "Ini berarti ada 3 liter jus jeruk dan 2 liter jus apel secara keseluruhan.", response: "Tidak benar. Rasio 3:2 bukan jumlah total jus jeruk dan apel, melainkan perbandingan antara keduanya.", nextStep: 13 },
        { text: "Ini berarti ada 5 liter jus jeruk dan 3 liter jus apel.", response: "Salah, rasio 3:2 tidak menunjukkan jumlah spesifik jus jeruk dan apel. Rasio ini menggambarkan perbandingan, bukan totalnya.", nextStep: 13 },
        { text: "Ini berarti rasio jus jeruk dan jus apel sama.", response: "Tidak benar. Rasio 3:2 menunjukkan perbandingan, bukan kesamaan jumlah jus jeruk dan jus apel.", nextStep: 13 },
      ],
    },
    {
      message: "Kamu sudah bekerja dengan sangat baik hari ini! Sekarang kamu tahu bahwa rasio adalah cara untuk membandingkan dua jumlah atau lebih, dan kamu juga tahu bagaimana menyederhanakan rasio.",
      options: [
        { text: "[Lanjut]", response: "Lanjut", nextStep: 14 },
      ],
    },
  ];
  
  
export default {stepsMateri1, stepsMateri2};