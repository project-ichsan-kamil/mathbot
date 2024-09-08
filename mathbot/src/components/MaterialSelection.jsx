import React from "react";

const MaterialSelection = ({ handleMaterialSelection }) => {
    return (
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
    );
};

export default MaterialSelection;
