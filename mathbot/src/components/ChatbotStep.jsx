import { message } from "antd";
import image from "../assets/img/index";

export const getSteps = (material) => {
    const steps = {
        materi1: [
            {
                message: [
                    "Hai [Nama Siswa]!",
                    "Hari ini kita akan berbicara tentang sesuatu yang sering kita lakukan tanpa kita sadari. Pernahkah kamu membagi sesuatu dengan temanmu?",
                    "Misalnya, membagi kue atau permen. Bagaimana kamu biasanya membaginya?",
                ],
                image: image.mathbot_1_1,
                options: [
                    {
                        text: "Ya, biasanya saya membaginya sama rata.",
                        response: "Menarik! Kamu suka membagi dengan adil.",
                        nextStep: 1,
                    },
                    {
                        text: "Kadang saya memberikan lebih banyak ke teman saya.",
                        response: "Kamu sangat murah hati!",
                        nextStep: 1,
                    },
                    {
                        text: "Saya mengambil lebih banyak untuk diri saya sendiri.",
                        response: "Itu mungkin terjadi saat kamu sangat lapar!",
                        nextStep: 1,
                    },
                ],
            },
            {
                message: [
                    "Sekarang, bagaimana kalau kamu punya 4 kue, dan temanmu hanya punya 2 kue? Menurutmu, apakah pembagian ini adil?",
                ],
                options: [
                    {
                        text: "Tidak, itu tidak adil.",
                        response: "Kamu benar, jumlahnya tidak sama.",
                        nextStep: 2,
                    },
                    {
                        text: "Itu adil jika saya lebih lapar.",
                        response: "Itu bisa jadi alasan yang baik!",
                        nextStep: 2,
                    },
                    {
                        text: "Tergantung bagaimana perasaan teman saya.",
                        response:
                            "Perasaan teman memang penting dalam berbagi.",
                        nextStep: 2,
                    },
                ],
            },
            {
                message: [
                    "Bagus, mari kita lihat lagi.",
                    "Jika kita membandingkan jumlah kue yang kamu miliki dengan jumlah kue temanmu, apa yang bisa kamu katakan tentang perbandingan ini?",
                ],
                options: [
                    {
                        text: "Jumlah kue saya dua kali lebih banyak.",
                        response:
                            "Benar, jumlah kue kamu dua kali lebih banyak daripada kue temanmu.",
                        nextStep: 3,
                    },
                    {
                        text: "Jumlah kue saya sama dengan jumlah kue teman saya.",
                        response:
                            "Tidak tepat. Sebenarnya, kamu punya lebih banyak kue, tepatnya dua kali lebih banyak daripada kue temanmu.",
                        nextStep: 3,
                    },
                    {
                        text: "Jumlah kue saya lebih sedikit daripada jumlah kue teman saya.",
                        response:
                            "Tidak, jumlah kue kamu lebih banyak daripada kue temanmu, bukan lebih sedikit. Coba periksa kembali jumlah masing-masing.",
                        nextStep: 3,
                    },
                ],
            },
            {
                message: [
                    "Sekarang, bagaimana kalau kita mengatakan bahwa jumlah kue kamu dibandingkan dengan jumlah kue temanmu adalah 4:2? Apa artinya menurutmu?",
                ],
                options: [
                    {
                        text: "Itu berarti saya punya 4 kue dan teman saya punya 2.",
                        response:
                            "Benar! 4:2 berarti kamu punya 4 kue dan temanmu punya 2 kue.",
                        nextStep: 4,
                    },
                    {
                        text: "Itu berarti saya punya 2 kue dan teman saya punya 4 kue.",
                        response:
                            "Tidak, 4:2 berarti kamu punya lebih banyak kue daripada temanmu, bukan sebaliknya.",
                        nextStep: 4,
                    },
                    {
                        text: "Saya tidak tahu.",
                        response:
                            "Tidak masalah, mari kita pelajari bersama. 4:2 artinya kamu punya 4 kue dan temanmu punya 2 kue.",
                        nextStep: 4,
                    },
                ],
            },
            {
                message: [
                    "Mari kita tarik kesimpulan.",
                    "Rasio adalah cara untuk membandingkan dua jumlah atau lebih.",
                    "Dalam kasus ini, rasio 4:2 menunjukkan bahwa jumlah kue kamu dibandingkan dengan jumlah kue temanmu adalah 4 banding 2. ",
                    "Rasio juga bisa disederhanakan seperti yang kita lakukan dengan 4:2 menjadi 2:1."
                ],
                options: [{ text: "Lanjut", response: "Lanjut", nextStep: 5 }],
            },
            {
                message:[
                    "Sekarang kita coba satu contoh soal.", 
                    "Misalkan kamu punya 12 apel, dan temanmu punya 8 apel. Bagaimana kamu bisa menuliskan rasio jumlah apel kamu dengan apel temanmu?"],
                options: [
                    {
                        text: "Rasionya adalah 12:8.",
                        response:
                            "Benar! Rasio 12:8 menunjukkan bahwa kamu memiliki 12 apel dan temanmu memiliki 8 apel.",
                        nextStep: 6,
                    },
                    {
                        text: "Rasionya adalah 3:2",
                        response:
                            "Bagus! Kamu benar, rasio 12:8 bisa disederhanakan menjadi 3:2.",
                        nextStep: 6,
                    },
                    {
                        text: "Saya tidak tahu.",
                        response:
                            "Tidak apa-apa. Rasio 12:8 berarti kamu punya 12 apel dan temanmu 8. Kita bisa menyederhanakannya jadi 3:2 dengan membagi kedua angka dengan 4.",
                        nextStep: 6,
                    },
                ],
            },
            {
                message:[
                    "Sekarang saatnya kamu berlatih sendiri.", 
                    "Misalkan kamu punya 15 kelereng, dan temanmu punya 10 kelereng. Apa rasio jumlah kelereng kamu dengan jumlah kelereng temanmu?"],
                options: [
                    {
                        text: "15:10",
                        response:
                            "Tepat sekali! Rasio jumlah kelereng kamu dengan jumlah kelereng temanmu adalah 15:10.",
                        nextStep: 7,
                    },
                    {
                        text: "5:10",
                        response:
                            "Tidak, rasio 5:10 tidak menggambarkan jumlah kelereng yang kamu miliki dibandingkan dengan temanmu. Coba hitung lagi perbandingannya.",
                        nextStep: 7,
                    },
                    {
                        text: "2:3",
                        response:
                            "Hampir tepat, tapi penyederhanaan rasionya terbalik. . Seharusnya rasio 15:10 dapat disederhanakan menjadi 3:2, bukan 2:3.",
                        nextStep: 7,
                    },
                    {
                        text: "10:15",
                        response:
                            "Rasio ini terbalik. Seharusnya jumlah kelereng kamu lebih banyak, jadi rasionya adalah 15:10, bukan 10:15.",
                        nextStep: 7,
                    },
                ],
            },
            {
                message:[
                    "Perhatikan Gambar dibawah ini!",
                    "Bagaimana kamu menuliskan rasio jumlah gelas berisi susu dengan jumlah gelas berisi coklat?"],
                image: image.mathbot_1_2,
                options: [
                    {
                        text: "4:6",
                        response:
                            "Tepat sekali! Rasio jumlah gelas berisi susu dengan jumlah gelas berisi coklat adalah 4:6.",
                        nextStep: 8,
                    },
                    {
                        text: "6:4",
                        response:
                            "Tidak tepat. Perbandingan ini terbalik. Seharusnya rasio yang benar adalah 4:6 atau 2:3, bukan 6:4.",
                        nextStep: 8,
                    },
                    {
                        text: "2:3",
                        response:
                            "Bagus! 2:3 adalah penyederhanaan dari rasio 4:6. Ini adalah cara lain untuk menuliskan perbandingan jumlah gelas susu dengan coklat.",
                        nextStep: 8,
                    },
                    {
                        text: "3:2",
                        response:
                            "Coba lagi! Rasio 3:2 tidak menggambarkan perbandingan jumlah gelas susu dan coklat yang kamu miliki. Pastikan kamu menghitung rasionya dengan benar.",
                        nextStep: 8,
                    },
                ],
            },
            {
                message:[
                    "Baiklah, kamu sudah bekerja dengan sangat baik pada materi ini ini!",
                    "Sekarang kamu tahu bahwa rasio adalah cara untuk membandingkan dua jumlah atau lebih, dan kamu juga tahu bagaimana cara untuk menyederhanakan rasio."
                ],
                options: [{ text: "Lanjut", response: "Lanjut", nextStep: 9 }],
            },
            {
                message:[
                    "Sampai jumpa di materi berikutnya di mana kita akan mempelajari lebih dalam tentang cara menyederhanakan dan membandingkan rasio!"],
                options: [],
            },
        ],
        materi2: [
            {
                message:
                    "Hai, selamat datang kembali! Minggu lalu, kita belajar tentang rasio. Masih ingat apa itu rasio?",
                options: [
                    {
                        text: "Rasio adalah perbandingan antara dua jumlah.",
                        response:
                            "Tepat sekali! Rasio adalah cara untuk membandingkan dua jumlah atau lebih.",
                        nextStep: 1,
                        isFinish: false,
                    },
                    {
                        text: "Saya tidak ingat.",
                        response:
                            "Tidak masalah, mari kita ingat bersama. Rasio adalah perbandingan antara dua jumlah atau lebih.",
                        nextStep: 1,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Masih ingatkah pada materi sebelumnya kita juga telah belajar tentang bagaimana menyederhanakan rasio? Hari ini, kita akan membahasnya lebih dalam lagi agar kamu lebih paham dan bisa menggunakannya dengan lebih baik.",
                options: [
                    {
                        text: "Lanjut",
                        response: "Lanjut",
                        nextStep: 2,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Jika kamu punya rasio 6:4, menurutmu bagaimana caranya menyederhanakan rasio ini? Apakah kamu bisa memikirkan cara untuk membuat angka-angka ini lebih kecil tetapi tetap mempertahankan perbandingannya?",
                options: [
                    {
                        text: "Membagi keduanya dengan 2.",
                        response:
                            "Betul sekali! Jika kita membagi 6 dan 4 dengan 2, kita mendapatkan 3:2. Jadi, rasio 6:4 bisa disederhanakan menjadi 3:2.",
                        nextStep: 3,
                        isFinish: false,
                    },
                    {
                        text: "Menambah angka pada keduanya.",
                        response:
                            "Bukan, menambah angka justru akan mengubah perbandingan. Coba pikirkan apakah kita bisa membagi kedua angka dengan angka yang sama.",
                        nextStep: 3,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Mari kita coba dengan contoh lain. Misalkan ada 12 siswa laki-laki dan 8 siswa perempuan di kelas. Bagaimana kamu menuliskan rasio siswa laki-laki dengan siswa perempuan?",
                options: [
                    {
                        text: "Rasionya adalah 12:8.",
                        response:
                            "Benar! Rasio 12:8 menunjukkan bahwa ada 12 siswa laki-laki dan 8 siswa perempuan. Kamu bisa menyederhanakan rasio ini menjadi 3:2 dengan membagi kedua angka dengan 4. Apakah kamu melihat bagaimana penyederhanaan ini mempermudah perbandingan?",
                        nextStep: 4,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 3:2.",
                        response:
                            "Bagus sekali! Rasio 12:8 bisa disederhanakan menjadi 3:2 dengan membagi kedua angka dengan 4. Ini menunjukkan bahwa meskipun angka berbeda, rasionya tetap sama.",
                        nextStep: 4,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Sekarang saatnya latihan! Jika ada 18 siswa yang suka olahraga dan 12 siswa yang suka seni, bagaimana kamu menuliskan rasio siswa yang suka olahraga dengan siswa yang suka seni?",
                options: [
                    {
                        text: "Rasionya adalah 18:12.",
                        response:
                            "Bagus sekali! Rasio 18:12 bisa disederhanakan menjadi 3:2 dengan membagi kedua angka dengan 6. Ini berarti ada 3 siswa yang suka olahraga untuk setiap 2 siswa yang suka seni.",
                        nextStep: 5,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 6:4.",
                        response:
                            "Coba lagi. Rasio 18:12 bisa disederhanakan dengan membagi kedua angka dengan 6, sehingga menjadi 3:2. 6:4 tidak benar karena angka-angka tersebut tidak berkaitan dengan 18:12.",
                        nextStep: 5,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 3:2.",
                        response:
                            "Tepat sekali! Rasio 18:12 bisa disederhanakan menjadi 3:2. Ini berarti ada 3 siswa yang suka olahraga untuk setiap 2 siswa yang suka seni.",
                        nextStep: 5,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 9:6.",
                        response:
                            "Tidak tepat. Rasio 9:6 memang bisa disederhanakan menjadi 3:2, tetapi ini bukan perbandingan yang benar untuk 18:12. Coba pikirkan bagaimana kita bisa menyederhanakan 18:12.",
                        nextStep: 5,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Sekarang, bagaimana jika kita punya dua rasio: 18:12 dan 3:2. Menurutmu, apakah kedua rasio ini sama atau berbeda?",
                options: [
                    {
                        text: "Mereka sama.",
                        response:
                            "Tepat sekali! Meskipun angka-angkanya berbeda, rasio 18:12 bisa disederhanakan menjadi 3:2, jadi mereka sebenarnya sama. Ini menunjukkan bahwa rasio yang sama dapat ditulis dengan angka yang berbeda tetapi tetap mewakili perbandingan yang sama.",
                        nextStep: 6,
                        isFinish: false,
                    },
                    {
                        text: "Mereka berbeda.",
                        response:
                            "Sebenarnya, mereka sama. Rasio 18:12 bisa disederhanakan menjadi 3:2, sehingga kedua rasio ini memiliki perbandingan yang sama.",
                        nextStep: 6,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Mari kita coba lagi dengan contoh lain. Misalkan di kelas pertama ada 24 siswa laki-laki dan 16 siswa perempuan, sedangkan di kelas kedua ada 12 siswa laki-laki dan 8 siswa perempuan. Apakah rasio siswa laki-laki dengan siswa perempuan di kedua kelas ini sama atau berbeda?",
                options: [
                    {
                        text: "Rasionya sama, yaitu 3:2.",
                        response:
                            "Jawaban yang benar adalah bahwa rasio di kedua kelas sama, yaitu 3:2. Walaupun jumlah siswa berbeda, perbandingan antara laki-laki dan perempuan tetap sama di kedua kelas ini.",
                        nextStep: 7,
                        isFinish: false,
                    },
                    {
                        text: "Berbeda, karena angka-angkanya berbeda.",
                        response:
                            "Meskipun angka-angkanya berbeda, perbandingan atau rasionya sama. Di kedua kelas, kita bisa menyederhanakan rasionya menjadi 3:2.",
                        nextStep: 7,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Sekarang giliranmu untuk mencoba. Jika ada 30 rumah tangga yang memiliki mobil dan 20 rumah tangga yang tidak memiliki mobil, dan di kota lain ada 15 rumah tangga yang memiliki mobil dan 10 rumah tangga yang tidak memiliki mobil, apakah rasio kepemilikan mobil di kedua kota ini sama?",
                options: [
                    {
                        text: "Ya, rasionya sama.",
                        response:
                            "Tepat sekali! Rasio 30:20 di kota pertama bisa disederhanakan menjadi 3:2, sama seperti rasio 15:10 di kota kedua yang juga bisa disederhanakan menjadi 3:2. Ini berarti perbandingan kepemilikan mobil di kedua kota ini sama.",
                        nextStep: 8,
                        isFinish: false,
                    },
                    {
                        text: "Tidak, rasionya berbeda.",
                        response:
                            "Mari kita coba hitung bersama. Rasio 30:20 bisa disederhanakan menjadi 3:2, dan begitu pula rasio 15:10 di kota kedua. Jadi, kedua rasio ini sama.",
                        nextStep: 8,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Kamu telah membuat kemajuan besar hari ini! Sekarang kamu tahu bagaimana menyederhanakan rasio dan membandingkan rasio yang berbeda. Ini akan sangat membantu kamu dalam menyelesaikan soal-soal perbandingan di masa depan.",
                options: [
                    {
                        text: "Lanjut",
                        response: "Lanjut",
                        nextStep: 9,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Sebelum kita akhiri, apakah ada sesuatu yang ingin kamu tanyakan?",
                options: [
                    {
                        text: "Tidak, saya merasa sudah paham semuanya.",
                        response:
                            "Bagus sekali! Saya senang kamu merasa sudah paham. Sampai jumpa di materi berikutnya di mana kita akan mempelajari tentang hubungan antara rasio dengan persamaan linear.",
                        nextStep: 10,
                        isFinish: true,
                    },
                    {
                        text: "Bolehkah saya mendapatkan lebih banyak contoh soal untuk latihan?",
                        response:
                            "Tentu, saya akan menyiapkan soal tambahan untuk kamu berlatih. Terus semangat belajar!",
                        nextStep: 10,
                        isFinish: false,
                    },
                    {
                        text: "Saya masih bingung tentang cara menyederhanakan rasio tertentu.",
                        response:
                            "Tidak masalah, mari kita ulangi bagian yang kamu bingungkan. Kita bisa membahasnya lebih lanjut. Silahkan bertanya kepada gurumu, ya!",
                        nextStep: 10,
                        isFinish: true,
                    },
                    {
                        text: "Apa hubungan antara rasio dan konsep lain seperti persamaan?",
                        response:
                            "Pertanyaan yang bagus! Kita akan membahas hubungan antara rasio dengan persamaan linear di materi berikutnya. Pastikan kamu mengikuti ya!",
                        nextStep: 10,
                        isFinish: true,
                    },
                ],
            },
            {
                message:
                    "Mari kita coba soal berikut ini. Misalkan ada 7.5 liter jus jeruk dan 5 liter jus apel. Bagaimana kamu menuliskan rasio jumlah jus jeruk dengan jus apel?",
                options: [
                    {
                        text: "Rasionya adalah 7.5:5.",
                        response:
                            "Benar! Rasio 7.5:5 sudah benar. Ini dapat disederhanakan menjadi 3:2. Artinya, untuk setiap 3 liter jus jeruk, ada 2 liter jus apel.",
                        nextStep: 11,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 3:2.",
                        response:
                            "Tepat sekali! Rasio 7.5:5 dapat disederhanakan menjadi 3:2. Ini berarti ada 3 liter jus jeruk untuk setiap 2 liter jus apel.",
                        nextStep: 11,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 15:10.",
                        response:
                            "Tidak, 15:10 adalah hasil dari mengalikan rasio 7.5:5 dengan 2, bukan hasil penyederhanaan. Coba hitung ulang untuk mendapatkan rasio yang lebih sederhana.",
                        nextStep: 11,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 2:3.",
                        response:
                            "Tidak, rasio 2:3 tidak benar untuk perbandingan ini. Coba lihat kembali rasio 7.5:5 dan cara penyederhanaannya.",
                        nextStep: 11,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Sekarang mari kita lihat lebih dalam. Dalam soal sebelumnya, rasio 7.5:5 disederhanakan menjadi 3:2. Apa artinya rasio 3:2 ini?",
                options: [
                    {
                        text: "Ini berarti untuk setiap 3 liter jus jeruk, ada 2 liter jus apel.",
                        response:
                            "Tepat sekali! Rasio 3:2 berarti bahwa untuk setiap 3 liter jus jeruk, ada 2 liter jus apel. Ini menggambarkan perbandingan antara kedua jenis jus.",
                        nextStep: 12,
                        isFinish: false,
                    },
                    {
                        text: "Ini berarti ada 3 liter jus jeruk dan 2 liter jus apel secara keseluruhan.",
                        response:
                            "Tidak benar. Rasio 3:2 bukan jumlah total jus jeruk dan apel, melainkan perbandingan antara keduanya.",
                        nextStep: 12,
                        isFinish: false,
                    },
                    {
                        text: "Ini berarti ada 5 liter jus jeruk dan 3 liter jus apel.",
                        response:
                            "Salah, rasio 3:2 tidak menunjukkan jumlah spesifik jus jeruk dan apel. Rasio ini menggambarkan perbandingan, bukan totalnya.",
                        nextStep: 12,
                        isFinish: false,
                    },
                    {
                        text: "Ini berarti rasio jus jeruk dan jus apel sama.",
                        response:
                            "Tidak benar. Rasio 3:2 menunjukkan perbandingan, bukan kesamaan jumlah jus jeruk dan jus apel.",
                        nextStep: 12,
                        isFinish: false,
                    },
                ],
            },
            {
                message:
                    "Kamu sudah bekerja dengan sangat baik hari ini! Sekarang kamu tahu bahwa rasio adalah cara untuk membandingkan dua jumlah atau lebih, dan kamu juga tahu bagaimana menyederhanakan rasio.",
                options: [],
            },
        ],
        materi3: [
            {
                message:
                    "Hai, selamat datang di pertemuan hari ini! Kita akan mempelajari lebih dalam tentang bagaimana rasio dapat dihubungkan dengan persamaan linear. Sebelum kita mulai, apakah kamu sudah siap?",
                options: [
                    {
                        text: "Ya, saya siap.",
                        response: "Bagus! Mari kita mulai.",
                        nextStep: 1,
                    },
                    {
                        text: "Saya masih sedikit bingung tentang rasio.",
                        response:
                            "Tidak apa-apa, kita akan pelajari bersama secara perlahan.",
                        nextStep: 1,
                    },
                ],
            },
            {
                message:
                    "Mari kita mulai dengan contoh sederhana. Ibumu membuat pempek menggunakan 300 gram tepung tapioka dan 90 gram ikan giling. Bagaimana kamu menuliskan rasio tepung tapioka dengan ikan giling?",
                options: [
                    {
                        text: "Rasionya adalah 300:90.",
                        response:
                            "Benar! Rasionya adalah 300:90, tapi kita bisa menyederhanakannya.",
                        nextStep: 2,
                    },
                    {
                        text: "Rasionya adalah 10:3.",
                        response:
                            "Tepat sekali! Rasio 300:90 bisa disederhanakan menjadi 10:3 dengan membagi kedua angka dengan 30.",
                        nextStep: 2,
                    },
                    {
                        text: "Rasionya adalah 3:1.",
                        response:
                            "Tidak, 3:1 bukan hasil dari penyederhanaan rasio 300:90. Coba lagi!",
                        nextStep: 2,
                    },
                    {
                        text: "Rasionya adalah 1:3.",
                        response:
                            "Salah, 1:3 bukan rasio yang benar. Coba perhatikan lagi angka-angka yang diberikan.",
                        nextStep: 2,
                    },
                ],
            },
            {
                message:
                    "Sekarang, kita akan menerapkan konsep ini ke dalam sebuah soal kontekstual. Misalkan rasio tepung tapioka terhadap ikan giling adalah 10:3. Apa arti dari rasio ini menurutmu?",
                options: [
                    {
                        text: "Artinya, untuk setiap 10 bagian tepung tapioka, ada 3 bagian ikan giling.",
                        response:
                            "Tepat sekali! Rasio 10:3 berarti bahwa untuk setiap 10 bagian tepung tapioka, ada 3 bagian ikan giling.",
                        nextStep: 3,
                    },
                    {
                        text: "Artinya, ikan giling lebih banyak daripada tepung tapioka.",
                        response:
                            "Tidak benar, rasio menunjukkan bahwa tepung tapioka lebih banyak daripada ikan giling.",
                        nextStep: 3,
                    },
                    {
                        text: "Artinya, jumlah tepung tapioka dan ikan giling sama.",
                        response:
                            "Salah, rasio ini tidak menunjukkan jumlah yang sama.",
                        nextStep: 3,
                    },
                    {
                        text: "Artinya, ikan giling hanya sedikit dibandingkan dengan tepung tapioka.",
                        response:
                            "Tidak tepat. Rasio 10:3 memang menunjukkan bahwa ikan giling lebih sedikit, tetapi jawabannya tidak lengkap.",
                        nextStep: 3,
                    },
                ],
            },
            {
                message:
                    "Bagus! Sekarang kita akan belajar tentang konsep dua rasio yang sama. Misalkan terdapat dua rasio, yaitu a : b dan c : d. Jika nilai rasionya sama, kita katakan bahwa dua rasio tersebut sama dan dapat dinyatakan sebagai Hubungan yang menunjukkan rasio-rasio sama disebut perbandingan atau proporsi.",
                options: [{ text: "Lanjut", response: "Lanjut", nextStep: 4 }],
            },
            {
                message:
                    "Mari kita coba dengan contoh yang berkaitan dengan rasio yang sudah kita hitung tadi. Jika rasio tepung tapioka dengan ikan giling adalah 10:3, apakah kamu bisa menemukan rasio lain yang setara dengan 10:3?",
                options: [
                    {
                        text: "Rasio 20:6.",
                        response:
                            "Tepat sekali! Rasio 20:6 setara dengan 10:3 karena jika kita membagi kedua angka pada rasio 20:6 dengan 2, kita mendapatkan 10:3.",
                        nextStep: 5,
                    },
                    {
                        text: "Rasio 5:2.",
                        response:
                            "Tidak, 5:2 tidak setara dengan 10:3. Rasio ini menunjukkan perbandingan yang berbeda. Coba lagi!",
                        nextStep: 5,
                    },
                    {
                        text: "Rasio 30:10.",
                        response:
                            "Tidak tepat. 30:10 memiliki angka yang lebih besar, tetapi jika kita menyederhanakannya, hasilnya bukan 10:3. Coba periksa kembali.",
                        nextStep: 5,
                    },
                    {
                        text: "Rasio 10:30.",
                        response:
                            "Salah, 10:30 menunjukkan perbandingan yang terbalik dari rasio yang benar. Coba perhatikan kembali bagaimana rasio harus disusun.",
                        nextStep: 5,
                    },
                ],
            },
            {
                message:
                    "Sekarang mari kita periksa lebih jauh. Misalkan kamu memiliki dua rasio, 15:9 dan 5:3. Menurutmu, apakah kedua rasio ini setara?",
                options: [
                    {
                        text: "Ya, keduanya setara.",
                        response:
                            "Betul sekali! Kedua rasio ini setara karena jika kita membagi 15:9 dengan 3, kita mendapatkan 5:3. Ini berarti kedua rasio memiliki perbandingan yang sama. Karena kedua rasio ini setara, kita bisa menuliskannya sebagai 15:9 = 5:3.",
                        nextStep: 6,
                    },
                    {
                        text: "Tidak, keduanya tidak setara.",
                        response:
                            "Sebenarnya, kedua rasio ini setara. Coba lihat bahwa jika kita membagi 15:9 dengan 3, hasilnya adalah 5:3, yang menunjukkan perbandingan yang sama. Karena kedua rasio ini setara, kita bisa menuliskannya sebagai 15:9 = 5:3.",
                        nextStep: 6,
                    },
                ],
            },
            {
                message:
                    "Sekarang mari kita coba dengan contoh yang berbeda. Misalkan kamu memiliki dua rasio, 12:8 dan 6:5. Menurutmu, apakah kedua rasio ini setara?",
                options: [
                    {
                        text: "Ya, keduanya setara.",
                        response:
                            "Tidak tepat. Kedua rasio ini tidak setara. Jika kita menyederhanakan 12:8 dengan membaginya dengan 4, kita mendapatkan 3:2. Namun, 6:5 tidak bisa disederhanakan menjadi 3:2, jadi mereka memiliki perbandingan yang berbeda.",
                        nextStep: 7,
                    },
                    {
                        text: "Tidak, keduanya tidak setara.",
                        response:
                            "Betul sekali! Kedua rasio ini tidak setara. Jika kita menyederhanakan 12:8 dengan membaginya dengan 4, kita mendapatkan 3:2. Namun, rasio 6:5 tidak bisa disederhanakan menjadi 3:2, sehingga mereka tidak memiliki perbandingan yang sama.",
                        nextStep: 7,
                    },
                ],
            },
            {
                message:
                    "Sekarang, setelah kita memahami konsep rasio yang setara, mari kita lihat bagaimana kita bisa menerapkannya dalam bentuk persamaan. Ketika kita memiliki rasio yang melibatkan variabel, kita dapat menggunakan metode tertentu untuk menemukan nilai dari variabel tersebut. Mari kita coba soal berikut untuk melihat bagaimana ini bekerja.",
                options: [{ text: "Lanjut", response: "Lanjut", nextStep: 8 }],
            },
            {
                message:
                    "Jika ada persamaan x : 3 = 4 : 5, bagaimana cara kamu menemukan nilai x?",
                options: [
                    {
                        text: "Mengalikan silang x dengan 5 dan 3 dengan 4.",
                        response:
                            "Betul sekali! Dengan mengalikan silang, kita mendapatkan 5x = 12, jadi x = 12/5.",
                        nextStep: 9,
                    },
                    {
                        text: "Mengurangi 3 dari 5 lalu mengalikan dengan x.",
                        response:
                            "Tidak, pengurangan tidak digunakan di sini. Coba pikirkan cara lain.",
                        nextStep: 9,
                    },
                    {
                        text: "Membagi 4 dengan 5 lalu mengalikan dengan 3.",
                        response:
                            "Tidak, ini bukan langkah yang tepat untuk menyelesaikan persamaan ini.",
                        nextStep: 9,
                    },
                    {
                        text: "Menambahkan 3 ke 5 dan kemudian membagi dengan 4.",
                        response:
                            "Tidak, kita tidak perlu menjumlahkan angka di sini. Coba ingat kembali konsep perkalian silang.",
                        nextStep: 9,
                    },
                ],
            },
            {
                message:
                    "Sekarang, mari kita coba menerapkan konsep ini dalam beberapa contoh yang lebih dekat dengan kehidupan sehari-hari. Misalkan kamu sedang membuat jus jeruk. Resepnya mengatakan bahwa untuk setiap 4 bagian jus, kamu perlu menambahkan 5 bagian air. Jika kamu sudah menuangkan 12 bagian jus, berapa bagian air yang kamu butuhkan untuk mencampurnya sesuai dengan resep?",
                options: [
                    {
                        text: "20 bagian air.",
                        response:
                            "Tidak tepat. 20 bagian air terlalu banyak. Coba pikirkan kembali cara menyelesaikannya berdasarkan rasio yang diberikan.",
                        nextStep: 10,
                    },
                    {
                        text: "15 bagian air.",
                        response:
                            "Tepat sekali! Jika kamu punya 12 bagian jus, maka kamu butuh 15 bagian air untuk mencampurnya dengan benar, berdasarkan rasio 4:5.",
                        nextStep: 10,
                    },
                    {
                        text: "9 bagian air.",
                        response:
                            "Tidak, 9 bagian air tidak cukup. Ingat bahwa jumlah air harus lebih banyak dari jus.",
                        nextStep: 10,
                    },
                    {
                        text: "12 bagian air.",
                        response:
                            "Tidak tepat, 12 bagian air akan membuat rasio jus dan air sama. Tapi ingat, rasio seharusnya 4:5, jadi kamu butuh lebih banyak air.",
                        nextStep: 10,
                    },
                ],
            },
            {
                message:
                    "Bayangkan kamu sedang mengisi bak mandi. Kamu ingin mencampur air panas dan air dingin dalam rasio 3:2. Jika kamu sudah menuangkan 15 liter air panas, berapa liter air dingin yang perlu kamu tambahkan?",
                options: [
                    {
                        text: "10 liter.",
                        response:
                            "Betul sekali! Jika kamu punya 15 liter air panas, maka kamu butuh 10 liter air dingin untuk mendapatkan rasio 3:2.",
                        nextStep: 11,
                    },
                    {
                        text: "20 liter.",
                        response:
                            "Tidak, 20 liter air dingin akan terlalu banyak. Coba pikirkan lagi bagaimana menyelesaikan persamaannya.",
                        nextStep: 11,
                    },
                    {
                        text: "7 liter.",
                        response:
                            "Tidak tepat, 7 liter tidak cukup untuk mencapai rasio 3:2. Coba lagi!",
                        nextStep: 11,
                    },
                    {
                        text: "5 liter.",
                        response:
                            "Tidak, 5 liter air dingin tidak cukup untuk mencampur dengan 15 liter air panas sesuai rasio 3:2. Coba hitung lagi.",
                        nextStep: 11,
                    },
                ],
            },
            {
                message:
                    "Kamu sedang membuat campuran tanah dan pasir untuk menanam tanaman. Resepnya mengatakan bahwa kamu harus mencampur 2 bagian tanah dengan 3 bagian pasir. Jika kamu punya 8 bagian tanah, berapa bagian pasir yang kamu perlukan?",
                options: [
                    {
                        text: "10 bagian pasir.",
                        response:
                            "Tidak, 10 bagian pasir tidak sesuai dengan rasio 2:3 yang diperlukan. Coba lagi!",
                        nextStep: 12,
                    },
                    {
                        text: "6 bagian pasir.",
                        response:
                            "Tidak tepat, 6 bagian pasir tidak cukup untuk mencampur dengan 8 bagian tanah sesuai rasio 2:3.",
                        nextStep: 12,
                    },
                    {
                        text: "12 bagian pasir.",
                        response:
                            "Tepat! Jika kamu punya 8 bagian tanah, kamu butuh 12 bagian pasir untuk mencapai rasio 2:3.",
                        nextStep: 12,
                    },
                    {
                        text: "8 bagian pasir.",
                        response:
                            "Salah, jika kamu punya 8 bagian tanah, pasir harus lebih banyak sesuai dengan rasio 2:3. Coba hitung kembali.",
                        nextStep: 12,
                    },
                ],
            },
            {
                message:
                    "Sekarang kita sudah mempelajari bagaimana menggunakan perbandingan dan rasio dalam persamaan linear. Sebelum kita akhiri, apakah ada yang ingin kamu tanyakan?",
                options: [
                    {
                        text: "Tidak, saya sudah paham.",
                        response: "Senang mendengarnya!",
                        nextStep: 15,
                    },
                    {
                        text: "Bisakah kita mengulang bagian tentang mengalikan silang?",
                        response:
                            "Tentu saja, mari kita ulang kembali bagian tersebut dengan membahasnya lebih lanjut. Jangan sungkan bertanya kepada gurumu, ya!",
                        nextStep: 15,
                    },
                    {
                        text: "Bolehkah saya mendapat lebih banyak soal latihan?",
                        response:
                            "Tentu, saya akan memberikan beberapa soal tambahan untuk kamu latih.",
                        nextStep: 13,
                    },
                ],
            },
            {
                message: "Misalkan ada x : 9 = 4 : 3. Hitunglah nilai x.",
                options: [
                    {
                        text: "x = 3",
                        response:
                            "Salah, nilai x lebih besar dari 3. Coba hitung lagi.",
                        nextStep: 14,
                    },
                    {
                        text: "x = 7.5",
                        response:
                            "Tidak benar, coba hitung kembali dengan menggunakan perkalian silang.",
                        nextStep: 14,
                    },
                    {
                        text: "x = 6",
                        response:
                            "Hampir, tapi tidak tepat. Coba periksa lagi langkah-langkahnya.",
                        nextStep: 14,
                    },
                    {
                        text: "x = 12",
                        response:
                            "Tepat! Dengan mengalikan silang, kita mendapatkan 4x = 36, sehingga x = 12.",
                        nextStep: 14,
                    },
                ],
            },
            {
                message:
                    "Sekarang, mari kita coba soal cerita yang lebih kontekstual. Misalkan kamu sedang memanggang kue dan ingin membuat adonan dengan mencampur tepung dan gula. Resepnya mengatakan bahwa rasio tepung terhadap gula adalah 5:2. Jika kamu sudah menyiapkan 6 cangkir gula, berapa cangkir tepung yang kamu butuhkan?",
                options: [
                    {
                        text: "10 cangkir",
                        response:
                            "Tidak, 10 cangkir tepung tidak cukup. Coba periksa kembali rasio 5:2 dan hitung lagi.",
                        nextStep: 15,
                    },
                    {
                        text: "12 cangkir",
                        response:
                            "Tidak tepat. 12 cangkir terlalu sedikit untuk mencapai rasio 5:2 dengan 6 cangkir gula. Coba lagi!",
                        nextStep: 15,
                    },
                    {
                        text: "15 cangkir",
                        response:
                            "Tepat sekali! Rasio 5:2 menunjukkan bahwa jika kamu memiliki 6 cangkir gula, kamu membutuhkan 15 cangkir tepung untuk mencampurnya dengan benar.",
                        nextStep: 15,
                    },
                    {
                        text: "8 cangkir",
                        response:
                            "Salah, 8 cangkir tepung tidak sesuai dengan rasio 5:2. Ingat bahwa kamu butuh lebih banyak tepung dibandingkan gula.",
                        nextStep: 15,
                    },
                ],
            },
            {
                message:
                    "Kamu sudah bekerja dengan sangat baik hari ini! Saya senang melihat bagaimana kamu bisa menerapkan konsep rasio dan persamaan dalam berbagai situasi. Tetaplah berusaha, karena setiap langkah yang kamu ambil membawa kamu lebih dekat untuk menguasai materi ini. Sampai jumpa di pelajaran berikutnya, dan tetap semangat belajar!",
                options: [],
            },
        ],
        latihan: [
            {
                message:
                    "Latihan 1: Di sebuah perpustakaan, terdapat 30 buku fiksi dan 20 buku non-fiksi. Bagaimana cara menyatakan rasio jumlah buku fiksi terhadap jumlah buku non-fiksi?",
                options: [
                    {
                        key: "A",
                        text: "A. 30:20",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 1,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "B",
                        text: "B. 40:25",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 1,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 50:30",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 1,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 60:40",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 1,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 2: Panjang sebuah papan adalah 35 cm dan lebarnya 14 cm. Sederhanakanlah rasio panjang terhadap lebar.",
                options: [
                    {
                        key: "A",
                        text: "A. 5:2",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 2,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 7:3",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 2,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 2:1",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 2,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 7:2",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 2,
                        isFinish: false,
                        isCorrect: true,
                    },
                ],
            },
            {
                message:
                    "Latihan 3: Rasio 20:15 setara dengan rasio mana di bawah ini?",
                options: [
                    {
                        key: "A",
                        text: "A. 4:3",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 3,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "B",
                        text: "B. 8:6",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 3,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 12:10",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 3,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 5:4",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 3,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 4: Seorang petani mencampurkan 12 kg pupuk organik dengan 8 kg pupuk kimia untuk digunakan di ladangnya. Jika petani tersebut ingin membuat campuran pupuk dalam jumlah yang lebih besar tetapi dengan rasio yang sama, berapakah rasio lain yang setara dengan 12 kg pupuk organik dan 8 kg pupuk kimia?",
                options: [
                    {
                        key: "A",
                        text: "A. 6 kg pupuk organik dan 4 kg pupuk kimia",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 9 kg pupuk organik dan 6 kg pupuk kimia",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 18 kg pupuk organik dan 12 kg pupuk kimia",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "D",
                        text: "D. 15 kg pupuk organik dan 10 kg pupuk kimia",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message: "Latihan 5: Jika x : 4 = 8 : 16, berapakah nilai x?",
                options: [
                    {
                        key: "A",
                        text: "A. 2",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 5,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "B",
                        text: "B. 4",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 5,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 8",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 5,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 16",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 5,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 6: Diketahui persamaan rasio 6 : x = 18 : 9. Hitunglah nilai x.",
                options: [
                    {
                        key: "A",
                        text: "A. 3",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 6,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 2",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 6,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 6",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 6,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "D",
                        text: "D. 4",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 6,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 7: Sebuah instruksi mengatakan bahwa rasio bensin terhadap oli dalam campuran bahan bakar untuk mesin tertentu adalah 5:2. Jika kamu menggunakan 25 liter bensin, berapa liter oli yang harus kamu gunakan?",
                options: [
                    {
                        key: "A",
                        text: "A. 10 liter",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 7,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "B",
                        text: "B. 5 liter",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 7,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 15 liter",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 7,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 12 liter",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 7,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 8: Misalkan kamu memiliki 9 liter cat merah dan ingin mencampurnya dengan cat putih dalam rasio 3:5. Berapa liter cat putih yang kamu butuhkan?",
                options: [
                    {
                        key: "A",
                        text: "A. 10 liter",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 8,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 12 liter",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 8,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 15 liter",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 8,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "D",
                        text: "D. 6 liter",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 8,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 9: Dalam sebuah survei di sekolah, 120 dari 200 siswa mengatakan bahwa mereka lebih suka belajar online daripada tatap muka. Berapakah rasio siswa yang lebih suka belajar online terhadap siswa yang lebih suka belajar tatap muka?",
                options: [
                    {
                        key: "A",
                        text: "A. 3:2",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 9,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "B",
                        text: "B. 3:5",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 9,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "C",
                        text: "C. 2:3",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 9,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 5:3",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 9,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message:
                    "Latihan 10: Dari 500 orang yang disurvei, 150 mengatakan bahwa mereka membaca buku setiap hari. Berapakah rasio antara jumlah orang yang membaca buku setiap hari terhadap mereka yang tidak membaca setiap hari?",
                options: [
                    {
                        key: "A",
                        text: "A. 1:4",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 10,
                        isFinish: true,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 3:7",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 10,
                        isFinish: true,
                        isCorrect: true,
                    },
                    {
                        key: "C",
                        text: "C. 2:3",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 10,
                        isFinish: true,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 1:2",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 10,
                        isFinish: true,
                        isCorrect: false,
                    },
                ],
            },
        ],
    };

    return steps[material] || [];
};
