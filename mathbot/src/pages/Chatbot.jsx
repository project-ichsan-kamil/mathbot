// export default Chatbot;
import React, { useState, useEffect } from 'react';
import steps from './ChatbotStep';

const Chatbot = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  // State untuk menyimpan data pengguna
  const [userData, setUserData] = useState({ name: '', school: '', grade: '' });
  const [isUserDataEntered, setIsUserDataEntered] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        if (step < steps.length) {
          setStep((prevStep) => prevStep + 1);
        }
      }, 2000); // Penundaan 2 detik
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  const handleOptionClick = (option) => {
    setResponses([...responses, { message: steps[step].message, response: option.response }]);
    setIsTyping(true);
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUserDataSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.school && userData.grade) {
      setResponses([
        ...responses,
        { message: "Terima kasih! Berikut data yang kamu masukkan:", response: `Nama: ${userData.name}, Sekolah: ${userData.school}, Kelas: ${userData.grade}` }
      ]);
      setIsUserDataEntered(true);
      setStep(0); // Mulai ke step ujian pertama
      setIsTyping(true);
    } else {
      alert("Silakan isi semua field.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow p-4 overflow-y-auto">
        {responses.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-start">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                {item.message}
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
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
            <div className="bg-blue-100 text-gray-900 rounded-lg p-6 w-full max-w-xs shadow-md">
              <h2 className="text-lg font-bold mb-4">Perkenalkan dirimu</h2>
              <form onSubmit={handleUserDataSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Siapa namamu?</label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    placeholder="...isi nama lengkapmu..."
                    className="w-full p-2 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Dari kelas mana?</label>
                  <input
                    type="text"
                    name="school"
                    value={userData.school}
                    onChange={handleInputChange}
                    placeholder="...pilih kelasmu..."
                    className="w-full p-2 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Pilih satu angka bebas</label>
                  <input
                    type="text"
                    name="grade"
                    value={userData.grade}
                    onChange={handleInputChange}
                    placeholder="bebas ya..."
                    className="w-full p-2 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
                >
                  Lanjut
                </button>
              </form>
            </div>
          </div>
        ) : (
          steps[step] && (
            <div className="mb-4">
              <div className="flex justify-start">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  {steps[step].message}
                </div>
              </div>
              <div className="flex flex-col mt-2 ml-4">
                {steps[step].options.map((option, index) => (
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
      </div>
      <div className="bg-white p-4 border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border rounded-lg focus:outline-none"
          disabled
        />
      </div>
    </div>
  );
};

export default Chatbot;



