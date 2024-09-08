import React from "react";

const UserInputForm = ({ userData, setUserData, setIsUserDataEntered }) => {
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleUserDataSubmit = (e) => {
        e.preventDefault();
        if (userData.name && userData.school) {
            setIsUserDataEntered(true);
        } else {
            alert("Silakan isi semua field.");
        }
    };

    return (
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
                        <label className="block text-gray-700">Dari kelas mana?</label>
                        <select
                            name="school"
                            value={userData.school}
                            onChange={handleInputChange}
                            className="w-full p-2 px-5 bg-purple-100 border border-purple-300 rounded-full focus:outline-none"
                            required
                        >
                            <option value="">Pilih Kelas</option>
                            {Array.from({ length: 11 }, (_, i) => (
                                <option key={i} value={`7${String.fromCharCode(65 + i)}`}>
                                    7{String.fromCharCode(65 + i)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-full w-full">
                        Lanjut
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserInputForm;
