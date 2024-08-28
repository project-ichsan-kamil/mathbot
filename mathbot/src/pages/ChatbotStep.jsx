const steps = [
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


export default steps;