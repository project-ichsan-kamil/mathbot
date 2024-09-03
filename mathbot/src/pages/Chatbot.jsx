import React, { useState, useEffect } from "react";
import steps from "./ChatbotStep";

const Chatbot = () => {
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userData, setUserData] = useState({ name: "", school: "" });
    const [isUserDataEntered, setIsUserDataEntered] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    useEffect(() => {
        if (isTyping) {
            const timer = setTimeout(() => {
                setIsTyping(false);
            }, 100); // Menunggu 1 detik sebelum menyelesaikan typing
            return () => clearTimeout(timer);
        }
    }, [isTyping]);

    const getSteps = () => {
        if (selectedMaterial === "materi1") {
            return steps.stepsMateri1;
        } else if (selectedMaterial === "materi2") {
            return steps.stepsMateri2;
        } else if (selectedMaterial === "materi3") {
            return steps.stepsMateri3;
        } else if (selectedMaterial === "latihan") {
            return steps.latihan;
        }
        return [];
    };

    const handleOptionClick = (option) => {
        console.log("Current step:", step);
        console.log("Selected option:", option);
        // Tambahkan respons pengguna ke daftar
        setResponses([
            ...responses,
            { message: getSteps()[step].message, response: option.response },
        ]);

        // Set isTyping menjadi true untuk memulai delay sebelum pindah ke langkah berikutnya
        setIsTyping(true);

        const steps = getSteps();

        if (option.isFinish) {
            // Jika isFinish true, langsung loncat ke step terakhir
            setStep(steps.length - 1);
        } else {
            // Jika isFinish false, lanjut ke nextStep
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
                    response: `Nama: ${userData.name}, Sekolah: ${userData.school}`,
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
    };

    return (
        <div className="flex flex-col h-screen bg-purple-50">
            {/* Header */}
            <div className="p-4">
                <h1 className="text-purple-700 font-bold text-lg">RAPERBOT</h1>
                <p className="text-sm text-gray-500">Rasio Dan Perbandingan</p>
            </div>

            <div className="flex-grow p-4 overflow-y-auto">
                {responses.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-start">
                            {/* Ubah warna background dan text pesan dari bot */}
                            <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs">
                                {item.message}
                            </div>
                        </div>
                        <div className="flex justify-end mt-2">
                            {/* Ubah warna background dan text pesan dari user */}
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
                            <h2 className="text-lg font-bold mb-4">
                                Perkenalkan dirimu
                            </h2>
                            <form onSubmit={handleUserDataSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        Siapa namamu ?
                                    </label>
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
                                    <label className="block text-gray-700">
                                        Kelas Berapa?
                                    </label>
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
                                <button
                                    type="submit"
                                    className="bg-purple-500 text-white py-2 px-4 rounded-full w-full"
                                >
                                    Lanjut
                                </button>
                            </form>
                        </div>
                    </div>
                ) : !selectedMaterial ? (
                    <div className="flex justify-start mb-4">
                        <div className="bg-purple-200 text-gray-900 rounded-lg p-6 w-full max-w-xs shadow-md">
                            <h2 className="text-lg font-bold mb-4">
                                Pilih Materi
                            </h2>
                            <button
                                onClick={() =>
                                    handleMaterialSelection("materi1")
                                }
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                            >
                                Materi 1: Pengantar Rasio
                            </button>
                            <button
                                onClick={() =>
                                    handleMaterialSelection("materi2")
                                }
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                            >
                                Materi 2: Menyederhanakan dan Membandingkan
                                Rasio
                            </button>
                            <button
                                onClick={() =>
                                    handleMaterialSelection("materi3")
                                }
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                            >
                                Materi 3: Memahami Perbandingan dan Rasio
                                Menggunakan Persamaan Linear
                            </button>
                            <button
                                onClick={() =>
                                    handleMaterialSelection("latihan")
                                }
                                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full"
                            >
                                Latihan Soal
                            </button>
                        </div>
                    </div>
                ) : (
                    getSteps()[step] && (
                        <div className="mb-4">
                            <div className="flex justify-start">
                                <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs">
                                    {getSteps()[step].message}
                                    {getSteps()[step].image && (
                                        <img
                                            src={getSteps()[step].image}
                                            alt="Chat Image"
                                            className="rounded-lg mt-2"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col mt-2 ml-4">
                                {getSteps()[step].options.map(
                                    (option, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleOptionClick(option)
                                            }
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mt-2 text-left"
                                        >
                                            {option.text}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Chatbot;
