import React, { useState, useEffect } from "react";
import steps from "./ChatbotStep";
import axios from "axios";

const Chatbot = () => {
    const localUrl = 'http://localhost:3100'
    const prodUrl = 'https://raperbot.my.id/api'
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userData, setUserData] = useState({ name: "", school: "" });
    const [isUserDataEntered, setIsUserDataEntered] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [score, setScore] = useState(0); // Menyimpan skor siswa
    const [isFinished, setIsFinished] = useState(false); // Mengecek apakah latihan sudah selesai
    const [isLatihan, setIsLatihan] = useState(false); // Mengecek apakah sesi saat ini adalah latihan
    const [currentSteps, setCurrentSteps] = useState([]); // Simpan steps yang dipilih

    useEffect(() => {
        if (isTyping) {
            const timer = setTimeout(() => {
                setIsTyping(false);
            }, 100); // Menunggu 1 detik sebelum menyelesaikan typing
            return () => clearTimeout(timer);
        }
    }, [isTyping]);

    useEffect(() => {
        if (selectedMaterial) {
            const steps = getSteps();
            setCurrentSteps(steps);
        }
    }, [selectedMaterial]); // Hanya dipanggil ketika selectedMaterial berubah

    const getSteps = () => {
        if (selectedMaterial === "materi1") {
            setIsLatihan(false);
            return steps.stepsMateri1;
        } else if (selectedMaterial === "materi2") {
            setIsLatihan(false);
            return steps.stepsMateri2;
        } else if (selectedMaterial === "materi3") {
            setIsLatihan(false);
            return steps.stepsMateri3;
        } else if (selectedMaterial === "latihan") {
            setIsLatihan(true);
            return steps.latihan;
        }
        return [];
    };

    const handleOptionClick = (option) => {
        // Menambahkan respons pengguna ke daftar (hanya kirim key dari jawaban yang dipilih)
        setResponses([
            ...responses,
            { message: currentSteps[step].message, response: option.response, answer: option.key, isCorrect: option.isCorrect },
        ]);

        // Tambahkan ke skor jika jawabannya benar
        if (option.isCorrect) {
            setScore(score + 1);
        }

        // Set isTyping menjadi true untuk memulai delay sebelum pindah ke langkah berikutnya
        setIsTyping(true);

        if (option.isFinish) {
            setStep(currentSteps.length - 1); // Loncat ke step terakhir
            setIsFinished(true); // Tandai latihan sudah selesai
        } else {
            setStep(option.nextStep);
        }
    };

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleUserDataSubmit = (e) => {
        e.preventDefault();
        if (userData.name && userData.school) {
            setResponses([
                ...responses,
                {
                    message: `Terima kasih ${userData.name}, Berikut data yang kamu masukkan:`,
                    response: `Nama: ${userData.name}, Kelas: ${userData.school}`,
                },
            ]);
            setIsUserDataEntered(true);
        } else {
            alert("Silakan isi semua field.");
        }
    };

    const handleMaterialSelection = (material) => {
        setSelectedMaterial(material);
        setStep(0);
        setResponses([]);
        setIsTyping(false);
        setScore(0); // Reset score
        setIsFinished(false); // Reset latihan
    };

    const convertDataForAPI = (data) => {
        const convertedData = {
            nama: data.name,
            kelas: data.school,
            score: data.score,
        };
    
        // Menambahkan jawaban untuk soal
        data.responses.forEach((response, index) => {
            convertedData[`soal${index + 1}`] = response.answer;
        });
    
        return convertedData;
    };

    // Fungsi untuk mengirim data ke database
    const handleSubmitScore = async () => {
        const submissionData = {
            name: userData.name,
            school: userData.school,
            score: score,
            responses: responses.map((response) => ({
                answer: response.answer,  // Jawaban berupa key
            })),
        };
        const convertedData = convertDataForAPI(submissionData);

        try {
            // Kirim data ke API
            const response = await axios.post(`${localUrl}/answers`, convertedData);
            alert('Data berhasil dikirim ke server!');
        } catch (error) {
            console.error("Error submitting data:", error);
            alert('Terjadi kesalahan saat mengirim data!');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-purple-50">
            {/* Header */}
            <div className="p-4">
                <h1 className="text-purple-700 font-bold text-lg">RAPERBOT</h1>
                <p className="text-sm text-gray-500">Rasio dan Perbandingan</p>
            </div>

            <div className="flex-grow p-4 overflow-y-auto">
                {responses.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-start">
                            {/* Pesan dari bot */}
                            <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs">
                                {item.message}
                            </div>
                        </div>
                        <div className="flex justify-end mt-2">
                            {/* Pesan dari user */}
                            <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                                {item.response}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping ? (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-300 text-gray-600 rounded-lg p-3 max-w-xs">
                            Bot is typing...
                        </div>
                    </div>
                ) : !isUserDataEntered ? (
                    <div className="flex justify-start mb-4">
                        <div className="bg-purple-200 text-gray-900 rounded-lg p-6 w-full max-w-xs shadow-md">
                            <h2 className="text-lg font-bold mb-4">Perkenalkan dirimu</h2>
                            <form onSubmit={handleUserDataSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Siapa namamu?</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleInputChange}
                                        placeholder="Nama"
                                        className="w-full p-2 px-5 bg-purple-100 border border-purple-300 rounded-full focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Kelas berapa?</label>
                                    <input
                                        type="number"
                                        name="school"
                                        value={userData.school}
                                        onChange={handleInputChange}
                                        placeholder="Kelas"
                                        className="w-full p-2 px-5 bg-purple-100 border border-purple-300 rounded-full focus:outline-none"
                                        inputMode="numeric"
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-full w-full">
                                    Lanjut
                                </button>
                            </form>
                        </div>
                    </div>
                ) : !selectedMaterial ? (
                    <div className="flex justify-start mb-4">
                        <div className="bg-purple-200 text-gray-900 rounded-lg p-6 w-full max-w-xs shadow-md">
                            <h2 className="text-lg font-bold mb-4">Pilih Materi</h2>
                            <button
                                onClick={() => handleMaterialSelection("materi1")}
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                            >
                                Materi 1: Pengantar Rasio
                            </button>
                            <button
                                onClick={() => handleMaterialSelection("materi2")}
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                            >
                                Materi 2: Menyederhanakan dan Membandingkan Rasio
                            </button>
                            <button
                                onClick={() => handleMaterialSelection("materi3")}
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                            >
                                Materi 3: Memahami Hubungan Rasio Menggunakan Persamaan Linear
                            </button>
                            <button
                                onClick={() => handleMaterialSelection("latihan")}
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full"
                            >
                                Latihan Soal
                            </button>
                        </div>
                    </div>
                ) : (
                    !isFinished && currentSteps[step] && (
                        <div className="mb-4">
                            <div className="flex justify-start">
                                <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs">
                                    {currentSteps[step].message}
                                    {currentSteps[step].image && (
                                        <img src={currentSteps[step].image} alt="Chat Image" className="rounded-lg mt-2" />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col mt-2 ml-4">
                                {currentSteps[step].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mt-2 text-left"
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )
                )}
                {(isFinished && isLatihan) && (
                    <div className="mt-8">
                        <p className="text-lg font-bold text-center">
                            Skor kamu adalah: {score} dari {steps.latihan.length}
                        </p>
                        <button
                            onClick={handleSubmitScore}
                            className="bg-purple-500 text-white py-2 px-4 rounded-full w-full mt-4"
                        >
                            Submit Jawaban
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chatbot;

