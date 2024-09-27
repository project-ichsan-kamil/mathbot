import image from "../assets/img/index";

export const getSteps = (material, name) => {
    const steps = {
        materi1: [
            {
                message: [
                    `Hai ${name}!`,
                    "Hari ini kita akan berbicara tentang sesuatu yang sering kita lakukan tanpa kita sadari. Pernahkah kamu membagi sesuatu dengan temanmu?",
                    "Misalnya, membagi kue atau permen. Bagaimana kamu biasanya membaginya?",
                ],
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
                    "Sekarang, misalkan kamu punya 6 kue dan ingin membaginya sama rata dengan temanmu. Namun, pada akhirnya kamu punya 4 kue dan temanmu hanya 2 kue. Menurutmu, apakah pembagian ini adil?",
                    { src: image.mathbot_1_1, alt: "mathbot_1_1" },
                ],
                options: [
                    {
                        text: "Tidak, itu tidak adil.",
                        response: "Kamu benar, banyaknya kuemu dan kue temanmu tidak sama.",
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
                    "Jika kita membandingkan banyaknya kue yang kamu miliki, yaitu 4 kue, dengan banyaknya kue temanmu yang hanya 2 kue, apa yang bisa kamu katakan tentang perbandingan ini?",
                ],
                options: [
                    {
                        text: "Kue saya dua kali lebih banyak.",
                        response:
                            "Benar, kue kamu dua kali lebih banyak daripada kue temanmu.",
                        nextStep: 3,
                    },
                    {
                        text: "Banyaknya kue saya sama dengan banyaknya kue teman saya.",
                        response:
                            "Tidak tepat. Sebenarnya, kamu punya lebih banyak kue, tepatnya dua kali lebih banyak daripada kue temanmu.",
                        nextStep: 3,
                    },
                    {
                        text: "Kue saya lebih sedikit daripada kue teman saya.",
                        response:
                            "Tidak, kue kamu lebih banyak daripada kue temanmu, bukan lebih sedikit. Coba periksa kembali.",
                        nextStep: 3,
                    },
                ],
            },
            {
                message: [
                    "Sekarang, bagaimana kalau kita mengatakan bahwa banyaknya kue kamu dibandingkan dengan banyaknya kue temanmu adalah 4:2? Apa artinya menurutmu?",
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
                message:[
                    "Ketika kita mengatakan bahwa banyaknya kue kamu dibandingkan dengan banyaknya kue temanmu adalah 4:2, ini disebut sebagai rasio.", 
                    "Jadi, menurutmu, apa itu rasio?"],
                options: [
                    {
                        text: "Rasio adalah cara untuk membandingkan dua nilai atau lebih.",
                        response:
                            "Tepat sekali! Rasio adalah cara untuk membandingkan dua nilai atau lebih.",
                        nextStep: 5,
                    },
                    {
                        text: "Rasio adalah pembagian yang selalu sama rata.",
                        response:
                            "Tidak, rasio tidak selalu berarti pembagian yang sama rata. Rasio adalah cara untuk membandingkan dua nilai atau lebih.",
                        nextStep: 5,
                    },
                    {
                        text: "Rasio adalah nilai yang lebih besar dibandingkan dengan nilai yang lebih kecil.",
                        response:
                            "Tidak, rasio tidak selalu berarti nilai yang lebih besar dibandingkan nilai yang lebih kecil. Rasio adalah cara untuk membandingkan dua nilai atau lebih.",
                        nextStep: 5,
                    },
                ],
            },
            {
                message:[
                    "Sekarang kita coba satu contoh soal.", 
                    "Misalkan kamu memiliki 15 botol air dan temanmu memiliki 7 botol air. Bagaimana kamu bisa menuliskan rasio banyaknya botol airmu dengan botol air temanmu?"],
                options: [
                    {
                        text: "Rasionya adalah 15:7.",
                        response:
                            "Benar! Rasio 15:7 menunjukkan bahwa kamu memiliki 15 botol air dan temanmu memiliki 7 botol air. Rasio ini tidak dapat disederhanakan lagi, karena tidak ada faktor yang sama yang bisa membagi kedua angka tersebut.",
                        nextStep: 6,
                    },
                    {
                        text: "Rasionya adalah 5:3.",
                        response:
                            "Tidak tepat. Rasio 15:7 tidak bisa disederhanakan menjadi 5:3, karena kedua angka tersebut tidak memiliki faktor pembagi yang sama.",
                        nextStep: 6,
                    },
                    {
                        text: "Saya tidak tahu.",
                        response:
                            "Tidak apa-apa. Jika kamu memiliki 15 botol air dan temanmu memiliki 7 botol air, cara menuliskan rasionya adalah 15:7.",
                        nextStep: 6,
                    },
                ],
            },
            {
                message:[
                    "Sekarang saatnya kamu berlatih sendiri.", 
                    "Di sebuah taman, terdapat 18 bangku kayu dan 12 bangku besi. Bagaimana bentuk paling sederhana dari rasio banyaknya bangku kayu dengan bangku besi di taman tersebut?"],
                options: [
                    {
                        text: "18:12",
                        response:
                            "Hampir benar, tetapi 18:12 bisa disederhanakan. Coba pikirkan lagi apakah ada angka yang dapat membagi kedua bilangan tersebut.",
                        nextStep: 7,
                    },
                    {
                        text: "3:2",
                        response:
                            "Tepat sekali! Bentuk paling sederhana dari rasio 18:12 adalah 3:2, karena kita bisa membagi kedua bilangan dengan 6.",
                        nextStep: 7,
                    },
                    {
                        text: "2:3",
                        response:
                            "Tidak tepat, rasio yang benar seharusnya 3:2, bukan 2:3. Pastikan urutan banyaknya bangku sesuai dengan yang ada di taman.",
                        nextStep: 7,
                    },
                    {
                        text: "12:18",
                        response:
                            "Rasio ini terbalik. Bangku kayu lebih banyak, di rasionya harus mencerminkan bahwa ada 18 bangku kayu dan 12 bangku besi, bukan sebaliknya.",
                        nextStep: 7,
                    },
                ],
            },
            {
                message:[
                    "Perhatikan Gambar berikut!",
                    { src: image.mathbot_1_2, alt: "mathbot_1_2" },
                    "Bagaimana kamu menuliskan rasio banyaknya gelas berisi susu dengan banyaknya gelas berisi coklat?"],
                image: image.mathbot_1_2,
                options: [
                    {
                        text: "4:6",
                        response:
                            "Tepat sekali! Rasio banyaknya gelas berisi susu dengan banyaknya gelas berisi coklat adalah 4:6. Tetapi, coba pikirkan lagi. Apakah rasio ini masih bisa disederhanakan?",
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
                            "Bagus! 2:3 adalah penyederhanaan dari rasio 4:6. Ini adalah cara lain untuk menuliskan perbandingan banyaknya gelas susu dengan coklat.",
                        nextStep: 8,
                    },
                    {
                        text: "3:2",
                        response:
                            "Coba lagi! Rasio 3:2 tidak menggambarkan perbandingan banyaknya gelas susu dan coklat yang kamu miliki. Pastikan kamu menghitung rasionya dengan benar.",
                        nextStep: 8,
                    },
                ],
            },
            {
                message:[
                    "Baiklah, kamu sudah bekerja dengan sangat baik pada materi ini ini!",
                    "Sekarang kamu tahu bahwa rasio adalah cara untuk membandingkan dua nilai atau lebih, dan kamu juga tahu bagaimana cara untuk menyederhanakan rasio."
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
                message:[
                    "Hai, selamat datang kembali!", 
                    "Pada materi sebelumnya, kita sudah belajar tentang rasio. Masih ingat apa itu rasio?",
                ],
                options: [
                    {
                        text: "Rasio adalah perbandingan antara dua nilai atau lebih",
                        response:
                            "Tepat sekali! Rasio adalah cara untuk membandingkan dua nilai atau lebih.",
                        nextStep: 1,
                        isFinish: false,
                    },
                    {
                        text: "Rasio adalah pembagian antara dua nilai.",
                        response:
                            "Hampir tepat, tapi rasio tidak sama dengan pembagian. Mari kita ingat bersama, rasio adalah perbandingan antara dua nilai atau lebih.",
                        nextStep: 1,
                        isFinish: false,
                    },
                    {
                        text: "Rasio adalah jumlah total dari dua nilai.",
                        response:
                            "Tidak tepat, rasio tidak berarti jumlah total dari dua nilai. Mari kita ingat lagi, rasio adalah perbandingan antara dua nilai atau lebih.",
                        nextStep: 1,
                        isFinish: false,
                    },
                    {
                        text: "Saya tidak ingat.",
                        response:
                            "Tidak masalah, mari kita ingat bersama. Rasio adalah perbandingan antara dua nilai atau lebih.",
                        nextStep: 1,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Masih ingatkah pada materi sebelumnya kita juga telah belajar tentang menyederhanakan rasio?", 
                    "Hari ini, kita akan membahasnya lebih lanjut agar kamu bisa menyelesaikan masalah yang berkaitan dengan rasio dengan lebih baik"
                ],
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
                message:[
                    "Jika kamu punya rasio 6:4, menurutmu bagaimana caranya menyederhanakan rasio ini? Apakah kamu bisa memikirkan cara untuk membuat angka-angka ini lebih kecil tetapi tetap mempertahankan perbandingannya?",
                ],
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
                message:[
                    "Mari kita coba dengan contoh lain.",
                    "Misalkan ada 12 siswa laki-laki dan 8 siswa perempuan di kelas. Bagaimana bentuk paling sederhana dari rasio siswa laki-laki dengan siswa perempuan?"
                ],
                options: [
                    {
                        text: "12:8.",
                        response:
                            "Hampir benar! Rasio 12:8 bisa disederhanakan lebih lanjut. Coba bagi kedua angka dengan angka yang sama untuk menemukan bentuk paling sederhananya.",
                        nextStep: 4,
                        isFinish: false,
                    },
                    {
                        text: "3:2.",
                        response:
                            "Bagus sekali! Bentuk paling sederhana dari rasio 12:8 adalah 3:2. Ini didapat dengan membagi kedua angka dengan 4. Menyederhanakan rasio membantu mempermudah perbandingan.",
                        nextStep: 4,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Sekarang saatnya latihan!",
                    "Jika ada 18 siswa yang suka olahraga dan 12 siswa yang suka seni, bagaimana kamu menuliskan rasio siswa yang suka olahraga dengan siswa yang suka seni dalam bentuk yang paling sederhana?",
                ],
                options: [
                    {
                        text: "18:12.",
                        response:
                            "Hampir tepat! Rasio 18:12 bisa disederhanakan menjadi 3:2 dengan membagi kedua angka dengan 6. Ini berarti ada 3 siswa yang suka olahraga untuk setiap 2 siswa yang suka seni.",
                        nextStep: 5,
                        isFinish: false,
                    },
                    {
                        text: "6:4.",
                        response:
                            "Coba lagi. Rasio 18:12 bisa disederhanakan dengan membagi kedua angka dengan 6, sehingga menjadi 3:2.",
                        nextStep: 5,
                        isFinish: false,
                    },
                    {
                        text: "3:2.",
                        response:
                            "Tepat sekali! Rasio 18:12 bisa disederhanakan menjadi 3:2. Ini berarti ada 3 siswa yang suka olahraga untuk setiap 2 siswa yang suka seni.",
                        nextStep: 5,
                        isFinish: false,
                    },
                    {
                        text: "9:6.",
                        response:
                            "Tidak tepat. Rasio 9:6 memang bisa disederhanakan menjadi 3:2, tetapi ini bukan perbandingan yang benar untuk 18:12. Coba pikirkan bagaimana kita bisa menyederhanakan 18:12.",
                        nextStep: 5,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Sekarang, bagaimana jika kita punya dua rasio, yaitu 18:12 dan 3:2. Menurutmu, apakah kedua rasio ini sama atau berbeda?",
                ],
                options: [
                    {
                        text: "Mereka sama.",
                        response:
                            "Benar! Meskipun angka-angkanya berbeda, rasio 18:12 bisa disederhanakan menjadi 3:2, jadi mereka sebenarnya sama. Ini menunjukkan bahwa rasio yang sama dapat ditulis dengan angka yang berbeda tetapi tetap mewakili perbandingan yang sama.",
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
                message:[
                    "Mari kita coba lagi dengan contoh lain.",
                    "Misalkan di kelas pertama ada 24 siswa laki-laki dan 16 siswa perempuan, sedangkan di kelas kedua ada 12 siswa laki-laki dan 8 siswa perempuan. Apakah rasio siswa laki-laki dengan siswa perempuan di kedua kelas ini sama atau berbeda?",
                ],
                options: [
                    {
                        text: "Rasionya sama, yaitu 3:2.",
                        response:
                            "Bagus! Di kedua kelas, kita bisa menyederhanakan rasionya menjadi 3:2. Walaupun banyaknya siswa di kedua kelas berbeda, rasio antara laki-laki dan perempuan di kedua kelas ini tetap sama.",
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
                message:[
                    "Sekarang giliranmu untuk mencoba.", 
                    "Jika ada 30 rumah tangga yang memiliki mobil dan 20 rumah tangga yang tidak memiliki mobil, dan di kota lain ada 15 rumah tangga yang memiliki mobil dan 10 rumah tangga yang tidak memiliki mobil, apakah rasio kepemilikan mobil di kedua kota ini sama?",
                    { src: image.mathbot_2_1, alt: "mathbot_2_1" },
                ],
                image: image.mathbot_2_1,
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
                            "Mari kita coba hitung bersama. Rasio 30:20 bisa disederhanakan menjadi 3:2, dan begitu pula rasio 15:10 di kota kedua bisa disederhanakan menjadi 3:2. Jadi, kedua rasio ini sama.",
                        nextStep: 8,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Mari kita coba satu soal lagi.", 
                    "Di Taman A, ada 50 pohon mangga dan 25 pohon jambu. Di Taman B, ada 60 pohon mangga dan 40 pohon jambu. Apakah rasio banyaknya pohon mangga terhadap pohon jambu di kedua taman ini sama?",
                    { src: image.mathbot_2_2, alt: "mathbot_2_2" },
                ],
                image: image.mathbot_2_2,
                options: [
                    {
                        text: "Ya, rasionya sama.",
                        response:
                            "Tidak tepat. Mari kita hitung bersama. Rasio 50:25 di Taman A bisa disederhanakan menjadi 2:1, sedangkan rasio 60:40 di Taman B bisa disederhanakan menjadi 3:2. Karena 2:1 dan 3:2 berbeda, maka rasio banyaknya pohon mangga terhadap pohon jambu di kedua taman ini tidak sama.",
                        nextStep: 9,
                        isFinish: false,
                    },
                    {
                        text: "Tidak, rasionya berbeda.",
                        response:
                            "Tepat sekali! Rasio 50:25 di Taman A bisa disederhanakan menjadi 2:1, sedangkan rasio 60:40 di Taman B bisa disederhanakan menjadi 3:2. Karena 2:1 dan 3:2 berbeda, maka rasio banyaknya pohon mangga terhadap pohon jambu di kedua taman ini tidak sama.",
                        nextStep: 9,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Jadi, dapat ditarik kesimpulan bahwa ketika dua rasio memiliki nilai yang sama, kita menyebutnya sebagai perbandingan atau proporsi.",
                    "Dalam bentuk matematika, kita menuliskannya sebagai a : b = c : d, yang berarti rasio a terhadap b sama dengan rasio c terhadap d.",
                    "Bisakah kamu menentukan bentuk lain dari persamaan ini?"
                ],
                options: [
                    {
                        text: { src: image.opsi_1, alt: "opsi_1" },
                        response:
                            "Tidak tepat. Ingat bahwa rasio a : b sama dengan rasio c : d, seharusnya dituliskan sebagai a/b = c/d.",
                        nextStep: 10,
                        isFinish: false,
                    },
                    {
                        text: { src: image.opsi_2, alt: "opsi_2" },
                        response:
                            "Benar! Bentuk lain dari persamaan a : b = c : d adalah a/b = c/d.",
                        nextStep: 10,
                        isFinish: false,
                    },
                    {
                        text: { src: image.opsi_3, alt: "opsi_3" },
                        response:
                            "Tidak tepat. Ingat bahwa rasio a : b sama dengan rasio c : d, seharusnya dituliskan sebagai a/b = c/d.",
                        nextStep: 10,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Sebelum kita akhiri, apakah ada sesuatu yang ingin kamu tanyakan?",
                ],
                options: [
                    {
                        text: "Tidak, saya merasa sudah paham semuanya.",
                        response:
                            "Bagus sekali! Saya senang kamu merasa sudah paham. Sampai jumpa di materi berikutnya di mana kita akan mempelajari tentang hubungan antara rasio dengan persamaan linear.",
                        nextStep: 11,
                        isFinish: true,
                    },
                    {
                        text: "Bolehkah saya mendapatkan lebih banyak contoh soal untuk latihan?",
                        response:
                            "Tentu, saya akan menyiapkan soal tambahan untuk kamu berlatih. Terus semangat belajar!",
                        nextStep: 11,
                        isFinish: false,
                    },
                    {
                        text: "Saya masih bingung tentang cara menyederhanakan rasio tertentu.",
                        response:
                            "Tidak masalah, mari kita ulangi bagian yang kamu bingungkan. Kita bisa membahasnya lebih lanjut. Silahkan bertanya kepada gurumu, ya!",
                        nextStep: 11,
                        isFinish: true,
                    },
                    {
                        text: "Apa hubungan antara rasio dan konsep lain seperti persamaan?",
                        response:
                            "Pertanyaan yang bagus! Kita akan membahas hubungan antara rasio dengan persamaan linear di materi berikutnya. Pastikan kamu mengikuti ya!",
                        nextStep: 11,
                        isFinish: true,
                    },
                ],
            },
            {
                message:[
                    "Mari kita coba soal berikut ini.", 
                    "Misalkan ada 7.5 liter jus jeruk dan 5 liter jus apel. Bagaimana kamu menuliskan rasio banyaknya jus jeruk dengan jus apel?",
                ],
                options: [
                    {
                        text: "Rasionya adalah 7.5:5.",
                        response:
                            "Benar! Rasio 7.5:5 sudah benar. Ini dapat disederhanakan menjadi 3:2. Artinya, untuk setiap 3 liter jus jeruk, ada 2 liter jus apel.",
                        nextStep: 12,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 3:2.",
                        response:
                            "Tepat sekali! Rasio 7.5:5 dapat disederhanakan menjadi 3:2. Ini berarti ada 3 liter jus jeruk untuk setiap 2 liter jus apel.",
                        nextStep: 12,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 15:10.",
                        response:
                            "Tidak, 15:10 adalah hasil dari mengalikan rasio 7.5:5 dengan 2, bukan hasil penyederhanaan. Coba hitung ulang untuk mendapatkan rasio yang lebih sederhana.",
                        nextStep: 12,
                        isFinish: false,
                    },
                    {
                        text: "Rasionya adalah 2:3.",
                        response:
                            "Tidak, rasio 2:3 tidak benar untuk perbandingan ini. Coba lihat kembali rasio 7.5:5 dan cara penyederhanaannya.",
                        nextStep: 12,
                        isFinish: false,
                    },
                ],
            },
            {
                message:[
                    "Sekarang mari kita lihat lebih dalam.",
                    "Pada soal sebelumnya, rasio 7.5:5 disederhanakan menjadi 3:2. Apa artinya rasio 3:2 ini?"
                ],
                options: [
                    {
                        text: "Ini berarti untuk setiap 3 liter jus jeruk, ada 2 liter jus apel.",
                        response:
                            "Tepat sekali! Rasio 3:2 berarti bahwa untuk setiap 3 liter jus jeruk, ada 2 liter jus apel. Ini menggambarkan perbandingan antara kedua jenis jus.",
                        nextStep: 13,
                        isFinish: false,
                    },
                    {
                        text: "Ini berarti ada 3 liter jus jeruk dan 2 liter jus apel secara keseluruhan.",
                        response:
                            "Tidak benar. Rasio 3:2 bukan jumlah total jus jeruk dan apel, melainkan perbandingan antara keduanya.",
                        nextStep: 13,
                        isFinish: false,
                    },
                    {
                        text: "Ini berarti ada 5 liter jus jeruk dan 3 liter jus apel.",
                        response:
                            "Salah, rasio 3:2 tidak menunjukkan jumlah spesifik jus jeruk dan apel. Rasio ini menggambarkan perbandingan, bukan totalnya.",
                        nextStep: 13,
                        isFinish: false,
                    },
                    {
                        text: "Ini berarti rasio jus jeruk dan jus apel sama.",
                        response:
                            "Tidak benar. Rasio 3:2 menunjukkan perbandingan, bukan kesamaan banyak jus jeruk dan jus apel.",
                        nextStep: 13,
                        isFinish: false,
                    },
                ],
            },
             {
                message:[
                    "Kamu telah membuat kemajuan besar hari ini!",
                    "Sekarang kamu tidak hanya tahu cara menyederhanakan rasio, tetapi juga memahami apa itu perbandingan dan proporsi. Ini akan sangat membantu kamu dalam menyelesaikan soal-soal perbandingan di masa depan.",
                    "Sampai bertemu di pertemuan berikutnya!"
                ],
                options: [],
            },
        ],

        
        materi3: [
            {
                message:[
                    "Hai, selamat datang di pertemuan hari ini!",
                    "Kita akan mempelajari lebih dalam tentang bagaimana rasio dapat dihubungkan dengan persamaan linear. Sebelum kita mulai, apakah kamu sudah siap?"
                ],
                options: [
                    {
                        text: "Ya, saya siap.",
                        response: "Bagus! Mari kita mulai.",
                        nextStep: 1,
                        isFinish: false
                    },
                    {
                        text: "Saya masih sedikit bingung tentang rasio.",
                        response:
                            "Tidak apa-apa, kita akan pelajari bersama secara perlahan.",
                        nextStep: 1,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Mari kita mulai dengan contoh sederhana.",
                    "Ibumu membuat pempek menggunakan 300 gram tepung tapioka dan 90 gram ikan giling. Bagaimana kamu menuliskan rasio tepung tapioka dengan ikan giling?",
                    { src: image.mathbot_3_1, alt: "mathbot_3_1" },
                ],
                image : image.mathbot_3_1,
                options: [
                    {
                        text: "Rasionya adalah 300:90.",
                        response:
                            "Benar! Rasionya adalah 300:90, tapi kita bisa menyederhanakannya. Masih ingatkah kamu bagaimana cara menyederhanakan rasio?",
                        nextStep: 2,
                        isFinish: false
                    },
                    {
                        text: "Rasionya adalah 10:3.",
                        response:
                            "Tepat sekali! Rasio 300:90 bisa disederhanakan menjadi 10:3 dengan membagi kedua angka dengan 30.",
                        nextStep: 2,
                        isFinish: false
                    },
                    {
                        text: "Rasionya adalah 3:1.",
                        response:
                            "Tidak, 3:1 bukan hasil dari penyederhanaan rasio 300:90. Coba lagi!",
                        nextStep: 2,
                        isFinish: false
                    },
                    {
                        text: "Rasionya adalah 1:3.",
                        response:
                            "Salah, 1:3 bukan rasio yang benar. Coba perhatikan lagi angka-angka yang diberikan.",
                        nextStep: 2,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Sekarang, kita akan menerapkan konsep ini ke dalam sebuah soal kontekstual.",
                    "Misalkan rasio tepung tapioka terhadap ikan giling adalah 10:3. Apa arti dari rasio ini menurutmu?"
                ],
                options: [
                    {
                        text: "Artinya, untuk setiap 10 bagian tepung tapioka, ada 3 bagian ikan giling.",
                        response:
                            "Tepat sekali! Rasio 10:3 berarti bahwa untuk setiap 10 bagian tepung tapioka, ada 3 bagian ikan giling.",
                        nextStep: 3,
                        isFinish: false
                    },
                    {
                        text: "Artinya, untuk setiap 3 bagian tepung tapioka, ada 10 bagian ikan giling.",
                        response:
                            "Tidak tepat. Rasio 10:3 berarti tepung tapioka lebih banyak daripada ikan giling, bukan sebaliknya",
                        nextStep: 3,
                        isFinish: false
                    },
                    {
                        text: "Artinya, banyaknya tepung tapioka dan ikan giling sama.",
                        response:
                            "Salah, rasio ini tidak menunjukkan nilai yang sama.",
                        nextStep: 3,
                        isFinish: false
                    },
                    {
                        text: "Artinya, ikan giling lebih banyak daripada tepung tapioka.",
                        response:
                            "Tidak benar, rasio menunjukkan bahwa tepung tapioka lebih banyak daripada ikan giling.",
                        nextStep: 3,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Nah, pada  pertemuan sebelumnya kita telah belajar mengenai dua rasio yang sama.",
                    "Jika rasio tepung tapioka dengan ikan giling adalah 10:3, apakah kamu bisa menemukan rasio lain yang setara dengan 10:3?",
                ],
                   
                options: [
                    {
                        text: "Rasio 5:2.",
                        response:
                            "Tidak, 5:2 tidak setara dengan 10:3. Rasio ini menunjukkan perbandingan yang berbeda. Coba lagi!",
                        nextStep: 4,
                        isFinish: false
                    },
                    {
                        text: "Rasio 20:6.",
                        response:
                            "Tepat sekali! Rasio 20:6 setara dengan 10:3 karena jika kita membagi kedua angka pada rasio 20:6 dengan 2, kita mendapatkan 10:3.",
                        nextStep: 4,
                        isFinish: false
                    },          
                    {
                        text: "Rasio 30:10.",
                        response:
                            "Tidak tepat. 30:10 memiliki angka yang lebih besar, tetapi jika kita menyederhanakannya, hasilnya bukan 10:3. Coba periksa kembali.",
                        nextStep: 4,
                        isFinish: false
                    },
                    {
                        text: "Rasio 10:30.",
                        response:
                            "Salah, 10:30 menunjukkan perbandingan yang terbalik dari rasio yang benar. Coba perhatikan kembali bagaimana rasio harus disusun.",
                        nextStep: 4,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Sekarang, mari kita lihat bagaimana kita bisa menerapkannya dalam bentuk persamaan.",
                    "Ketika kita memiliki rasio yang melibatkan variabel, kita dapat menggunakan metode tertentu untuk menemukan nilai dari variabel tersebut.",
                    "Mari kita coba soal berikut untuk melihat bagaimana penerapannya."
                ],
                options: [{ text: "Lanjut", response: "Lanjut", nextStep: 5, isFinish: false }],
            },
            // {
            //     message:[
            //         "Sekarang mari kita pelajari lebih jauh.",
            //         "Misalkan kamu memiliki dua rasio, 15:9 dan 5:3. Menurutmu, apakah kedua rasio ini setara?"
            //     ],
            //     options: [
            //         {
            //             text: "Ya, keduanya setara.",
            //             response:
            //                 "Betul sekali! Kedua rasio ini setara karena jika kita membagi 15:9 dengan 3, kita mendapatkan 5:3. Ini berarti kedua rasio memiliki perbandingan yang sama. Karena kedua rasio ini setara, kita bisa menuliskannya sebagai 15:9 = 5:3.",
            //             nextStep: 6,
            //         },
            //         {
            //             text: "Tidak, keduanya tidak setara.",
            //             response:
            //                 "Sebenarnya, kedua rasio ini setara. Coba lihat bahwa jika kita membagi 15:9 dengan 3, hasilnya adalah 5:3, yang menunjukkan perbandingan yang sama. Karena kedua rasio ini setara, kita bisa menuliskannya sebagai 15:9 = 5:3.",
            //             nextStep: 6,
            //         },
            //     ],
            // },
            // {
            //     message:[
            //         "Mari kita coba dengan contoh yang berbeda",
            //         "Misalkan kamu memiliki dua rasio, 12:8 dan 6:5. Menurutmu, apakah kedua rasio ini setara?"
            //     ],
            //     options: [
            //         {
            //             text: "Ya, keduanya setara.",
            //             response:
            //                 "Tidak tepat. Kedua rasio ini tidak setara. Jika kita menyederhanakan 12:8 dengan membaginya dengan 4, kita mendapatkan 3:2. Namun, 6:5 tidak bisa disederhanakan menjadi 3:2, jadi mereka memiliki perbandingan yang berbeda.",
            //             nextStep: 7,
            //         },
            //         {
            //             text: "Tidak, keduanya tidak setara.",
            //             response:
            //                 "Betul sekali! Kedua rasio ini tidak setara. Jika kita menyederhanakan 12:8 dengan membaginya dengan 4, kita mendapatkan 3:2. Namun, rasio 6:5 tidak bisa disederhanakan menjadi 3:2, sehingga mereka tidak memiliki perbandingan yang sama.",
            //             nextStep: 7,
            //         },
            //     ],
            // },
            {
                message:
                    ["Jika ada persamaan x : 3 = 4 : 5, bagaimana cara kamu menemukan nilai x?"],
                options: [
                    {
                        text: "Mengalikan silang x dengan 5 dan 3 dengan 4.",
                        response:
                            "Betul sekali! Dengan mengalikan silang, kita mendapatkan 5x = 12, jadi x = 12/5.",
                        nextStep: 6,
                        isFinish: false
                    },
                    {
                        text: "Mengurangi 3 dari 5 lalu mengalikan dengan x.",
                        response:
                            "Tidak, pengurangan tidak digunakan di sini. Coba pikirkan cara lain.",
                        nextStep: 6,
                        isFinish: false
                    },
                    {
                        text: "Membagi 4 dengan 5 lalu mengalikan dengan 3.",
                        response:
                            "Tidak, ini bukan langkah yang tepat untuk menyelesaikan persamaan ini.",
                        nextStep: 6,
                        isFinish: false
                    },
                    {
                        text: "Menambahkan 3 ke 5 dan kemudian membagi dengan 4.",
                        response:
                            "Tidak, kita tidak perlu menjumlahkan angka di sini. Coba ingat kembali konsep perkalian silang.",
                        nextStep: 6,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Sekarang, mari kita coba menerapkan konsep ini dalam beberapa contoh yang lebih dekat dengan kehidupan sehari-hari.",
                    "Misalkan kamu sedang membuat jus jeruk. Resepnya mengatakan bahwa untuk setiap 4 bagian jus, kamu perlu menambahkan 5 bagian air. Jika kamu sudah menuangkan 12 bagian jus, berapa bagian air yang kamu butuhkan untuk mencampurnya sesuai dengan resep?",
                    { src: image.mathbot_3_2, alt: "mathbot_3_2" },
                ],
                image: image.mathbot_3_2,
                options: [
                    {
                        text: "20 bagian air.",
                        response:
                            "Tidak tepat. 20 bagian air terlalu banyak. Coba pikirkan kembali cara menyelesaikannya berdasarkan rasio yang diberikan.",
                        nextStep: 7,
                        isFinish: false
                    },
                    {
                        text: "15 bagian air.",
                        response:
                            "Tepat sekali! Jika kamu punya 12 bagian jus, maka kamu butuh 15 bagian air untuk mencampurnya dengan benar, berdasarkan rasio 4:5.",
                        nextStep: 7,
                        isFinish: false
                    },
                    {
                        text: "9 bagian air.",
                        response:
                            "Tidak, 9 bagian air tidak cukup. Ingat bahwa air harus lebih banyak dari jus.",
                        nextStep: 7,
                        isFinish: false
                    },
                    {
                        text: "12 bagian air.",
                        response:
                            "Tidak tepat, 12 bagian air akan membuat rasio jus dan air sama. Tapi ingat, rasio seharusnya 4:5, jadi kamu butuh lebih banyak air.",
                        nextStep: 7,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Mari kita coba soal lain",
                    "Bayangkan kamu sedang mengisi bak mandi. Kamu ingin mencampur air panas dan air dingin dalam rasio 3:2. Jika kamu sudah menuangkan 15 liter air panas, berapa liter air dingin yang perlu kamu tambahkan?",
                    { src: image.mathbot_3_3, alt: "mathbot_3_3" },
                ],
                image: image.mathbot_3_3,
                options: [
                    {
                        text: "10 liter.",
                        response:
                            "Betul sekali! Jika kamu punya 15 liter air panas, maka kamu butuh 10 liter air dingin untuk mendapatkan rasio 3:2.",
                        nextStep: 8,
                        isFinish: false
                    },
                    {
                        text: "20 liter.",
                        response:
                            "Tidak, 20 liter air dingin akan terlalu banyak. Coba pikirkan lagi bagaimana menyelesaikan persamaannya.",
                        nextStep: 8,
                        isFinish: false
                    },
                    {
                        text: "7 liter.",
                        response:
                            "Tidak tepat, 7 liter tidak cukup untuk mencapai rasio 3:2. Coba lagi!",
                        nextStep: 8,
                        isFinish: false
                    },
                    {
                        text: "5 liter.",
                        response:
                            "Tidak, 5 liter air dingin tidak cukup untuk mencampur dengan 15 liter air panas sesuai rasio 3:2. Coba hitung lagi.",
                        nextStep: 8,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Kita coba satu soal lagi!",
                    "Kamu sedang membuat campuran tanah dan pasir untuk menanam tanaman. Resepnya mengatakan bahwa kamu harus mencampur 2 bagian tanah dengan 3 bagian pasir. Jika kamu punya 8 bagian tanah, berapa bagian pasir yang kamu perlukan?",
                    { src: image.mathbot_3_4, alt: "mathbot_3_4" },
                ],
                image: image.mathbot_3_4,
                options: [
                    {
                        text: "10 bagian pasir.",
                        response:
                            "Tidak, 10 bagian pasir tidak sesuai dengan rasio 2:3 yang diperlukan. Coba lagi!",
                        nextStep: 9,
                        isFinish: false
                    },
                    {
                        text: "6 bagian pasir.",
                        response:
                            "Tidak tepat, 6 bagian pasir tidak cukup untuk mencampur dengan 8 bagian tanah sesuai rasio 2:3.",
                        nextStep: 9,
                        isFinish: false
                    },
                    {
                        text: "12 bagian pasir.",
                        response:
                            "Tepat! Jika kamu punya 8 bagian tanah, kamu butuh 12 bagian pasir untuk mencapai rasio 2:3.",
                        nextStep: 9,
                        isFinish: false
                    },
                    {
                        text: "8 bagian pasir.",
                        response:
                            "Salah, jika kamu punya 8 bagian tanah, pasir harus lebih banyak sesuai dengan rasio 2:3. Coba hitung kembali.",
                        nextStep: 9,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Sekarang kita sudah mempelajari bagaimana menggunakan perbandingan dan rasio dalam persamaan linear.",
                    "Konsep penting yang perlu diingat adalah bahwa dalam persamaan linear, kita bisa menggunakan metode 'mengalikan silang' untuk menemukan hubungan antara dua rasio. Ini memudahkan kita untuk menemukan nilai yang belum diketahui dalam sebuah perbandingan.",
                    "Sebelum kita akhiri, apakah ada yang ingin kamu tanyakan?",
                ],
                options: [
                    {
                        text: "Tidak, saya sudah paham.",
                        response: "Senang mendengarnya!",
                        nextStep: 15,
                        isFinish: true
                    },
                    {
                        text: "Bisakah kita mengulang bagian tentang mengalikan silang?",
                        response:
                            "Tentu saja, mari kita ulang kembali bagian tersebut dengan membahasnya lebih lanjut. Jangan sungkan bertanya kepada gurumu, ya!",
                        nextStep: 15,
                        isFinish: true
                    },
                    {
                        text: "Bolehkah saya mendapat lebih banyak soal latihan?",
                        response:
                            "Tentu, saya akan memberikan beberapa soal tambahan untuk kamu latih.",
                        nextStep: 10,
                        isFinish: false
                    },
                ],
            },
            {
                message: [
                    "Misalkan ada x : 9 = 4 : 3. Hitunglah nilai x.",
                ],
                options: [
                    {
                        text: "x = 3",
                        response:
                            "Salah, nilai x lebih besar dari 3. Coba hitung lagi.",
                        nextStep: 11,
                        isFinish: false
                    },
                    {
                        text: "x = 7.5",
                        response:
                            "Tidak benar, coba hitung kembali dengan menggunakan perkalian silang.",
                        nextStep: 11,
                        isFinish:false
                    },
                    {
                        text: "x = 6",
                        response:
                            "Hampir, tapi tidak tepat. Coba periksa lagi langkah-langkahnya.",
                        nextStep: 11,
                        isFinish:false
                    },
                    {
                        text: "x = 12",
                        response:
                            "Tepat! Dengan mengalikan silang, kita mendapatkan 4x = 36, sehingga x = 12.",
                        nextStep: 11,
                        isFinish:false
                    },
                ],
            },
            {
                message:[
                        "Sekarang, mari kita coba soal cerita yang lebih kontekstual.",
                        "Misalkan kamu sedang memanggang kue dan ingin membuat adonan dengan mencampur tepung dan gula. Resepnya mengatakan bahwa rasio tepung terhadap gula adalah 5:2. Jika kamu sudah menyiapkan 6 cangkir gula, berapa cangkir tepung yang kamu butuhkan?",
                    ],
                options: [
                    {
                        text: "10 cangkir",
                        response:
                            "Tidak, 10 cangkir tepung tidak cukup. Coba periksa kembali rasio 5:2 dan hitung lagi.",
                        nextStep: 12,
                        isFinish: false
                    },
                    {
                        text: "12 cangkir",
                        response:
                            "Tidak tepat. 12 cangkir terlalu sedikit untuk mencapai rasio 5:2 dengan 6 cangkir gula. Coba lagi!",
                        nextStep: 12,
                        isFinish: false
                    },
                    {
                        text: "15 cangkir",
                        response:
                            "Tepat sekali! Rasio 5:2 menunjukkan bahwa jika kamu memiliki 6 cangkir gula, kamu membutuhkan 15 cangkir tepung untuk mencampurnya dengan benar.",
                        nextStep: 12,
                        isFinish: false
                    },
                    {
                        text: "8 cangkir",
                        response:
                            "Salah, 8 cangkir tepung tidak sesuai dengan rasio 5:2. Ingat bahwa kamu butuh lebih banyak tepung dibandingkan gula.",
                        nextStep: 12,
                        isFinish: false
                    },
                ],
            },
            {
                message:[
                    "Kamu sudah bekerja dengan sangat baik hari ini!",
                    "Saya senang melihat bagaimana kamu bisa menerapkan konsep rasio dan persamaan dalam berbagai situasi.",
                    "Tetaplah berusaha, karena setiap langkah yang kamu ambil membawa kamu lebih dekat untuk menguasai materi ini",
                    "Sampai jumpa di pelajaran berikutnya, dan tetap semangat belajar!"
                ],      
                options: [],
            },
        ],
        
        latihan: [
            {
                message:
                    ["Latihan 1. Di sebuah perpustakaan, terdapat 30 buku fiksi dan 20 buku non-fiksi. Bagaimana cara menyatakan rasio banyaknya buku fiksi terhadap banyaknya buku non-fiksi?"],
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
                    ["Latihan 2. Panjang sebuah papan adalah 35 cm dan lebarnya 14 cm. Sederhanakanlah rasio panjang terhadap lebar."],
                options: [
                    {
                        key: "A",
                        text: "A. 7:2",
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
                        text: "D. 5:2",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 2,
                        isFinish: false,
                        isCorrect: true,
                    },
                ],
            },
            {
                message:
                    ["Latihan 3. Rasio 20:15 setara dengan rasio mana di bawah ini?"],
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
                   [ "Latihan 4. Seorang petani mencampurkan 12 kg pupuk organik dengan 8 kg pupuk kimia untuk digunakan di ladangnya. Jika petani tersebut ingin membuat campuran pupuk dalam jumlah yang lebih besar tetapi dengan rasio yang sama, berapakah rasio lain yang setara dengan 12 kg pupuk organik dan 8 kg pupuk kimia?"],
                options: [
                    {
                        key: "A",
                        text: "A. 6 kg pupuk organik dan 8 kg pupuk kimia",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 9 kg pupuk organik dan 6 kg pupuk kimia",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: true,
                    },
                    {
                        key: "C",
                        text: "C. 10 kg pupuk organik dan 7 kg pupuk kimia",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "D",
                        text: "D. 14 kg pupuk organik dan 8 kg pupuk kimia",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 4,
                        isFinish: false,
                        isCorrect: false,
                    },
                ],
            },
            {
                message: ["Latihan 5. Jika x : 4 = 8 : 16, berapakah nilai x?"],
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
                    ["Latihan 6. Diketahui persamaan rasio 6 : x = 18 : 9. Hitunglah nilai x."],
                options: [
                    {
                        key: "A",
                        text: "A. 6",
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
                        text: "C. 3",
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
                    ["Latihan 7. Sebuah instruksi mengatakan bahwa rasio bensin terhadap oli dalam campuran bahan bakar untuk mesin tertentu adalah 5:2. Jika kamu menggunakan 25 liter bensin, berapa liter oli yang harus kamu gunakan?"],
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
                    ["Latihan 8. Misalkan kamu memiliki 9 liter cat merah dan ingin mencampurnya dengan cat putih dalam rasio 3:5. Berapa liter cat putih yang kamu butuhkan?"],
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
                    ["Latihan 9. Dalam sebuah survei di sekolah, 120 dari 200 siswa mengatakan bahwa mereka lebih suka belajar online daripada tatap muka. Berapakah rasio siswa yang lebih suka belajar online terhadap siswa yang lebih suka belajar tatap muka?"],
                options: [
                    {
                        key: "A",
                        text: "A. 3:2",
                        response: "Yah… Jawabanmu kurang tepat :(",
                        nextStep: 9,
                        isFinish: false,
                        isCorrect: false,
                    },
                    {
                        key: "B",
                        text: "B. 3:5",
                        response: "Yeay… Jawabanmu benar :)",
                        nextStep: 9,
                        isFinish: false,
                        isCorrect: true,
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
                    ["Latihan 10. Dari 500 orang yang disurvei, 150 mengatakan bahwa mereka membaca buku setiap hari. Berapakah rasio antara banyaknya orang yang membaca buku setiap hari terhadap mereka yang tidak membaca setiap hari?"],
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
